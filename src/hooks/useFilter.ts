import type { ITask } from '../types/types.ts';
import { useState } from 'react';

export const useFilter = (data: ITask[]) => {
	const [selectValue, setSelectValue] = useState<string>('default');

	const toFiltered = (value: string): ITask[] => {
		if (!data || data.length === 1) return data;

		let result = data;

		switch (value) {
			case 'default':
				result.sort((a, b) => a.id - b.id);
				break;
			case 'alphabet':
				result.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
				break;
		}
		return result;
	};

	const filteredData: ITask[] = toFiltered(selectValue);

	const changeSelectHandler = (value: string) => {
		setSelectValue(value);
	};

	return { selectValue, changeSelectHandler, filteredData };
};
