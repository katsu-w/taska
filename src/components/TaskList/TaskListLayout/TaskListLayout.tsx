import './TaskListLayout.scss';
import Loader from '../../Loader';
import type { ITask } from '../../../types/types.ts';

interface ITaskListLayoutProps {
	taskList: ITask[],
	isLoading: boolean,
}

export function TaskListLayout(props: ITaskListLayoutProps) {
	const { taskList, isLoading } = props;
	
	return (
		<main className='tasklist container'>
			{isLoading ?
				<Loader />
				:
				taskList.map((task) => {
					return (
						<div className="card" key={task.id}>
							<div className="card__details">
								<input
									className="card__status"
									id="status"
									name='status'
									type="checkbox"
									checked={task.completed}
								/>
								<p className="card__title">{task.title}</p>
							</div>
							<button className="card__remove-btn btn">Удалить</button>
						</div>
					)})
				}
			
			
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
