import './Modal.scss';
import type { SetStateAction } from 'react';

interface IModalProps {
	openModal: React.Dispatch<SetStateAction<boolean>>;
}

export function Modal(props: IModalProps) {
	const { openModal } = props;

	return (
		<div className="modal" onClick={() => openModal((state) => !state)}>
			<form className="form" onClick={(e) => e.stopPropagation()}>
				<h3 className="form__title">Add new Task</h3>
				<input className="form__input input" id="addTask" name="addTask" type="text" />
				<div className="form__controls">
					<button
						type="button"
						className="btn form__button"
						onClick={() => openModal((state) => !state)}
					>
						Cancel
					</button>
					<button type="submit" className="btn form__button">
						Add
					</button>
				</div>
			</form>
		</div>
	);
}
