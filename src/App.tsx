import './styles/main.scss';
import Header from './components/Header';
import TaskList from './components/TaskList';
import Modal from './components/Modal';
import { useState } from 'react';
import { useRequestGetTaskList } from './hooks';

export function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { taskList, isLoading, setTaskList } = useRequestGetTaskList();

	return (
		<>
			{isModalOpen ? (
				<Modal setTaskList={setTaskList} openModal={setIsModalOpen} />
			) : null}
			<Header />
			<TaskList
				openModal={setIsModalOpen}
				taskList={taskList}
				setTaskList={setTaskList}
				isLoading={isLoading}
			/>
		</>
	);
}
