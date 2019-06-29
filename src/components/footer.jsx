import React from 'react';
import useFilteredConcerts from "../hooks/useFilteredConcerts";

export default function Footer() {

    // local var

    const filteredConcerts = useFilteredConcerts();

    return(
        <footer>{filteredConcerts.length} Selected</footer>
    )
}
