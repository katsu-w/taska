import type { ITask } from '../types/types.ts';
import { useParams } from 'react-router-dom';

interface ITaskProps {
	taskList: ITask[];
}

const Task = (props: ITaskProps) => {
	const { taskList } = props;
	const { id } = useParams();

	const currentTask = id ? taskList.find((task) => task.id === +id) : null;

	return (
		<div>
			{currentTask?.id}. {currentTask?.title}
		</div>
	);
};

export default Task;
