import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name, capital, population, flag } = props.country
    return (
        <div className="containers">
            <div class="row row-cols-1 row-cols-md-3 g-4 my-2 mx-2">
                <div class="col">
                    <div class="card border-0 shadow-lg h-100 align-items-center justify-content-center">
                        <img src={flag} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text fw-bold">Capital: {capital}</p>
                            <p class="card-text fw-bold">Population: {population}</p>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Country;