import './TaskDetailsLayout.scss';
import type { ITask } from '../../../types/types.ts';
import DeleteTaskButton from '../../UI/DeleteTaskButton';
import StatusCheckbox from '../../UI/StatusCheckbox';
import { type SetStateAction, useLayoutEffect, useRef } from 'react';

interface ITaskDetailsLayoutProps {
	currentTask: ITask;
	requestEditTask: (id: string) => void;
	isEditing: boolean;
	newTitleTextValue: string;
	setNewTitleTextValue: React.Dispatch<SetStateAction<string>>;
	showTextarea: boolean;
	setShowTextarea: React.Dispatch<SetStateAction<boolean>>;
}

export function TaskDetailsLayout(props: ITaskDetailsLayoutProps) {
	const {
		currentTask,
		requestEditTask,
		isEditing,
		newTitleTextValue,
		setNewTitleTextValue,
		showTextarea,
		setShowTextarea,
	} = props;

	const textareaRef = useRef<HTMLTextAreaElement>(null);

	useLayoutEffect(() => {
		const length = textareaRef.current?.value.length;

		if (typeof textareaRef !== null && length !== undefined) {
			textareaRef.current?.focus();
			textareaRef.current?.setSelectionRange(length, length);
		}
	}, [showTextarea]);

	return (
		<main className="task-details container">
			<div className="task-details__controls">
				<DeleteTaskButton
					id={currentTask.id}
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
				/>
				{showTextarea ? (
					<>
						<textarea
							className="task-details__textarea"
							name="newTitleTextValue"
							ref={textareaRef}
							value={newTitleTextValue}
							onChange={(e) => setNewTitleTextValue(e.target.value)}
						/>
						<button
							onClick={() => {
								requestEditTask(currentTask.id);
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
