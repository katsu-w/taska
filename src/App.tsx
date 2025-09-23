import './styles/main.scss';
import Header from './components/Header';
import TaskList from './components/TaskList';
import Modal from './components/Modal';
import { useState } from 'react';
import { useRequestGetTaskList } from './hooks';
import { useSearch } from './hooks/useSearch.ts';

export function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { taskList, isLoading, setTaskList } = useRequestGetTaskList();
	const { searchValue, searchHandler, searchedData } = useSearch(taskList);

	return (
		<>
			{isModalOpen ? (
				<Modal setTaskList={setTaskList} openModal={setIsModalOpen} />
			) : null}
			<Header searchValue={searchValue} searchHandler={searchHandler} />
			<TaskList
				openModal={setIsModalOpen}
				taskList={searchedData}
				setTaskList={setTaskList}
				isLoading={isLoading}
			/>
		</>
	);
}
