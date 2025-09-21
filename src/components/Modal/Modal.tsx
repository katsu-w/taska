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
				<input id="asd" name="asd" type="text" />
			</form>
		</div>
	);
}
