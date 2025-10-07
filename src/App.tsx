import './styles/main.scss';
import Header from './components/Header';
import { useSearch } from './hooks';
import { useFilter } from './hooks';
import { AppRouter } from './components/AppRouter.tsx';
import { TaskListContext } from './context/taskListContext.ts';
import { useTasks } from './hooks';

export function App() {
	const {
		taskList,
		isLoading,
		setTaskList,
		addTask,
		editTask,
		deleteTask,
		changeTaskCompletion,
	} = useTasks();
	const { searchValue, searchHandler, searchedData } = useSearch(taskList);
	const { selectValue, changeSelectHandler, filteredData } = useFilter(searchedData);

	return (
		<TaskListContext
			value={{
				filteredData,
				setTaskList,
				addTask,
				editTask,
				deleteTask,
				changeTaskCompletion,
			}}
		>
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
