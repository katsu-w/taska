import './TaskItem.scss';
import { useNavigate } from 'react-router-dom';
import DeleteTaskButton from '../UI/DeleteTaskButton';
import StatusCheckbox from '../UI/StatusCheckbox';

interface ITaskItemProps {
	id: string;
	status: boolean;
	title: string;
}

export function TaskItem(props: ITaskItemProps) {
	const { id, status, title } = props;

	const navigate = useNavigate();

	return (
		<div className="task" onClick={() => navigate(`/task/${id}`)}>
			<div className="task__details">
				<StatusCheckbox
					id={id}
					status={status}
				/>
				<p className="task__title">{title}</p>
			</div>
			<DeleteTaskButton
				id={id}
				className="remove-btn"
			/>
		</div>
	);
}
