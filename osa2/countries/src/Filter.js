import React from 'react'
import App from './App'
import Show from './Show'
import ShowDetails from './ShowDetails'

const Filter = ({c, actionBut}) => {
    if (c.length >= 10) {
        return(
            <div>Too many matches, specify another filter</div>
        )
    } else if (c.length === 1) {
        return(
            <ShowDetails c = {c}/>
        )
    }


    return(
        <div>
            {c.map( x => <p>{x.name.common} <button onClick={() => actionBut(x.name.common)}>show</button> </p> )}
        </div>
    )
}

export default Filter;