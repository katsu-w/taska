import { applyMiddleware, combineReducers, createStore } from 'redux';
import { taskListReducer } from '../reducers';
import { thunk } from 'redux-thunk';

const reducer = combineReducers({ taskListState: taskListReducer });

// @ts-ignore
export const store = createStore(reducer, applyMiddleware(thunk));
