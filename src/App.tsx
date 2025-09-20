import './styles/main.scss';
import Header from './components/Header';
import TaskList from './components/TaskList';
import Modal from './components/Modal';
import { useState } from 'react';

export function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			{isModalOpen ? <Modal openModal={setIsModalOpen} /> : null}
			<Header />
			<TaskList openModal={setIsModalOpen} />
		</>
	);
}
