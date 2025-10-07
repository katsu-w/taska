import './StatusCheckbox.scss';

interface IStatusCheckboxProps {
	id: number;
	status: boolean;
	requestChangeCompletion: (id: number, status: boolean) => void;
	isUpdating: boolean;
}

export function StatusCheckbox(props: IStatusCheckboxProps) {
	const { id, status, requestChangeCompletion, isUpdating } = props;

	return (
		<input
			className="task__status"
			id={`task-${id}-status`}
			name={`task-${id}-status`}
			type="checkbox"
			checked={status}
			onClick={(e) => e.stopPropagation()}
			onChange={() => requestChangeCompletion(id, status)}
			disabled={isUpdating}
		/>
	);
}
