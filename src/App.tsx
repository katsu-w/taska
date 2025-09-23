import './styles/main.scss';
import Header from './components/Header';
import TaskList from './components/TaskList';
import Modal from './components/Modal';
import { useState } from 'react';
import { useRequestGetTaskList } from './hooks';
import { useSearch } from './hooks/useSearch.ts';
import { useFilter } from './hooks/useFilter.ts';

export function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { taskList, isLoading, setTaskList } = useRequestGetTaskList();
	const { searchValue, searchHandler, searchedData } = useSearch(taskList);
	const { selectValue, changeSelectHandler, filteredData } = useFilter(searchedData);

	return (
		<>
			{isModalOpen ? (
				<Modal setTaskList={setTaskList} openModal={setIsModalOpen} />
			) : null}
			<Header
				searchValue={searchValue}
				searchHandler={searchHandler}
				selectValue={selectValue}
				changeSelectHandler={changeSelectHandler}
			/>
			<TaskList
				openModal={setIsModalOpen}
				taskList={filteredData}
				setTaskList={setTaskList}
				isLoading={isLoading}
			/>
		</>
	);
}
