import React from 'react';
import Show from './Show'
import WeatherApi from './WeatherApi'

const ShowDetails = ({c}) => {
    return(
        <div>
        <h1>{c[0].name.common}</h1>
        <p>Capital {c[0].capital}</p>
        <p>Area {c[0].area}</p>
        <h2>Languages:</h2>
        <ul>
            {Object.values(c[0].languages).map((language, index) => (
                <li key={index}>{language}</li>
            ))}
        </ul>
        <img src={c[0].flags.svg} style={{ width: '150px' }}/>
        {c && c[0] && c[0].capital && <WeatherApi city={c[0].capital} />}

        </div>
    )
}

export default ShowDetails;
