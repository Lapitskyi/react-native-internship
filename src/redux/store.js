import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReduce from './auth/authReduce';

const reducers = combineReducers({
  auth: authReduce,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
