import './TaskItem.scss';

interface ITaskItemProps {
	id: number,
	status: boolean,
	title: string,
}

export function TaskItem(props: ITaskItemProps) {
	const {id, status, title} = props;
	
	return (
		<div className="task">
			<div className="task__details">
				<input
					className="task__status"
					id={`task-${id}-status`}
					name={`task-${id}-status`}
					type="checkbox"
					checked={status}
				/>
				<p className="task__title">{title}</p>
			</div>
			<button className="task__remove-btn btn">Удалить</button>
		</div>
	);
}
