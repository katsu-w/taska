import type { ITask } from '../types/types.ts';
import { useState } from 'react';

export const useFilter = (data: ITask[]) => {
	const [selectValue, setSelectValue] = useState<'default' | 'alphabet'>('default');

	const toFiltered = (value: 'default' | 'alphabet') => {
		switch (value) {
			case 'default':
				return data.sort((a, b) => a.id - b.id);

			case 'alphabet':
				return data.sort((a, b) =>
					a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
				);
		}
	};

	const filteredData = toFiltered(selectValue);

	const changeSelectHandler = (value: 'default' | 'alphabet') => {
		setSelectValue(value);
	};

	return { selectValue, changeSelectHandler, filteredData };
};
