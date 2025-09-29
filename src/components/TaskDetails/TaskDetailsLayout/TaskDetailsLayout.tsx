import './TaskDetailsLayout.scss';
import type { ITask } from '../../../types/types.ts';
import DeleteTaskButton from '../../UI/DeleteTaskButton';

interface ITaskDetailsLayoutProps {
	requestDeleteTask: (id: number) => void;
	currentTask: ITask | undefined;
	isDeleting: boolean;
}

export function TaskDetailsLayout(props: ITaskDetailsLayoutProps) {
	const { requestDeleteTask, isDeleting, currentTask } = props;

	if (!currentTask) {
		return null;
	}

	return (
		<main className="task-details container">
			<div className="task-details__controls">
				<DeleteTaskButton
					id={currentTask.id}
					requestDeleteTask={requestDeleteTask}
					isDeleting={isDeleting}
					className="task-details__delete-btn"
				/>
			</div>
			<div className="task-details__info">
				<h3 className="info__task-id">ID Задачи: {currentTask.id}</h3>
				<p>{currentTask.title}</p>
			</div>
		</main>
	);
}
