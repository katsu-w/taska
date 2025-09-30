import './Modal.scss';
import { type FormEvent, type SetStateAction, useState } from 'react';
import { useRequestAddNewTask } from '../../hooks/useRequestAddNewTask.ts';
import type { TSetTaskList } from '../../types/types.ts';

interface IModalProps {
	openModal: React.Dispatch<SetStateAction<boolean>>;
	setTaskList: TSetTaskList;
}

export function Modal(props: IModalProps) {
	const { openModal, setTaskList } = props;
	const [inputValue, setInputValue] = useState('');
	const [error, setError] = useState('');

	const { requestAddNewTask, isUploading } = useRequestAddNewTask(setTaskList);

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (inputValue.length > 0) {
			requestAddNewTask(inputValue);
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
					<button disabled={isUploading} type="submit" className="btn form__button">
						Создать
					</button>
				</div>
				{error ? <p className="error">{error}</p> : null}
			</form>
		</div>
	);
}
