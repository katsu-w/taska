import { createContext } from 'react';
import type { TSetTaskList } from '../types/types.ts';

type TAddTask = { requestAddNewTask: (text: string) => void; isUploading: boolean };
type TEditTask = {
	requestEditTask: (id: number, newTitle: string) => void;
	isEditing: boolean;
};
type TDeleteTask = { requestDeleteTask: (id: number) => void; isDeleting: boolean };
type TChangeCompletion = {
	requestChangeCompletion: (id: number, prevStatus: boolean) => void;
	isUpdating: boolean;
};

interface ITaskListContext {
	setTaskList: TSetTaskList;
	addTask: TAddTask;
	editTask: TEditTask;
	deleteTask: TDeleteTask;
	changeTaskCompletion: TChangeCompletion;
}

export const TaskListContext = createContext<ITaskListContext>({
	setTaskList: () => {},
	addTask: { requestAddNewTask: () => {}, isUploading: false },
	editTask: { requestEditTask: () => {}, isEditing: false },
	deleteTask: { requestDeleteTask: () => {}, isDeleting: false },
	changeTaskCompletion: { requestChangeCompletion: () => {}, isUpdating: false },
});
