import {
    SET_RICK_AND_MORTY_CHARACTER,
    SET_RICK_AND_MORTY_EPISODE,
    SET_RICK_AND_MORTY_LOCATION, TOGGLE_IS_LOADER,
} from './rickAndMortyType';

export const toggleIsLoader = (isLoader) => ({
    type: TOGGLE_IS_LOADER,
    isLoader,
});

export const setRickAndMortyLocation = (location) => ({
    type: SET_RICK_AND_MORTY_LOCATION,
    location,
});
export const setRickAndMortyCharter = (character) => ({
    type: SET_RICK_AND_MORTY_CHARACTER,
    character,
});
export const setRickAndMortyEpisode = (episode) => ({
    type: SET_RICK_AND_MORTY_EPISODE,
    episode,
});

export const requestRickAndMortyLocation = () => async (dispatch) => {
    dispatch(toggleIsLoader(true));
    // const data = await rickAndMortyApi.getRickAndMortyLocation()
    dispatch(toggleIsLoader(false));
    // dispatch(setRickAndMortyLocation(data));
};
export const requestRickAndMortyCharter = () => async (dispatch) => {
    dispatch(toggleIsLoader(true));
    // const data = await rickAndMortyApi.getRickAndMortyCharter()
    dispatch(toggleIsLoader(false));
    // dispatch(setRickAndMortyCharter(data));
};
export const requestRickAndMortyEpisode = () => async (dispatch) => {
    dispatch(toggleIsLoader(true));
    // const data = await rickAndMortyApi.getRickAndMortyEpisode()
    dispatch(toggleIsLoader(false));
    // dispatch(setRickAndMortyEpisode(data));
};
