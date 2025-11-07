import './DeleteTaskButton.scss';
import { useMatch, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { fetchServer } from '../../../utils/utils.ts';
import { createLoadTaskListAction } from '../../../actions';
import type { TAppDispatch } from '../../../types/types.ts';

interface IDeleteTaskButtonProps {
	id: string;
	className: string;
}

export function DeleteTaskButton(props: IDeleteTaskButtonProps) {
	const { id, className } = props;
	const [isDeleting, setIsDeleting] = useState<boolean>(false);

	const dispatch: TAppDispatch = useDispatch();

	const homeMatch = useMatch('/');
	const navigate = useNavigate();

	return (
		<button
			onClick={(e) => {
				e.stopPropagation();
				setIsDeleting(true);
				fetchServer('DELETE', { id }).then(() =>
					dispatch(createLoadTaskListAction()).then(() => setIsDeleting(false)),
				);

				!homeMatch ? navigate('/') : null;
			}}
			disabled={isDeleting}
			className={`btn ${className}`}
		>
			Удалить
		</button>
	);
}
