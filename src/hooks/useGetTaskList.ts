import { useEffect, useState } from 'react';

export const useGetTaskList = () => {
	const [taskList, setTaskList] = useState<object[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	
	useEffect(() => {
		setIsLoading(true);
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedTaskList) => setTaskList(loadedTaskList))
			.catch(e => console.log(e))
			.finally(() => setIsLoading(false));
	}, []);
	
	return {taskList, isLoading};
}
