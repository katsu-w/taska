import './TaskListLayout.scss';

export function TaskListLayout() {
	
	return (
		<main className='tasklist container'>
			<div className="card">
				<div className="card__details">
					<input
						className="card__status"
						id="status"
						name='status'
						type="checkbox"
					 
					/>
					<p className="card__title">Card titleasdasdasdasdasdsdasdasdasasdasdasd </p>
				</div>
				<button className="card__remove-btn btn">Удалить</button>
			</div>
			<div className="card">
				<div className="card__details">
					<input
						className="card__status"
						id="status"
						name='status'
						type="checkbox"
					
					/>
					<p className="card__title">Card title 2</p>
				</div>
				<button className="card__remove-btn btn">Удалить</button>
			</div>
			<div className="card">
				<div className="card__details">
					<input
						className="card__status"
						id="status"
						name='status'
						type="checkbox"
					
					/>
					<p className="card__title">Card title 3</p>
				</div>
				<button className="card__remove-btn btn">Удалить</button>
			</div>
			<div className="card">
				<div className="card__details">
					<input
						className="card__status"
						id="status"
						name='status'
						type="checkbox"
					
					/>
					<p className="card__title">Card title 4</p>
				</div>
				<button className="card__remove-btn btn">Удалить</button>
			</div>
			<div className="card">
				<div className="card__details">
					<input
						className="card__status"
						id="status"
						name='status'
						type="checkbox"
					
					/>
					<p className="card__title">Card title 5</p>
				</div>
				<button className="card__remove-btn btn">Удалить</button>
			</div>
		</main>
	);
}
