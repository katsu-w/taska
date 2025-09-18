import TaskListLayout from './TaskListLayout';
import { useGetTaskList } from '../../hooks/useGetTaskList.ts';
import { useRequestChangeCompletion } from '../../hooks/useRequestChangeCompletion.ts';

export function TaskList() {
	const {taskList, setTaskList, isLoading} = useGetTaskList();
	const {requestChangeCompletion, isUpdating} = useRequestChangeCompletion(setTaskList);
	
	return <TaskListLayout changeCompletion={requestChangeCompletion} taskList={taskList} isLoading={isLoading} isUpdating={isUpdating} />;
}
