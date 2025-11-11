import './styles/main.scss';
import Header from './components/Header';
import { AppRouter } from './components/AppRouter.tsx';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import type { TAppDispatch } from './types/types.ts';
import { createLoadTaskListAction } from './actions';

export function App() {

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
			<Header />
			<AppRouter isLoading={isLoading} />
		</>
	);
}
