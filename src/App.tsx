import './styles/main.scss';
import Header from './components/Header';
import { useRequestGetTaskList } from './hooks';
import { useSearch } from './hooks/useSearch.ts';
import { useFilter } from './hooks/useFilter.ts';
import { AppRouter } from './components/AppRouter.tsx';
import { TaskListContext } from './taskListContext.ts';

export function App() {
	const { taskList, isLoading, setTaskList } = useRequestGetTaskList();
	const { searchValue, searchHandler, searchedData } = useSearch(taskList);
	const { selectValue, changeSelectHandler, filteredData } = useFilter(searchedData);

	return (
		<TaskListContext value={{ filteredData, setTaskList }}>
			<Header
				searchValue={searchValue}
				searchHandler={searchHandler}
				selectValue={selectValue}
				changeSelectHandler={changeSelectHandler}
			/>
			<AppRouter isLoading={isLoading} />
		</TaskListContext>
	);
}
