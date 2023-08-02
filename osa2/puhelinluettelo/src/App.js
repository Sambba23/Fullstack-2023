import { useEffect, useState } from 'react'
import Filter from './Filter'
import Form from './Form'
import Search from './Search'
import axios from 'axios'
import noteService from './services/notes'

const App = () => {

  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const [search, setSearch] = useState('')

  const [person, setPerson] = useState([])

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => 
        setPerson(response.data))
  }

  useEffect(hook, [])

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const addNote = (event) => {
    const newPerson = {
      name: newName,
      number: newNumber
    }

    event.preventDefault()
    
    if (person.some( p => p.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPerson(person.concat(newPerson))
      axios
        .post('http://localhost:3001/persons', newPerson)
        .then(response => {
            console.log(response)
          })
      setNewName('')
      setNewNumber('')
    }
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search search={search} handleSearch={handleSearch}/>
      <h3>add a new</h3>
      <Form 
        newName={newName} 
        newNumber={newNumber} 
        handleNewName={handleNewName} 
        handleNewNumber={handleNewNumber} 
        addNote={addNote}
      />
      <h2>Numbers</h2>
      <Filter persons={person} search={search}/>
      </div>
  )

}

export default App