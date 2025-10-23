import { fetchServer } from '../utils/utils.ts';

export const loadTaskList =
	() => (dispatch: (arg0: { type: string; payload: any }) => void) =>
		fetchServer('GET').then((loadedTaskList) => {
			console.log(loadedTaskList);
			dispatch({
				type: 'taskList/LoadList',
				payload: loadedTaskList,
			});
		});
