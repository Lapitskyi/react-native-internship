import {createSlice} from '@reduxjs/toolkit';
import {
    requestRickAndMortyCharter,
    requestRickAndMortyEpisode,
    requestRickAndMortyLocation,
} from './rickAndMortyAction';
import {PayloadAction} from '@reduxjs/toolkit';
import {ICharacter} from "../../models/ICharacter";
import {ILocation} from "../../models/ILocation";
import {IEpisode} from "../../models/IEpisode";

interface IState {
    location: any[],
    character: any[],
    episode: any [],
    loading: boolean,
    error: string,
}
const initialState:IState = {
    location: [],
    character: [],
    episode: [],
    loading: false,
    error: '',
};
export const rickAndMortySlice = createSlice({
    name: 'rickAndMorty',
    initialState,
    reducers: {},
    extraReducers: {
        //Charter
        [requestRickAndMortyCharter.fulfilled.type]: (state, action: PayloadAction<IEpisode[]>) => {
            state.loading = false;
            state.error = '';
            state.character = action.payload;
        },
        [requestRickAndMortyCharter.pending.type]: (state, action: PayloadAction<boolean>) => {
            state.loading = true
        },
        [requestRickAndMortyCharter.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },
        //Locations
        [requestRickAndMortyLocation.fulfilled.type]: (state, action: PayloadAction<ILocation[]>) => {
            state.loading = false;
            state.error = '';
            state.location = action.payload;
        },
        [requestRickAndMortyLocation.pending.type]: (state, action: PayloadAction<boolean>) => {
            state.loading = true
        },
        [requestRickAndMortyLocation.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },
        [requestRickAndMortyEpisode.fulfilled.type]: (state, action: PayloadAction<ICharacter[]>) => {

            state.loading = false;
            state.error = '';
            state.episode = action.payload;
        },
        [requestRickAndMortyEpisode.pending.type]: (state, action: PayloadAction<boolean>) => {
            state.loading = true
        },
        [requestRickAndMortyEpisode.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },
    },
});

export default rickAndMortySlice.reducer;
