import type { ITask } from '../types/types.ts';
import { useState } from 'react';

export const useRequestDeleteTask = (setTaskList: (value: ((prevState: ITask[]) => void)) => void) => {
	const [isDeleting, setIsDeleting] = useState(false);
	
	const requestDeleteTask = (id: number) => {
		setIsDeleting(true);
		fetch(`http://localhost:3000/tasks/${id}`, {
			method: "DELETE"
		})
			.then(() => {
				setTaskList((prevTaskList) => {
					prevTaskList.filter((task) => task.id !== id);
				})
			})
			.finally(() => setIsDeleting(false));
	}
	
	return {requestDeleteTask, isDeleting}
}
