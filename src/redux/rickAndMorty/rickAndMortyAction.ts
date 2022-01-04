import {createAsyncThunk} from '@reduxjs/toolkit/src/createAsyncThunk';
import {API} from '../../service/axios';

export const requestRickAndMortyLocation = createAsyncThunk(
    'location/fetchAll',
    async (_, thunkAPI) =>{
        try {
            const data = await API.getRickAndMortyLocation()
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue('Что-то пошло не так....')
        }
    }
)
export const requestRickAndMortyCharter = createAsyncThunk(
    'charter/fetchAll',
    async (_, thunkAPI) =>{
        try {
            const data = await API.getRickAndMortyCharter()
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue('Что-то пошло не так....')
        }
    }
)
export const requestRickAndMortyEpisode = createAsyncThunk(
    'episode/fetchAll',
    async (_, thunkAPI) =>{
        try {
            const data = await API.getRickAndMortyEpisode()
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue('Что-то пошло не так....')
        }
    }
)


