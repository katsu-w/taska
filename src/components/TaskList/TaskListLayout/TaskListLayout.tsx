import './TaskListLayout.scss';
import Loader from '../../Loader';
import type { ITask } from '../../../types/types.ts';
import TaskItem from '../../TaskItem';

interface ITaskListLayoutProps {
	taskList: ITask[],
	isLoading: boolean,
}

export function TaskListLayout(props: ITaskListLayoutProps) {
	const { taskList, isLoading } = props;
	
	return (
		<main className='tasklist container'>
			{isLoading ?
				<Loader />
				:
				taskList.length === 0 ?
					<h2>Список дел пуст</h2>
					:
					taskList.map((task) => {
						return <TaskItem key={task.id} id={task.id} status={task.completed} title={task.title} />
					})
			}
		</main>
	);
}
