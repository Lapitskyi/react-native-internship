import {
    SET_RICK_AND_MORTY_CHARACTER,
    SET_RICK_AND_MORTY_EPISODE,
    SET_RICK_AND_MORTY_LOCATION,
    TOGGLE_IS_LOADER,
} from './rickAndMortyType';

const initialState = {
    location: [],
    character: [],
    episode: [],
};

const rickAndMortyReduce = (state = initialState, action) => {
    switch (action.type) {

        case SET_RICK_AND_MORTY_LOCATION:
            return {
                ...state,
                location: action.location,
            };

        case SET_RICK_AND_MORTY_CHARACTER:
            return {
                ...state,
                location: action.location,
            };

        case SET_RICK_AND_MORTY_EPISODE:
            return {
                ...state,
                location: action.location,
            };

        case TOGGLE_IS_LOADER:
            return {
                ...state,
                loading: action.loading,
            };
        default:
            return state;
    }
};

export default rickAndMortyReduce;
