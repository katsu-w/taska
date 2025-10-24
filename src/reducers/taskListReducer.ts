import type { TAction, ITask } from '../types/types.ts';

const initialTaskListState: ITask[] | [] = [];

export const taskListReducer = (
	state: ITask[] | [] = initialTaskListState,
	action: TAction,
) => {
	switch (action.type) {
		case 'taskList/LoadList':
			return [...action.payload.loadedTaskList];
		case 'taskList/AddNew':
			return [...state, { completed: false, ...action.payload }];
		default:
			return state;
	}
};
