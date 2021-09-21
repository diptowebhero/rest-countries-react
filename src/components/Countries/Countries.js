import React, { useEffect, useState } from 'react';
import Country from './Country/Country';
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Hello form Countries</h1>
            <h4 className='fw-bold'>Total Country: {countries.length}</h4>
               <div className="containers">
               {
                countries.map(country => 
                <Country country={country}></Country>)
                }
               </div>
        </div>
    );
};

export default Countries;