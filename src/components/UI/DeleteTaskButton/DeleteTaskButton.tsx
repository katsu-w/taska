import './DeleteTaskButton.scss';
import { useMatch, useNavigate } from 'react-router-dom';
import type { TSetTaskList } from '../../../types/types.ts';
import { use } from 'react';
import { TaskListContext } from '../../../taskListContext.ts';

interface IDeleteTaskButtonProps {
	id: number;
	requestDeleteTask: (id: number, setTaskList: TSetTaskList) => void;
	isDeleting: boolean;
	className: string;
}

export function DeleteTaskButton(props: IDeleteTaskButtonProps) {
	const { id, requestDeleteTask, isDeleting, className } = props;

	const { setTaskList } = use(TaskListContext);
	const homeMatch = useMatch('/');
	const navigate = useNavigate();

	return (
		<button
			onClick={(e) => {
				e.stopPropagation();
				requestDeleteTask(id, setTaskList);
				!homeMatch ? navigate('/') : null;
			}}
			disabled={isDeleting}
			className={`btn ${className}`}
		>
			Удалить
		</button>
	);
}
