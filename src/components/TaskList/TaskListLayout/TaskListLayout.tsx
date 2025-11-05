import './TaskListLayout.scss';
import Loader from '../../Loader';
import type { ITask } from '../../../types/types.ts';
import TaskItem from '../../TaskItem';
import type { SetStateAction } from 'react';

interface ITaskListLayoutProps {
	filteredData: ITask[];
	isLoading: boolean;
	openModal: React.Dispatch<SetStateAction<boolean>>;
}

export function TaskListLayout(props: ITaskListLayoutProps) {
	const { filteredData, isLoading, openModal } = props;

	return (
		<main className="tasklist container">
			{isLoading ? (
				<Loader />
			) : filteredData.length === 0 ? (
				<h2>Список дел пуст</h2>
			) : (
				filteredData.map((task) => {
					return (
						<TaskItem
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
