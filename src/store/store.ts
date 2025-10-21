import { createStore } from 'redux';
import { taskListReducer } from '../reducers';

export const store = createStore(taskListReducer);
