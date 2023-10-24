import React from 'react'
import App from './App'

const Filter = ({persons, search, helpdelete}) => {
    
    return(
        <div>
            {persons.filter( x => x.name.toLowerCase().startsWith(search.toLowerCase())).map( x => <p key={x.name}>{x.name} {x.number} <button onClick={() => helpdelete(x.id)}>Delete</button></p>)} 
        </div>
    )
}

export default Filter;