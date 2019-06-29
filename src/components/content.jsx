import React, {useState} from 'react';
import {selectConcertsError, selectConcertsLoading} from "../reducer/reducer";
import {EFFECTS} from "../constants/constants";
import useObserve from "../lib/useObserve";
import Card from "./card";
import useSideEffect from "../lib/useSideEffect";
import useFilteredConcerts from "../hooks/useFilteredConcerts";

export default function Content() {

    // state

    const [loading, setLoading] = useState('');
    const [error, setError] = useState('');

    // local var

    const filteredConcerts = useFilteredConcerts();

    // store

    useObserve([
        [selectConcertsError, setError],
        [selectConcertsLoading, setLoading]
    ]);

    // actions

    useSideEffect(EFFECTS.CONCERTS_LOAD);

    // render

    return (
        <main>
            {loading ? 'Loading ...' : error ? error :
                filteredConcerts.map(concert => (
                    <Card concert={concert} key={concert.eventDateName + concert.dateOfShow}/>
                ))
            }
        </main>
    )
}
