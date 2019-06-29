import {EFFECTS} from "../constants/constants";
import ConcertService from "./concertsService";

// service instances, use them for caching responses inside as well

const concertService = new ConcertService();

// side effect cases

export const createEffects = (dispatch) => {

    const curryDispatch = (type) => (payload) => {dispatch({type:type, payload: payload})};

    return (effect) => {

        switch (effect.type) {
            case EFFECTS.CONCERTS_LOAD:
                concertService.loadConcertsHandler(null, curryDispatch);
                break;
            default:
                console.warn(`Effect ${effect.type} not found`);
        }
    };
};
