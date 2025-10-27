import TaskListLayout from './TaskListLayout';
import { type SetStateAction, use } from 'react';
import { TaskListContext } from '../../context/taskListContext.ts';
import { useSelector } from 'react-redux';
import { taskListSelector } from '../../selectors/taskListSelector.ts';

interface ITaskListProps {
	isLoading: boolean;
	openModal: React.Dispatch<SetStateAction<boolean>>;
}

export function TaskList(props: ITaskListProps) {
	const { openModal, isLoading } = props;

	const { setTaskList } = use(TaskListContext);
	const taskList = useSelector(taskListSelector);

	return (
		<TaskListLayout
			openModal={openModal}
			setTaskList={setTaskList}
			filteredData={taskList}
			isLoading={isLoading}
		/>
	);
}
