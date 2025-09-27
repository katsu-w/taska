import type { ITask } from '../types/types.ts';
import { Navigate, useParams } from 'react-router-dom';

interface ITaskProps {
	taskList: ITask[];
}

const Task = (props: ITaskProps) => {
	const { taskList } = props;
	const { id } = useParams();

	const currentTask = id ? taskList.find((task) => task.id === +id) : null;

	if (!currentTask) return <Navigate to="/404" />;

	return (
		<div>
			{currentTask?.id}. {currentTask?.title}
		</div>
	);
};

export default Task;
