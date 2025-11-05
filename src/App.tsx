import './styles/main.scss';
import Header from './components/Header';
import { AppRouter } from './components/AppRouter.tsx';
import { useTasks } from './hooks';

export function App() {
	const { isLoading } = useTasks();

	return (
		<>
			<Header />
			<AppRouter isLoading={isLoading} />
		</>
	);
}
