import type { IAction, ITask } from '../types/types.ts';

const initialState: ITask[] | [] = [];

export const taskListReducer = (state: ITask[] | [] = initialState, action: IAction) => {
	switch (action.type) {
		case 'ASD':
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};
