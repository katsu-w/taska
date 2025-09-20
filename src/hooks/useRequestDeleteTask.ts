import type { ITask } from '../types/types.ts';
import { type SetStateAction, useState } from 'react';

export const useRequestDeleteTask = (
	setTaskList: React.Dispatch<SetStateAction<ITask[]>>,
) => {
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
			.finally(() => setIsDeleting(false));
	};

	return { requestDeleteTask, isDeleting };
};
