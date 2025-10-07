import './DeleteTaskButton.scss';
import { useMatch, useNavigate } from 'react-router-dom';

interface IDeleteTaskButtonProps {
	id: number;
	requestDeleteTask: (id: number) => void;
	isDeleting: boolean;
	className: string;
}

export function DeleteTaskButton(props: IDeleteTaskButtonProps) {
	const { id, requestDeleteTask, isDeleting, className } = props;

	const homeMatch = useMatch('/');
	const navigate = useNavigate();

	return (
		<button
			onClick={(e) => {
				e.stopPropagation();
				requestDeleteTask(id);
				!homeMatch ? navigate('/') : null;
			}}
			disabled={isDeleting}
			className={`btn ${className}`}
		>
			Удалить
		</button>
	);
}
