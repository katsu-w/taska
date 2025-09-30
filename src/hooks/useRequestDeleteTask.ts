import type { TSetTaskList } from '../types/types.ts';
import { useState } from 'react';

export const useRequestDeleteTask = (setTaskList: TSetTaskList) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const requestDeleteTask = (id: number) => {
		setIsDeleting(true);
		fetch(`http://localhost:3000/tasks/${id}`, {
			method: 'DELETE',
		})
			.then(() => {
				setTaskList((prevTaskList) => {
					return prevTaskList.filter((task) => task.id !== id);
				});
			})
			.catch((e) => console.log(e))
			.finally(() => setIsDeleting(false));
	};

	return { requestDeleteTask, isDeleting };
};
