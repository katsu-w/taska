import { fetchServer } from '../utils/utils.ts';

export const createLoadTaskListAction =
	() => (dispatch: (arg0: { type: string; payload: any }) => void) =>
		fetchServer('GET').then((loadedTaskList) => {
			dispatch({
				type: 'taskList/LoadList',
				payload: { loadedTaskList },
			});
		});
