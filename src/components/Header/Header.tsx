import HeaderLayout from './HeaderLayout';
import { useMatch } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createSearchAction } from '../../actions/createSearchAction.ts';
import { createLoadTaskListAction } from '../../actions';

// interface IHeaderProps {
// 	searchValue: string;
// 	searchHandler: (value: string) => void;
// 	selectValue: string;
// 	changeSelectHandler: (value: string) => void;
// }

export function Header(/*props: IHeaderProps*/) {
	// const { searchValue, searchHandler, selectValue, changeSelectHandler } = props;

	const isOnMainPage: boolean = !!useMatch('/');
	const [searchValue, setSearchValue] = useState<string>('');
	const [selectValue, setSelectValue] = useState<string>('default');
	
	const dispatch = useDispatch();
	
	function searchHandler (text: string) {
		setSearchValue(text);
		if (text.trim()) {
			dispatch(createSearchAction(text));
		}  else {
			// @ts-ignore
			dispatch(createLoadTaskListAction())
		}
	}
	
	function changeSelectHandler (type: string) {
	
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
