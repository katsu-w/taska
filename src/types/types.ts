import type { SetStateAction } from 'react';

export interface ITask {
	id: number;
	userId: number;
	title: string;
	completed: boolean;
}

export type TSetTaskList = React.Dispatch<SetStateAction<ITask[]>>;
