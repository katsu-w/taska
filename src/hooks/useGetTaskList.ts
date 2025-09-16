import { useEffect, useState } from 'react';
import type { ITask } from '../types/types.ts';

export const useGetTaskList = () => {
	const [taskList, setTaskList] = useState<ITask[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	
	useEffect(() => {
		fetch('http://localhost:3000/tasks')
			.then((loadedData) => loadedData.json())
			.then((loadedTaskList) => setTaskList(loadedTaskList))
			.finally(() => setIsLoading(false))
			.catch(e => console.log(e));
	}, []);
	
	return {taskList, isLoading};
}
