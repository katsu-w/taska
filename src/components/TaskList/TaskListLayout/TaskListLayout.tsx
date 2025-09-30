import './TaskListLayout.scss';
import Loader from '../../Loader';
import type { ITask, TSetTaskList } from '../../../types/types.ts';
import TaskItem from '../../TaskItem';
import type { SetStateAction } from 'react';

interface ITaskListLayoutProps {
	taskList: ITask[];
	isLoading: boolean;
	setTaskList: TSetTaskList;
	openModal: React.Dispatch<SetStateAction<boolean>>;
}

export function TaskListLayout(props: ITaskListLayoutProps) {
	const { taskList, isLoading, setTaskList, openModal } = props;

	return (
		<main className="tasklist container">
			{isLoading ? (
				<Loader />
			) : taskList.length === 0 ? (
				<h2>Список дел пуст</h2>
			) : (
				taskList.map((task) => {
					return (
						<TaskItem
							setTaskList={setTaskList}
							key={task.id}
							id={task.id}
							status={task.completed}
							title={task.title}
						/>
					);
				})
			)}
			{isLoading ? null : (
				<button
					onClick={() => openModal((state) => !state)}
					className="btn tasklist__add-btn"
					type="button"
				>
					+
				</button>
			)}
		</main>
	);
}
