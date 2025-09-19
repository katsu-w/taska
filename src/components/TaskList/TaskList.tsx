import TaskListLayout from './TaskListLayout';
import { useRequestGetTaskList } from '../../hooks/useRequestGetTaskList.ts';
import { useRequestChangeCompletion } from '../../hooks/useRequestChangeCompletion.ts';

export function TaskList() {
	const {taskList, setTaskList, isLoading} = useRequestGetTaskList();
	const {requestChangeCompletion, isUpdating} = useRequestChangeCompletion(setTaskList);
	
	return <TaskListLayout changeCompletion={requestChangeCompletion} taskList={taskList} isLoading={isLoading} isUpdating={isUpdating} />;
}
