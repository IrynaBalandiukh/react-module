import React from 'react';
import {useEffect,useState} from 'react';
import  Flight from './Flight';

export default function Flightslist () {

    let [flightslist, setFlights] = useState([]);

    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(flights => {
                setFlights(flights.filter(flight => flight.launch_year !=='2020'))
            })

    },[]);

    return (
        <div>
            {
                flightslist.map(value => <Flight key={value.flight_number} item={value}/>)
            }
        </div>
    );
};