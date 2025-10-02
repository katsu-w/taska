import TaskListLayout from './TaskListLayout';
import { type SetStateAction, use } from 'react';
import { TaskListContext } from '../../taskListContext.ts';

interface ITaskListProps {
	isLoading: boolean;
	openModal: React.Dispatch<SetStateAction<boolean>>;
}

export function TaskList(props: ITaskListProps) {
	const { openModal, isLoading } = props;

	const { filteredData, setTaskList } = use(TaskListContext);

	return (
		<TaskListLayout
			openModal={openModal}
			setTaskList={setTaskList}
			filteredData={filteredData}
			isLoading={isLoading}
		/>
	);
}
