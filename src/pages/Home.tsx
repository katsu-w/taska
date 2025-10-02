import { useState } from 'react';
import TaskList from '../components/TaskList';
import Modal from '../components/Modal';

interface IHomeProps {
	isLoading: boolean;
}

const Home = (props: IHomeProps) => {
	const { isLoading } = props;

	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			{isModalOpen ? <Modal openModal={setIsModalOpen} /> : null}
			<TaskList openModal={setIsModalOpen} isLoading={isLoading} />
		</>
	);
};

export default Home;
