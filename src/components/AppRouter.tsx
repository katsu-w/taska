import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.tsx';
import Task from '../pages/Task.tsx';
import PageNotFound from '../pages/PageNotFound.tsx';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/task/:id" element={<Task />} />
			<Route path="/404" element={<PageNotFound />} />
			<Route path="*" element={<Navigate to="/404" />} />
		</Routes>
	);
};
