import { useState } from 'react';
import TaskList from '../components/TaskList';
import Modal from '../components/Modal';
import type { ITask, TSetTaskList } from '../types/types.ts';

interface IHomeProps {
	setTaskList: TSetTaskList;
	filteredData: ITask[];
	isLoading: boolean;
}

const Home = (props: IHomeProps) => {
	const { setTaskList, isLoading, filteredData } = props;

	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			{isModalOpen ? (
				<Modal setTaskList={setTaskList} openModal={setIsModalOpen} />
			) : null}
			<TaskList
				openModal={setIsModalOpen}
				taskList={filteredData}
				setTaskList={setTaskList}
				isLoading={isLoading}
			/>
		</>
	);
};

export default Home;
