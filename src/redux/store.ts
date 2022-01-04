import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rickAndMortyReduce from './rickAndMorty/rickAndMortySlice';

const rootReducers = combineReducers({
    rickAndMortyReduce,
});


interface IPersist {
    key:string,
    storage:any
}
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};


const persistedReducer = persistReducer(persistConfig, rootReducers);

export const setupStore = () => {
    return configureStore({
        reducer:persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),

    })
}

export const persiStore = persistStore(setupStore());

export type RootState = ReturnType<typeof rootReducers>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
