import {applyMiddleware, combineReducers, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunkMiddleware from 'redux-thunk';
import authReduce from './auth/authReduce';

const reducers = combineReducers({
  auth: authReduce,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  applyMiddleware(thunkMiddleware),
);

export const persiStore = persistStore(store);
