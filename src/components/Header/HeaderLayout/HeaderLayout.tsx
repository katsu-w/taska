import './HeaderLayout.scss';

export function HeaderLayout() {
	return (
		<header className="header">
			<div className="header__inner container">
				<a className="logo" href="/">
					Taska
				</a>
				<nav className="controls header__controls">
					<input
						className="controls__search input"
						id="search"
						name="search"
						type="search"
					/>
					<select name="filter" id="filter" className="controls__filter select">
						<option value="default">По умолчанию</option>
						<option value="alphabet">По алфавиту</option>
					</select>
				</nav>
			</div>
		</header>
	);
}
