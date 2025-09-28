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
		<main className="task-details">
			<span>
				{currentTask.id}. {currentTask.title}
			</span>
			<DeleteTaskButton
				id={currentTask?.id}
				requestDeleteTask={requestDeleteTask}
				isDeleting={isDeleting}
				className="task-details__btn"
			/>
		</main>
	);
}
