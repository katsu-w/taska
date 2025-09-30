import type { TSetTaskList } from '../types/types.ts';
import { useState } from 'react';

export const useRequestEditTask = (setTaskList: TSetTaskList) => {
	const [isEditing, setIsEditing] = useState(false);

	const requestEditTask = (id: number, newTitle: string) => {
		setIsEditing(true);

		fetch(`http://localhost:3000/tasks/${id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: newTitle,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((updatedTask) =>
				setTaskList((prevTaskList) =>
					prevTaskList.map((task) => (task.id === updatedTask.id ? updatedTask : task)),
				),
			)
			.catch((e) => console.log(e))
			.finally(() => {
				setIsEditing(false);
			});
	};

	return { requestEditTask, isEditing };
};
