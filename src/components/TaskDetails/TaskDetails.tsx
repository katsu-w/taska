import TaskDetailsLayout from './TaskDetailsLayout';
import type { ITask, TSetTaskList } from '../../types/types.ts';
import { useRequestChangeCompletion, useRequestDeleteTask } from '../../hooks';
import Loader from '../Loader';
import { useRequestEditTask } from '../../hooks/useRequestEditTask.ts';
import { useState } from 'react';

interface ITaskDetailsProps {
	currentTask: ITask | undefined;
	setTaskList: TSetTaskList;
}

export function TaskDetails(props: ITaskDetailsProps) {
	const { currentTask, setTaskList } = props;

	if (!currentTask) {
		return <Loader />;
	}

	const { requestDeleteTask, isDeleting } = useRequestDeleteTask(setTaskList);
	const { requestChangeCompletion, isUpdating } = useRequestChangeCompletion(setTaskList);
	const { requestEditTask, isEditing } = useRequestEditTask(setTaskList);

	const [newTitleTextValue, setNewTitleTextValue] = useState(currentTask.title);
	const [showTextarea, setShowTextarea] = useState(false);

	return (
		<TaskDetailsLayout
			requestDeleteTask={requestDeleteTask}
			currentTask={currentTask}
			isDeleting={isDeleting}
			requestChangeCompletion={requestChangeCompletion}
			isUpdating={isUpdating}
			requestEditTask={requestEditTask}
			isEditing={isEditing}
			newTitleTextValue={newTitleTextValue}
			setNewTitleTextValue={setNewTitleTextValue}
			showTextarea={showTextarea}
			setShowTextarea={setShowTextarea}
		/>
	);
}
