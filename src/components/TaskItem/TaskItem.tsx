import './TaskItem.scss';

interface ITaskItemProps {
	id: number,
	status: boolean,
	title: string,
	isUpdating: boolean,
	changeCompletion: (id: number, prevStatus: boolean) => void
}

export function TaskItem(props: ITaskItemProps) {
	const {id, status, title, isUpdating, changeCompletion} = props;
	
	return (
		<div className="task">
			<div className="task__details">
				<input
					className="task__status"
					id={`task-${id}-status`}
					name={`task-${id}-status`}
					type="checkbox"
					checked={status}
					onChange={() => changeCompletion(id, status)}
					disabled={isUpdating}
				/>
				<p className="task__title">{title}</p>
			</div>
			<button className="task__remove-btn btn">Удалить</button>
		</div>
	);
}
