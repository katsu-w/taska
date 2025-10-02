import './TaskItem.scss';
import { useNavigate } from 'react-router-dom';
import DeleteTaskButton from '../UI/DeleteTaskButton';
import StatusCheckbox from '../UI/StatusCheckbox';
import { useRequestChangeCompletion, useRequestDeleteTask } from '../../hooks';
import { use } from 'react';
import { TaskListContext } from '../../taskListContext.ts';

interface ITaskItemProps {
	id: number;
	status: boolean;
	title: string;
}

export function TaskItem(props: ITaskItemProps) {
	const { id, status, title } = props;

	const { setTaskList } = use(TaskListContext);

	const { requestChangeCompletion, isUpdating } = useRequestChangeCompletion(setTaskList);
	const { requestDeleteTask, isDeleting } = useRequestDeleteTask(setTaskList);

	const navigate = useNavigate();
	return (
		<div className="task" onClick={() => navigate(`/task/${id}`)}>
			<div className="task__details">
				<StatusCheckbox
					id={id}
					status={status}
					requestChangeCompletion={requestChangeCompletion}
					isUpdating={isUpdating}
				/>
				<p className="task__title">{title}</p>
			</div>
			<DeleteTaskButton
				id={id}
				requestDeleteTask={requestDeleteTask}
				isDeleting={isDeleting}
				className="remove-btn"
			/>
		</div>
	);
}
