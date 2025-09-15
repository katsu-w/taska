import TaskListLayout from './TaskListLayout';
import { useGetTaskList } from '../../hooks/useGetTaskList.ts';

export function TaskList() {
	const {taskList, isLoading} = useGetTaskList();
	
	return <TaskListLayout taskList={taskList} isLoading={isLoading} />;
}
