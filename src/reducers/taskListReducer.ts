import type { IAction, ITask } from '../types/types.ts';

const initialTaskListState: ITask[] | [] = [];

export const taskListReducer = (
	state: ITask[] | [] = initialTaskListState,
	action: IAction,
) => {
	switch (action.type) {
		case 'taskList/LoadList':
			if (action.payload?.loadedTaskList) {
				return [...action.payload.loadedTaskList];
			}
			return state;
		case 'taskList/AddNew':
			return [...state, { completed: false, ...action.payload }];
		default:
			return state;
	}
};
