import type { SetStateAction } from 'react';

export interface ITask {
	id: number;
	title: string;
	completed: boolean;
}

export type TSetTaskList = React.Dispatch<SetStateAction<ITask[]>>;

export interface IAction {
	type: string;
	payload?: object;
}
