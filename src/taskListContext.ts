import { createContext } from 'react';
import type { ITask, TSetTaskList } from './types/types.ts';

interface ITaskListContext {
	filteredData: ITask[];
	setTaskList: TSetTaskList;
}

export const TaskListContext = createContext<ITaskListContext>({
	filteredData: [],
	setTaskList: () => {},
});
