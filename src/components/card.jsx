import React from 'react';

export default function Card (props) {
    return (
        <div>
            <img src={props.concert.imageSource} alt={props.concert.name}/>
            <p>{props.concert.name}</p>
            📅 {props.concert.dateOfShow}
            <br />
            📍 {props.concert.eventHallName}
        </div>
    )
};
