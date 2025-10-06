import TaskDetailsLayout from './TaskDetailsLayout';
import type { ITask } from '../../types/types.ts';
import Loader from '../Loader';
import { useState } from 'react';
import { useTasks } from '../../hooks';

interface ITaskDetailsProps {
	currentTask: ITask | undefined;
}

export function TaskDetails(props: ITaskDetailsProps) {
	const { currentTask } = props;

	if (!currentTask) {
		return <Loader />;
	}

	const { deleteTask, changeTaskCompletion, editTask } = useTasks();

	const [newTitleTextValue, setNewTitleTextValue] = useState(currentTask.title);
	const [showTextarea, setShowTextarea] = useState(false);

	return (
		<TaskDetailsLayout
			requestDeleteTask={deleteTask.requestDeleteTask}
			currentTask={currentTask}
			isDeleting={deleteTask.isDeleting}
			requestChangeCompletion={changeTaskCompletion.requestChangeCompletion}
			isUpdating={changeTaskCompletion.isUpdating}
			requestEditTask={editTask.requestEditTask}
			isEditing={editTask.isEditing}
			newTitleTextValue={newTitleTextValue}
			setNewTitleTextValue={setNewTitleTextValue}
			showTextarea={showTextarea}
			setShowTextarea={setShowTextarea}
		/>
	);
}
