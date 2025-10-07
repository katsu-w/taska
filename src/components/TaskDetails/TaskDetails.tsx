import TaskDetailsLayout from './TaskDetailsLayout';
import type { ITask } from '../../types/types.ts';
import Loader from '../Loader';
import { use, useState } from 'react';
import { TaskListContext } from '../../context/taskListContext.ts';

interface ITaskDetailsProps {
	currentTask: ITask | undefined;
}

export function TaskDetails(props: ITaskDetailsProps) {
	const { currentTask } = props;

	if (!currentTask) {
		return <Loader />;
	}

	const { deleteTask, changeTaskCompletion, editTask } = use(TaskListContext);

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
