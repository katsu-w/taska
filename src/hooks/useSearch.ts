import { useState } from 'react';
import type { ITask } from '../types/types.ts';

export const useSearch = (data: ITask[]) => {
	const [searchValue, setSearchValue] = useState<string>('');
	const searchedData = data.filter((item) => {
		return item.title.toLowerCase().includes(searchValue.toLowerCase());
	});

	const searchHandler = (value: string) => {
		setSearchValue(value);
	};

	return { searchValue, searchHandler, searchedData };
};
