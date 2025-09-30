import './TaskItem.scss';
import type { TSetTaskList } from '../../types/types.ts';
import { useRequestChangeCompletion, useRequestDeleteTask } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import DeleteTaskButton from '../UI/DeleteTaskButton';
import StatusCheckbox from '../UI/StatusCheckbox';

interface ITaskItemProps {
	id: number;
	status: boolean;
	title: string;
	setTaskList: TSetTaskList;
}

export function TaskItem(props: ITaskItemProps) {
	const { id, status, title, setTaskList } = props;

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
