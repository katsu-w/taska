import HeaderLayout from './HeaderLayout';

interface IHeaderProps {
	searchValue: string;
	searchHandler: (value: string) => void;
	selectValue: string;
	changeSelectHandler: (value: string) => void;
}

export function Header(props: IHeaderProps) {
	const { searchValue, searchHandler, selectValue, changeSelectHandler } = props;

	return (
		<HeaderLayout
			searchValue={searchValue}
			searchHandler={searchHandler}
			selectValue={selectValue}
			changeSelectHandler={changeSelectHandler}
		/>
	);
}
