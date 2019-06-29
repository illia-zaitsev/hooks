import React from 'react';
import {ACTIONS} from "../constants/constants";
import useDispatch from "../lib/useDispatch";

export default function Header () {

    const searchChangedDispatch = useDispatch(ACTIONS.SEARCH_CHANGED);

    return (
        <React.Fragment>
            <header>Concerts lookup</header>
            <input type="text" onChange={e => searchChangedDispatch(e.target.value)} />
        </React.Fragment>
    );
}
