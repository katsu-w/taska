import TaskListLayout from './TaskListLayout';
import { type SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import { taskListSelector } from '../../selectors/taskListSelector.ts';

interface ITaskListProps {
	isLoading: boolean;
	openModal: React.Dispatch<SetStateAction<boolean>>;
}

export function TaskList(props: ITaskListProps) {
	const { openModal, isLoading } = props;

	const taskList = useSelector(taskListSelector);

	return (
		<TaskListLayout
			openModal={openModal}
			filteredData={taskList}
			isLoading={isLoading}
		/>
	);
}
