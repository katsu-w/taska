import TaskListLayout from './TaskListLayout';
import { useRequestGetTaskList } from '../../hooks';
import type { SetStateAction } from 'react';

export function TaskList({
	openModal,
}: {
	openModal: React.Dispatch<SetStateAction<boolean>>;
}) {
	const { taskList, isLoading, setTaskList } = useRequestGetTaskList();

	return (
		<TaskListLayout
			openModal={openModal}
			setTaskList={setTaskList}
			taskList={taskList}
			isLoading={isLoading}
		/>
	);
}
