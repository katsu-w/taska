import './StatusCheckbox.scss';
import { useState } from 'react';
import { fetchServer } from '../../../utils/utils.ts';
import type { TAppDispatch } from '../../../types/types.ts';
import { useDispatch } from 'react-redux';
import { createChangeStatusAction } from '../../../actions';

interface IStatusCheckboxProps {
	id: string;
	status: boolean;
}

export function StatusCheckbox(props: IStatusCheckboxProps) {
	const { id, status } = props;

	const [isUpdating, setIsUpdating] = useState(false);

	const dispatch: TAppDispatch = useDispatch();

	function handleChange() {
		setIsUpdating(true);
		fetchServer('PATCH', {id, completed: !status})
			.then(() => dispatch(createChangeStatusAction(id)))
			.finally(() => setIsUpdating(false));
	}

	return (
		<input
			className="task__status"
			id={`task-${id}-status`}
			name={`task-${id}-status`}
			type="checkbox"
			checked={status}
			onClick={(e) => e.stopPropagation()}
			onChange={handleChange}
			disabled={isUpdating}
		/>
	);
}
