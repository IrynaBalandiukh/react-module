import React from 'react';
import {useEffect,useState} from 'react';

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
                flightslist.map(value => <div key={value.flight_number} className='mission_block'>
                    <div>
                        <h1>{value.mission_name}</h1>
                        {value.launch_year}
                    </div>
                    <img src={value.links.mission_patch_small} alt="mission_icon"/>
                </div>)
            }
        </div>
    );
};