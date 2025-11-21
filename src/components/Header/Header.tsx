import HeaderLayout from './HeaderLayout';
import { useMatch } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSearchAction } from '../../actions';
import { createFilterAction, createLoadTaskListAction } from '../../actions';
import type { TAppDispatch } from '../../types/types.ts';
import { taskListSelector } from '../../selectors/taskListSelector.ts';

export function Header(/*props: IHeaderProps*/) {
	const isOnMainPage: boolean = !!useMatch('/');
	const [searchValue, setSearchValue] = useState<string>('');
	const [selectValue, setSelectValue] = useState<string>('default');

	const taskListState = useSelector(taskListSelector);
	const dispatch: TAppDispatch = useDispatch();

	function searchHandler(text: string) {
		setSearchValue(text);
		if (text.trim()) {
			dispatch(createSearchAction(text));
		} else {
			dispatch(createLoadTaskListAction()).then(() =>
				dispatch(createFilterAction(selectValue)),
			);
		}
	}

	function changeSelectHandler(type: string) {
		setSelectValue(type);
		if (!taskListState || taskListState.length === 1) return;

		if (type === 'default') {
			dispatch(createLoadTaskListAction()).then(() =>
				dispatch(createSearchAction(searchValue)),
			);
		} else {
			dispatch(createFilterAction(type));
		}
	}

	return (
		<HeaderLayout
			isOnMainPage={isOnMainPage}
			searchValue={searchValue}
			searchHandler={searchHandler}
			selectValue={selectValue}
			changeSelectHandler={changeSelectHandler}
		/>
	);
}
