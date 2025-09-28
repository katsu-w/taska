import type { ITask } from '../types/types.ts';
import { Navigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import TaskDetails from '../components/TaskDetails';
import type { SetStateAction } from 'react';

interface ITaskProps {
	taskList: ITask[];
	isLoading: boolean;
	setTaskList: React.Dispatch<SetStateAction<ITask[]>>;
}

const Task = (props: ITaskProps) => {
	const { taskList, isLoading, setTaskList } = props;

	let currentTask: ITask | undefined = undefined;
	const { id } = useParams();

	if (!isLoading && id) {
		currentTask = taskList.find((task) => task.id === +id);

		if (!currentTask) return <Navigate to="/404" />;
	}

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<TaskDetails currentTask={currentTask} setTaskList={setTaskList} />
			)}
		</>
	);
};

export default Task;
