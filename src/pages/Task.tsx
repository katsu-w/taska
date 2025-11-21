import type { ITask, TAppDispatch } from '../types/types.ts';
import { Navigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import TaskDetails from '../components/TaskDetails';
import { useDispatch, useSelector } from 'react-redux';
import { taskListSelector } from '../selectors/taskListSelector.ts';
import { useEffect, useState } from 'react';
import { createLoadTaskListAction } from '../actions';

const Task = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const taskList = useSelector(taskListSelector);
	const dispatch: TAppDispatch = useDispatch();

	let currentTask: ITask | undefined = undefined;
	const { id } = useParams();

	useEffect(() => {
		setIsLoading(true);
		try {
			dispatch(createLoadTaskListAction()).finally(() => {
				setIsLoading(false);
			});
		} catch (e) {
			console.log(e);
		}
	}, []);

	if (!isLoading && id) {
		currentTask = taskList.find((task) => task.id === id);

		if (!currentTask) return <Navigate to="/404" />;
	}

	return <>{isLoading ? <Loader /> : <TaskDetails currentTask={currentTask} />}</>;
};

export default Task;
