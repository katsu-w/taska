import './Modal.scss';
import { type FormEvent, type SetStateAction, use, useState } from 'react';
import { TaskListContext } from '../../context/taskListContext.ts';

interface IModalProps {
	openModal: React.Dispatch<SetStateAction<boolean>>;
}

export function Modal(props: IModalProps) {
	const { openModal } = props;
	const [inputValue, setInputValue] = useState('');
	const [error, setError] = useState('');

	const { addTask } = use(TaskListContext);

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (inputValue.length > 0) {
			addTask.requestAddNewTask(inputValue);
			openModal(false);
		}

		setError('Введите текст');
	};

	return (
		<div className="modal" onClick={() => openModal((state) => !state)}>
			<form
				className="form"
				onSubmit={(e) => submitHandler(e)}
				onClick={(e) => e.stopPropagation()}
			>
				<h3 className="form__title">Новая задача</h3>
				<input
					className="form__input input"
					id="addTask"
					name="addTask"
					type="text"
					value={inputValue}
					onChange={(e) => {
						setInputValue(e.target.value);
					}}
				/>
				<div className="form__controls">
					<button
						type="button"
						className="btn form__button"
						onClick={() => openModal(false)}
					>
						Отмена
					</button>
					<button
						disabled={addTask.isUploading}
						type="submit"
						className="btn form__button"
					>
						Создать
					</button>
				</div>
				{error ? <p className="error">{error}</p> : null}
			</form>
		</div>
	);
}
