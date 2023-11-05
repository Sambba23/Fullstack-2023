import React from 'react'
import ShowDetails from './ShowDetails'
import WeatherApi from './WeatherApi'

const Filter = ({ c, actionBut }) => {
    if (c.length >= 10) {
        return (
            <div>Too many matches, specify another filter</div>
        )
    } else if (c.length === 1) {
        return (
            <div>
            <ShowDetails c={c} />
            <WeatherApi/>
            </div>
        )
    }

    return (
        <div>
            {c.map(x => (
                <p key={x.name.common}>
                    {x.name.common} <button onClick={() => actionBut(x.name.common)}>show</button>
                </p>
            ))}
        </div>
    )
}

export default Filter;
