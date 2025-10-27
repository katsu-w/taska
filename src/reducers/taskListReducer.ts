import type { ITask, TAction } from '../types/types.ts';

const initialTaskListState: ITask[] | [] = [];

export const taskListReducer = (
	state: ITask[] | [] = initialTaskListState,
	action: TAction,
) => {
	switch (action.type) {
		case 'taskList/LoadList':
			return [...action.payload.loadedTaskList];
		case 'taskList/Search':
			return [...state].filter((item: ITask) => {
				return item.title.toLowerCase().includes(action.payload.query.toLowerCase());
			});
		case 'taskList/AddNew':
			return [...state, {...action.payload}];
		default:
			return state;
	}
};
