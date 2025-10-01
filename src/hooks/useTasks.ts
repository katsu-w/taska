import { useEffect, useState } from 'react';
import type { ITask } from '../types/types.ts';

export const useTasks = () => {
	const [taskList, setTaskList] = useState<ITask[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isEditing, setIsEditing] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);
	const [isUploading, setIsUploading] = useState(false);
	const [isUpdating, setIsUpdating] = useState(false);

	useEffect(() => {
		fetch('http://localhost:3000/tasks')
			.then((loadedData) => loadedData.json())
			.then((loadedTaskList) => setTaskList(loadedTaskList))
			.catch((e) => console.log(e))
			.finally(() => setIsLoading(false));
	}, []);

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

	const requestChangeCompletion = (id: number, prevStatus: boolean) => {
		setIsUpdating(true);
		console.log('1');

		fetch(`http://localhost:3000/tasks/${id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				completed: !prevStatus,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((updatedTask) =>
				setTaskList((prevTaskList) => {
					console.log(updatedTask);
					prevTaskList.map((task) => (task.id === updatedTask.id ? updatedTask : task));
				}),
			)
			.catch((e) => console.log(e))
			.finally(() => {
				console.log('2');
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
