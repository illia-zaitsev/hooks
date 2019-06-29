import { useState, useContext } from 'react';
import useObserve from "../lib/useObserve";
import {selectConcerts, selectSearch} from "../reducer/reducer";
import {StoreContext} from "../App";

export default function useFilteredConcerts() {

    console.log('inside hook', useContext(StoreContext));

    const [concerts, setConcerts] = useState([]);
    const [search, setSearch] = useState('');

    useObserve([
        [selectSearch, setSearch],
        [selectConcerts, setConcerts]
    ]);

    return concerts.filter(concert => concert.name.toLowerCase().includes(search.toLowerCase()));
}



