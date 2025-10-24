import type { SetStateAction } from 'react';

export interface ITask {
	id: number;
	title: string;
	completed: boolean;
}

export type TSetTaskList = React.Dispatch<SetStateAction<ITask[]>>;

export type TLoadTaskListAction = {
	type: 'taskList/LoadList',
	payload: {loadedTaskList: ITask[]}
}
export type TAddTaskAction = {
	type: 'taskList/AddNew',
	payload: {title: string}
}
export type TAction = TLoadTaskListAction | TAddTaskAction;
