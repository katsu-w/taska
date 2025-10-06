import './StatusCheckbox.scss';
import { TaskListContext } from '../../../taskListContext.ts';
import { use } from 'react';
import type { TSetTaskList } from '../../../types/types.ts';

interface IStatusCheckboxProps {
	id: number;
	status: boolean;
	requestChangeCompletion: (
		id: number,
		status: boolean,
		setTaskList: TSetTaskList,
	) => void;
	isUpdating: boolean;
}

export function StatusCheckbox(props: IStatusCheckboxProps) {
	const { id, status, requestChangeCompletion, isUpdating } = props;

	const { setTaskList } = use(TaskListContext);

	return (
		<input
			className="task__status"
			id={`task-${id}-status`}
			name={`task-${id}-status`}
			type="checkbox"
			checked={status}
			onClick={(e) => e.stopPropagation()}
			onChange={() => requestChangeCompletion(id, status, setTaskList)}
			disabled={isUpdating}
		/>
	);
}
