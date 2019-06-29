import {ACTIONS} from "../constants/constants";

const initialState = {
    search: '',
    concerts: {
        loading: false,
        data: [],
        error: ''
    }
};

// selectors

export const selectSearch = state => state.search;
export const selectConcerts = state => state.concerts.data;
export const selectConcertsError = state => state.concerts.error;
export const selectConcertsLoading = state => state.concerts.loading;

// reducer

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SEARCH_CHANGED:
            return {
                ...state,
                search: action.payload,
            };
        case ACTIONS.CONCERTS_LOADING:
            return {
                ...state,
                concerts: {...state.concerts, loading: true},
            };
        case ACTIONS.CONCERTS_SUCCESS:
            return {
                ...state,
                concerts: {...state.concerts, loading: false, data: action.payload},
            };
        case ACTIONS.CONCERTS_FAILED:
            return {
                ...state,
                concerts: {loading: false, data: [], error: 'Loading error'},
            };
        case ACTIONS.COUNT_CHANGED:
            return {
                ...state,
                count: action.payload,
            };
        default:
            return state;
    }
};
