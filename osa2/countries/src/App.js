import React from 'react'
import { useEffect, useState } from 'react'
import Finder from './Finder'
import useCountries from './ApiHandler'
import Filter from './Filter'

const App = () => {

  const [search, setSearch] = useState('')
  const allCountries = useCountries()

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const filteredCountries = allCountries.filter(country => 
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  const searchEdit = (event) => {
    setSearch(event)
  }

  return (
    <div>
      <Finder search = {search} handleIt = {handleSearch}/>
      <Filter c = {filteredCountries} actionBut={searchEdit}/>
    </div>
  );
}

export default App;
