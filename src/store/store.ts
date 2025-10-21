import { combineReducers, createStore } from 'redux';
import { taskListReducer } from '../reducers';

const reducer = combineReducers({ taskListState: taskListReducer });

export const store = createStore(reducer);
