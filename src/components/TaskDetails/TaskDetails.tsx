import TaskDetailsLayout from './TaskDetailsLayout';
import type { ITask, TAppDispatch } from '../../types/types.ts';
import Loader from '../Loader';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEditTaskAction } from '../../actions';

interface ITaskDetailsProps {
	currentTask: ITask | undefined;
}

export function TaskDetails(props: ITaskDetailsProps) {
	const { currentTask } = props;

	if (!currentTask) {
		return <Loader />;
	}


	const [newTitleTextValue, setNewTitleTextValue] = useState(currentTask.title);
	const [showTextarea, setShowTextarea] = useState(false);
	const [isEditing, setIsEditing] = useState(false);

	const dispatch: TAppDispatch = useDispatch();

	function requestEditTask(id: string): void {
		setIsEditing(true);
		try {
			dispatch(createEditTaskAction(id, newTitleTextValue)).finally(() => setIsEditing(false));
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<TaskDetailsLayout
			currentTask={currentTask}
			requestEditTask={requestEditTask}
			isEditing={isEditing}
			newTitleTextValue={newTitleTextValue}
			setNewTitleTextValue={setNewTitleTextValue}
			showTextarea={showTextarea}
			setShowTextarea={setShowTextarea}
		/>
	);
}
