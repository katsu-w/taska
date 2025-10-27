import type { ITask } from '../types/types.ts';
import { Navigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import TaskDetails from '../components/TaskDetails';
import { useSelector } from 'react-redux';
import { taskListSelector } from '../selectors/taskListSelector.ts';

interface ITaskProps {
	isLoading: boolean;
}

const Task = (props: ITaskProps) => {
	const { isLoading } = props;
	const taskList = useSelector(taskListSelector);

	let currentTask: ITask | undefined = undefined;
	const { id } = useParams();

	if (!isLoading && id) {
		currentTask = taskList.find((task) => task.id === +id);

		if (!currentTask) return <Navigate to="/404" />;
	}

	return <>{isLoading ? <Loader /> : <TaskDetails currentTask={currentTask} />}</>;
};

export default Task;
