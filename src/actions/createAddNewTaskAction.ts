import { fetchServer } from '../utils/utils.ts';
import type { ITask } from '../types/types.ts';
import type { ThunkActionDispatch } from 'redux-thunk';

export const createAddNewTaskAction =
	(text: string) => (dispatch: ThunkActionDispatch<any>) =>
		fetchServer('POST', { title: text}).then((newTask: ITask) => {
			dispatch({
				type: 'taskList/AddNew',
				payload: { ...newTask },
			});
		});
