import './TaskDetailsLayout.scss';
import type { ITask } from '../../../types/types.ts';
import DeleteTaskButton from '../../UI/DeleteTaskButton';
import StatusCheckbox from '../../UI/StatusCheckbox';
import Loader from '../../Loader';

interface ITaskDetailsLayoutProps {
	currentTask: ITask | undefined;
	requestDeleteTask: (id: number) => void;
	isDeleting: boolean;
	requestChangeCompletion: (id: number, status: boolean) => void;
	isUpdating: boolean;
}

export function TaskDetailsLayout(props: ITaskDetailsLayoutProps) {
	const {
		requestDeleteTask,
		isDeleting,
		currentTask,
		requestChangeCompletion,
		isUpdating,
	} = props;

	if (!currentTask) {
		return <Loader />;
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
				<StatusCheckbox
					id={currentTask.id}
					status={currentTask.completed}
					requestChangeCompletion={requestChangeCompletion}
					isUpdating={isUpdating}
				/>
				<p>{currentTask.title}</p>
			</div>
		</main>
	);
}
