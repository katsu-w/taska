import './DeleteTaskButton.scss';
import { useMatch, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createDeleteTaskAction } from '../../../actions/createDeleteTaskAction.ts';
import { useState } from 'react';
import { fetchServer } from '../../../utils/utils.ts';
import { createLoadTaskListAction } from '../../../actions';

interface IDeleteTaskButtonProps {
	id: string;
	className: string;
}

export function DeleteTaskButton(props: IDeleteTaskButtonProps) {
	const { id, className } = props;
	const [isDeleting, setIsDeleting] = useState<boolean>(false);

	const dispatch = useDispatch();

	const homeMatch = useMatch('/');
	const navigate = useNavigate();

	return (
		<button
			onClick={(e) => {
				e.stopPropagation();
				setIsDeleting(true);
				fetchServer('DELETE', { id });
				dispatch(createLoadTaskListAction());
				!homeMatch ? navigate('/') : null;
			}}
			disabled={isDeleting}
			className={`btn ${className}`}
		>
			Удалить
		</button>
	);
}
