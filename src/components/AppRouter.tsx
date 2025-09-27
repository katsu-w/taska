import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.tsx';
import type { SetStateAction } from 'react';
import type { ITask } from '../types/types.ts';
import Task from '../pages/Task.tsx';
import PageNotFound from '../pages/PageNotFound.tsx';

interface IAppProps {
	setTaskList: React.Dispatch<SetStateAction<ITask[]>>;
	filteredData: ITask[];
	isLoading: boolean;
}

export const AppRouter = (props: IAppProps) => {
	const { setTaskList, filteredData, isLoading } = props;
	return (
		<Routes>
			<Route
				path="/"
				element={
					<Home
						setTaskList={setTaskList}
						isLoading={isLoading}
						filteredData={filteredData}
					/>
				}
			/>
			<Route
				path="/task/:id"
				element={<Task isLoading={isLoading} taskList={filteredData} />}
			/>
			<Route path="/404" element={<PageNotFound />} />
			<Route path="*" element={<Navigate to="/404" />} />
		</Routes>
	);
};
