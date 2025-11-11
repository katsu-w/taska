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
		case 'taskList/Filter':
			let filterResult = [...state];

			switch (action.payload.filter) {
				case 'alphabet':
					filterResult.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
					break;
			}
			return filterResult;
		case 'taskList/AddNew':
			return [...state, {...action.payload}];
		case 'taskList/EditTask':
			return [...state].map((task: ITask) => task.id === action.payload.id ? action.payload  : task);
		case 'taskList/ChangeStatus':
			let changeResult = [...state];
			const changedIndex = changeResult.findIndex((item: ITask) => {if (item.id === action.payload.id) return true;})
			changeResult[changedIndex].completed = !changeResult[changedIndex].completed;
			return changeResult;
		default:
			return state;
	}
};
