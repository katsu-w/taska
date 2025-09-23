import HeaderLayout from './HeaderLayout';

interface IHeaderProps {
	searchValue: string;
	searchHandler: (value: string) => void;
}

export function Header(props: IHeaderProps) {
	const { searchValue, searchHandler } = props;

	return <HeaderLayout searchValue={searchValue} searchHandler={searchHandler} />;
}
