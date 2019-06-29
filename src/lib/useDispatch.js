import { useContext } from 'react';
import {StoreContext} from "../App";

export default function useDispatch(action_type) {
    const store = useContext(StoreContext);

    return (payload) => {
        store.dispatch({type:action_type, payload:payload});
    };
}
