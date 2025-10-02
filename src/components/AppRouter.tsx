import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.tsx';
import Task from '../pages/Task.tsx';
import PageNotFound from '../pages/PageNotFound.tsx';

interface IAppProps {
	isLoading: boolean;
}

export const AppRouter = (props: IAppProps) => {
	const { isLoading } = props;
	return (
		<Routes>
			<Route path="/" element={<Home isLoading={isLoading} />} />
			<Route path="/task/:id" element={<Task isLoading={isLoading} />} />
			<Route path="/404" element={<PageNotFound />} />
			<Route path="*" element={<Navigate to="/404" />} />
		</Routes>
	);
};
