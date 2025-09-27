import HeaderLayout from './HeaderLayout';
import { useMatch } from 'react-router-dom';

interface IHeaderProps {
	searchValue: string;
	searchHandler: (value: string) => void;
	selectValue: string;
	changeSelectHandler: (value: string) => void;
}

export function Header(props: IHeaderProps) {
	const { searchValue, searchHandler, selectValue, changeSelectHandler } = props;

	const isOnMainPage: boolean = !!useMatch('/');

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
