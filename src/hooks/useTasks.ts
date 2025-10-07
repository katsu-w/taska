import { useEffect, useState } from 'react';
import type { ITask } from '../types/types.ts';
import { fetchServer } from '../utils/utils.ts';

export const useTasks = () => {
	const [taskList, setTaskList] = useState<ITask[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isEditing, setIsEditing] = useState<boolean>(false);
	const [isDeleting, setIsDeleting] = useState<boolean>(false);
	const [isUploading, setIsUploading] = useState<boolean>(false);
	const [isUpdating, setIsUpdating] = useState<boolean>(false);

	useEffect(() => {
		fetchServer('GET')
			.then((loadedTaskList) => setTaskList(loadedTaskList))
			.catch((e) => console.log(e))
			.finally(() => setIsLoading(false));
	}, []);

	const requestEditTask = (id: number, newTitle: string) => {
		setIsEditing(true);

		fetchServer('PATCH', { id, title: newTitle })
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

	const requestDeleteTask = (id: number) => {
		setIsDeleting(true);

		fetchServer('DELETE', { id })
			.then(() => {
				setTaskList((prevTaskList) => {
					return prevTaskList.filter((task) => task.id !== id);
				});
			})
			.catch((e) => console.log(e))
			.finally(() => setIsDeleting(false));
	};

	const requestAddNewTask = (text: string) => {
		setIsUploading(true);

		if (!text.trim()) return setIsUploading(false);

		fetchServer('POST', { title: text })
			.then((newTask: ITask) => setTaskList((prevTaskList) => [...prevTaskList, newTask]))
			.catch((e) => console.log(e))
			.finally(() => {
				setIsUploading(false);
			});
	};

	const requestChangeCompletion = (id: number, prevStatus: boolean) => {
		setIsUpdating(true);

		fetchServer('PATCH', { id, completed: !prevStatus })
			.then((updatedTask) =>
				setTaskList((prevTaskList) => {
					return prevTaskList.map((task) =>
						task.id === updatedTask.id ? updatedTask : task,
					);
				}),
			)
			.catch((e) => console.log(e))
			.finally(() => {
				setIsUpdating(false);
			});
	};

	const editTask = { requestEditTask, isEditing };
	const deleteTask = { requestDeleteTask, isDeleting };
	const addTask = { requestAddNewTask, isUploading };
	const changeTaskCompletion = { requestChangeCompletion, isUpdating };

	return {
		taskList,
		setTaskList,
		isLoading,
		editTask,
		deleteTask,
		addTask,
		changeTaskCompletion,
	};
};
