import { useEffect, useState } from 'react';
import type { ITask } from '../types/types.ts';

export const useRequestGetTaskList = () => {
	const [taskList, setTaskList] = useState<ITask[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		fetch('http://localhost:3000/tasks')
			.then((loadedData) => loadedData.json())
			.then((loadedTaskList) => setTaskList(loadedTaskList))
			.catch((e) => console.log(e))
			.finally(() => setIsLoading(false));
	}, []);

	return { taskList, setTaskList, isLoading };
};
