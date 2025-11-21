import './styles/main.scss';
import Header from './components/Header';
import { AppRouter } from './components/AppRouter.tsx';

export function App() {
	return (
		<>
			<Header />
			<AppRouter />
		</>
	);
}
