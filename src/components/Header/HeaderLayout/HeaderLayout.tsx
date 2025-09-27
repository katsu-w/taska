import './HeaderLayout.scss';
import { Link, useNavigate } from 'react-router-dom';

interface IHeaderLayoutProps {
	isOnMainPage: boolean;
	searchValue: string;
	searchHandler: (value: string) => void;
	selectValue: string;
	changeSelectHandler: (value: string) => void;
}

export function HeaderLayout(props: IHeaderLayoutProps) {
	const { isOnMainPage, searchValue, searchHandler, selectValue, changeSelectHandler } =
		props;

	const navigate = useNavigate();

	return (
		<header className="header">
			<div className={`header__inner container${isOnMainPage ? ' on-main' : ''}`}>
				<Link className="logo" to="/">
					Taska
				</Link>
				<nav className="controls header__controls">
					{isOnMainPage ? (
						<>
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
						</>
					) : (
						<button onClick={() => navigate(-1)} className="btn controls__go-back-btn">
							Назад
						</button>
					)}
				</nav>
			</div>
		</header>
	);
}
