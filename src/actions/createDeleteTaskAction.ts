import type { ThunkActionDispatch } from 'redux-thunk';
import { fetchServer } from '../utils/utils.ts';

export const createDeleteTaskAction =
	(id: string) => (dispatch: ThunkActionDispatch<any>) => {
		try {

			fetchServer('GET').then((loadedTaskList) =>
				dispatch('taskList/LoadList', { loadedTaskList }),
			)
		} catch (e) {
			console.log(e);
		}
	};
