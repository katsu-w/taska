import type { SetStateAction } from 'react';
import type { store } from '../store/store.ts';

export interface ITask {
	id: string;
	title: string;
	completed: boolean;
}

export type TSetTaskList = React.Dispatch<SetStateAction<ITask[]>>;

export type TStore = {
	taskListState: ITask[];
};
export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export type TLoadTaskListAction = {
	type: 'taskList/LoadList';
	payload: { loadedTaskList: ITask[] };
};
export type TAddTaskAction = {
	type: 'taskList/AddNew';
	payload: ITask;
};
export type TDeleteTaskAction = {
	type: 'taskList/AddNew';
	payload: { id: string };
};
export type TChangeStatusAction = {
	type: 'taskList/ChangeStatus';
	payload: { id: string };
};

export type TSearchTaskListAction = {
	type: 'taskList/Search';
	payload: { query: string };
};
export type TFilterTaskListAction = {
	type: 'taskList/Filter';
	payload: { filter: string };
};

export type TAction =
	| TLoadTaskListAction
	| TAddTaskAction
	| TSearchTaskListAction
	| TDeleteTaskAction
	| TChangeStatusAction
	| TFilterTaskListAction;
