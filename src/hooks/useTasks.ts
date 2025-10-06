import { useEffect, useState } from 'react';
import type { ITask, TSetTaskList } from '../types/types.ts';
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

	const requestEditTask = (id: number, newTitle: string, sl: TSetTaskList) => {
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
				sl((prevTaskList) =>
					prevTaskList.map((task) => (task.id === updatedTask.id ? updatedTask : task)),
				),
			)
			.catch((e) => console.log(e))
			.finally(() => {
				setIsEditing(false);
			});
	};

	const requestDeleteTask = (id: number, sl: TSetTaskList) => {
		setIsDeleting(true);
		fetchServer('DELETE', { id })
			.then(() => {
				sl((prevTaskList) => {
					return prevTaskList.filter((task) => task.id !== id);
				});
			})
			.catch((e) => console.log(e))
			.finally(() => setIsDeleting(false));
	};

	const requestAddNewTask = (text: string, sl: TSetTaskList) => {
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
			.then((newTask: ITask) => sl((prevTaskList) => [...prevTaskList, newTask]))
			.catch((e) => console.log(e))
			.finally(() => {
				setIsUploading(false);
			});
	};

	const requestChangeCompletion = (id: number, prevStatus: boolean, sl: TSetTaskList) => {
		setIsUpdating(true);

		fetch(`http://localhost:3000/tasks/${id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				completed: !prevStatus,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((updatedTask) =>
				sl((prevTaskList) => {
					console.log(updatedTask);
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
