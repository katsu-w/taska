import { useEffect, useState } from 'react';
import TaskList from '../components/TaskList';
import Modal from '../components/Modal';
import type { TAppDispatch } from '../types/types.ts';
import { useDispatch } from 'react-redux';
import { createLoadTaskListAction } from '../actions';

const Home = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const dispatch: TAppDispatch = useDispatch();

	useEffect(() => {
		setIsLoading(true);
		try {
			dispatch(createLoadTaskListAction()).finally(() => {
				setIsLoading(false);
			});
		} catch (e) {
			console.log(e);
		}
	}, []);

	return (
		<>
			{isModalOpen ? <Modal openModal={setIsModalOpen} /> : null}
			<TaskList openModal={setIsModalOpen} isLoading={isLoading} />
		</>
	);
};

export default Home;
