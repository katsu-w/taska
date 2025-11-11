import type { ThunkActionDispatch } from 'redux-thunk';
import { fetchServer } from '../utils/utils.ts';
import type { ITask } from '../types/types.ts';

export const createEditTaskAction =
	(id: string, newTitle: string) => (dispatch: ThunkActionDispatch<any>) =>
			fetchServer('PATCH', { id, title: newTitle }).then((updatedTask: ITask) => {
				dispatch({
					type: 'taskList/EditTask',
					payload: { ...updatedTask },
				});
			});
