import {ACTIONS} from "../constants/constants";

export default class ConcertService {

     async loadConcertsHandler(params, dispatch) {
        dispatch(ACTIONS.CONCERTS_LOADING)();
        try {
            const response = await fetch("https://apis.is/concerts");
            const json = await response.json();
            dispatch(ACTIONS.CONCERTS_SUCCESS)(json.results);
        } catch (e) {
            dispatch(ACTIONS.CONCERTS_FAILED)('error');
        }
    };
}
