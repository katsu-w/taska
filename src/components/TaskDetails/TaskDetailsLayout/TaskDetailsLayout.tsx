import './TaskDetailsLayout.scss';
import type { ITask } from '../../../types/types.ts';
import DeleteTaskButton from '../../UI/DeleteTaskButton';
import StatusCheckbox from '../../UI/StatusCheckbox';
import { type SetStateAction } from 'react';

interface ITaskDetailsLayoutProps {
	currentTask: ITask;
	requestDeleteTask: (id: number) => void;
	isDeleting: boolean;
	requestChangeCompletion: (id: number, status: boolean) => void;
	isUpdating: boolean;
	requestEditTask: (id: number, newTitle: string) => void;
	isEditing: boolean;
	newTitleTextValue: string;
	setNewTitleTextValue: React.Dispatch<SetStateAction<string>>;
	showTextarea: boolean;
	setShowTextarea: React.Dispatch<SetStateAction<boolean>>;
}

export function TaskDetailsLayout(props: ITaskDetailsLayoutProps) {
	const {
		requestDeleteTask,
		isDeleting,
		currentTask,
		requestChangeCompletion,
		isUpdating,
		requestEditTask,
		isEditing,
		newTitleTextValue,
		setNewTitleTextValue,
		showTextarea,
		setShowTextarea,
	} = props;

	return (
		<main className="task-details container">
			<div className="task-details__controls">
				<DeleteTaskButton
					id={currentTask.id}
					requestDeleteTask={requestDeleteTask}
					isDeleting={isDeleting}
					className="task-details__delete-btn"
				/>
				<button
					onClick={() => setShowTextarea(true)}
					disabled={isEditing}
					className="btn task-details__edit-btn"
				>
					Редактировать
				</button>
			</div>
			<div className="task-details__info">
				<h3 className="info__task-id">ID Задачи: {currentTask.id}</h3>
				<StatusCheckbox
					id={currentTask.id}
					status={currentTask.completed}
					requestChangeCompletion={requestChangeCompletion}
					isUpdating={isUpdating}
				/>
				{showTextarea ? (
					<>
						<textarea
							className="task-details__textarea"
							name="newTitleTextValue"
							value={newTitleTextValue}
							onChange={(e) => setNewTitleTextValue(e.target.value)}
						/>
						<button
							onClick={() => {
								requestEditTask(currentTask.id, newTitleTextValue);
								setShowTextarea(false);
							}}
							disabled={isEditing}
							className="btn task-details__edit-btn"
						>
							Сохранить
						</button>
					</>
				) : (
					<p>{currentTask.title}</p>
				)}
			</div>
		</main>
	);
}
