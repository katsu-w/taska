import TaskListLayout from './TaskListLayout';
import type { SetStateAction } from 'react';
import type { ITask } from '../../types/types.ts';

interface ITaskListProps {
	taskList: ITask[];
	isLoading: boolean;
	setTaskList: React.Dispatch<SetStateAction<ITask[]>>;
	openModal: React.Dispatch<SetStateAction<boolean>>;
}

export function TaskList(props: ITaskListProps) {
	const { openModal, taskList, isLoading, setTaskList } = props;

	return (
		<TaskListLayout
			openModal={openModal}
			setTaskList={setTaskList}
			taskList={taskList}
			isLoading={isLoading}
		/>
	);
}
