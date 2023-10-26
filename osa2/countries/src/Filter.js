import React from 'react'
import App from './App'

const Filter = ({c}) => {
    if (c.length >= 10) {
        return(
            <div>Too many matches, specify another filter</div>
        )
    } else if (c.length === 1) {
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

            </div>
        )
    }


    return(
        <div>
            {c.map( x => <p>{x.name.common}</p> )}
        </div>
    )
}

export default Filter;