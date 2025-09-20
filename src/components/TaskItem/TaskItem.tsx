import './TaskItem.scss';
import type { SetStateAction } from 'react';
import type { ITask } from '../../types/types.ts';
import { useRequestChangeCompletion, useRequestDeleteTask } from '../../hooks';

interface ITaskItemProps {
	id: number;
	status: boolean;
	title: string;
	setTaskList: React.Dispatch<SetStateAction<ITask[]>>;
}

export function TaskItem(props: ITaskItemProps) {
	const { id, status, title, setTaskList } = props;

	const { requestChangeCompletion, isUpdating } = useRequestChangeCompletion(setTaskList);
	const { requestDeleteTask, isDeleting } = useRequestDeleteTask(setTaskList);

	return (
		<div className="task">
			<div className="task__details">
				<input
					className="task__status"
					id={`task-${id}-status`}
					name={`task-${id}-status`}
					type="checkbox"
					checked={status}
					onChange={() => requestChangeCompletion(id, status)}
					disabled={isUpdating}
				/>
				<p className="task__title">{title}</p>
			</div>
			<button
				onClick={() => requestDeleteTask(id)}
				disabled={isDeleting}
				className="task__remove-btn btn"
			>
				Удалить
			</button>
		</div>
	);
}
