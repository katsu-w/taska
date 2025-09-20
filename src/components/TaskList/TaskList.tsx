import TaskListLayout from './TaskListLayout';
import { useRequestGetTaskList } from '../../hooks';

export function TaskList() {
	const {taskList, isLoading, setTaskList} = useRequestGetTaskList();
	
	return <TaskListLayout setTaskList={setTaskList} taskList={taskList} isLoading={isLoading} />;
}
