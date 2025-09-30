import { useState } from 'react';
import type { ITask, TSetTaskList } from '../types/types.ts';

export const useRequestAddNewTask = (setTaskList: TSetTaskList) => {
	const [isUploading, setIsUploading] = useState(false);

	const requestAddNewTask = (text: string) => {
		setIsUploading(true);

		fetch('http://localhost:3000/tasks/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: text,
				completed: false,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((newTask: ITask) => setTaskList((prevTaskList) => [...prevTaskList, newTask]))
			.catch((e) => console.log(e))
			.finally(() => {
				setIsUploading(false);
			});
	};

	return { requestAddNewTask, isUploading };
};
