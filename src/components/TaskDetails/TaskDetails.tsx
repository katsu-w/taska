import TaskDetailsLayout from './TaskDetailsLayout';
import type { SetStateAction } from 'react';
import type { ITask } from '../../types/types.ts';
import { useRequestChangeCompletion, useRequestDeleteTask } from '../../hooks';

interface ITaskDetailsProps {
	currentTask: ITask | undefined;
	setTaskList: React.Dispatch<SetStateAction<ITask[]>>;
}

export function TaskDetails(props: ITaskDetailsProps) {
	const { currentTask, setTaskList } = props;
	const { requestDeleteTask, isDeleting } = useRequestDeleteTask(setTaskList);
	const { requestChangeCompletion, isUpdating } = useRequestChangeCompletion(setTaskList);

	return (
		<TaskDetailsLayout
			requestDeleteTask={requestDeleteTask}
			currentTask={currentTask}
			isDeleting={isDeleting}
			requestChangeCompletion={requestChangeCompletion}
			isUpdating={isUpdating}
		/>
	);
}
