import type { ITask } from '../types/types.ts';
import { useState } from 'react';

export const useRequestChangeCompletion = (setTaskList: (value: (((prevState: ITask[]) => ITask[]) | ITask[])) => void) => {
	const [isUpdating, setIsUpdating] = useState(false);
	
	const requestChangeCompletion = (id: number, prevStatus: boolean) => {
		setIsUpdating(true);
		
		fetch(`http://localhost:3000/tasks/${id}`, {
			method: "PATCH",
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				completed: !prevStatus
			})
		})
			.then((rawResponse) => rawResponse.json())
			.then((updatedTask) => setTaskList(prevTaskList =>
				prevTaskList.map((task) =>
					task.id === updatedTask.id ? updatedTask : task
				)
			))
			.finally(() => {
				setIsUpdating(false);
			})
	}

	return {requestChangeCompletion, isUpdating}
}
