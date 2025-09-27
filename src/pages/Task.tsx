import type { ITask } from '../types/types.ts';
import { Navigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader';

interface ITaskProps {
	taskList: ITask[];
	isLoading: boolean;
}

const Task = (props: ITaskProps) => {
	const { taskList, isLoading } = props;

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
				<div>
					{currentTask?.id}. {currentTask?.title}
				</div>
			)}
		</>
	);
};

export default Task;
