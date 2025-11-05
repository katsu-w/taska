import { useEffect, useState } from 'react';
import type { ITask } from '../types/types.ts';
import { fetchServer } from '../utils/utils.ts';
import { useDispatch, useSelector } from 'react-redux';
import { createAddNewTaskAction, createLoadTaskListAction } from '../actions';
import { taskListSelector } from '../selectors/taskListSelector.ts';

export const useTasks = () => {
	const taskListState = useSelector(taskListSelector);

	const [taskList, setTaskList] = useState<ITask[]>(taskListState);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isEditing, setIsEditing] = useState<boolean>(false);
	const [isDeleting, setIsDeleting] = useState<boolean>(false);
	const [isUploading, setIsUploading] = useState<boolean>(false);
	const [isUpdating, setIsUpdating] = useState<boolean>(false);

	const dispatch = useDispatch();

	useEffect(() => {
		setIsLoading(true);
		try {
			// @ts-ignore
			dispatch(createLoadTaskListAction());
		} catch (e) {
			console.log(e);
		}
	}, []);

	useEffect(() => {
		setTaskList(taskListState);
		setIsLoading(false);
	}, [taskListState]);

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

	const requestDeleteTask = (id: string) => {
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


		
		// fetchServer('POST', { title: text })
		// 	.then((newTask: ITask) => setTaskList((prevTaskList) => [...prevTaskList, newTask]))
		// 	.catch((e) => console.log(e))
		// 	.finally(() => {
		// 		setIsUploading(false);
		// 	});
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
