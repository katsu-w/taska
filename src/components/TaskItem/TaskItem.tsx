import './TaskItem.scss';
import { useNavigate } from 'react-router-dom';
import DeleteTaskButton from '../UI/DeleteTaskButton';
import StatusCheckbox from '../UI/StatusCheckbox';
import { use } from 'react';
import { TaskListContext } from '../../context/taskListContext.ts';

interface ITaskItemProps {
	id: number;
	status: boolean;
	title: string;
}

export function TaskItem(props: ITaskItemProps) {
	const { id, status, title } = props;

	const { changeTaskCompletion, deleteTask } = use(TaskListContext);

	const navigate = useNavigate();
	return (
		<div className="task" onClick={() => navigate(`/task/${id}`)}>
			<div className="task__details">
				<StatusCheckbox
					id={id}
					status={status}
					requestChangeCompletion={changeTaskCompletion.requestChangeCompletion}
					isUpdating={changeTaskCompletion.isUpdating}
				/>
				<p className="task__title">{title}</p>
			</div>
			<DeleteTaskButton
				id={id}
				requestDeleteTask={deleteTask.requestDeleteTask}
				isDeleting={deleteTask.isDeleting}
				className="remove-btn"
			/>
		</div>
	);
}
