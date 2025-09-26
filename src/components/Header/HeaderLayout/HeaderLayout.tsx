import './HeaderLayout.scss';
import { Link } from 'react-router-dom';

interface IHeaderLayoutProps {
	searchValue: string;
	searchHandler: (value: string) => void;
	selectValue: string;
	changeSelectHandler: (value: string) => void;
}

export function HeaderLayout(props: IHeaderLayoutProps) {
	const { searchValue, searchHandler, selectValue, changeSelectHandler } = props;

	return (
		<header className="header">
			<div className="header__inner container">
				<Link className="logo" to="/">
					Taska
				</Link>
				<nav className="controls header__controls">
					<input
						className="controls__search input"
						id="search"
						name="search"
						type="search"
						placeholder="Поиск.."
						value={searchValue}
						onChange={(e) => searchHandler(e.target.value)}
					/>
					<select
						value={selectValue}
						onChange={(e) => changeSelectHandler(e.target.value)}
						name="filter"
						id="filter"
						className="controls__filter select"
					>
						<option value="default">По умолчанию</option>
						<option value="alphabet">По алфавиту</option>
					</select>
				</nav>
			</div>
		</header>
	);
}
