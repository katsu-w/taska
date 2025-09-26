import type { ITask } from '../types/types.ts';
import { useParams } from 'react-router-dom';

interface ITaskProps {
	taskList: ITask[];
}

const Task = (props: ITaskProps) => {
	const { taskList } = props;
	const { id } = useParams();
	return <div>{id}</div>;
};

export default Task;
