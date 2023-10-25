import { useEffect, useState } from 'react'
import Filter from './Filter'
import Form from './Form'
import Search from './Search'
import noteService from './services/notes'
import './style.css'


const App = () => {

  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const [search, setSearch] = useState('')

  const [person, setPerson] = useState([])

  const [errorMessage, setErrorMessage] = useState(null)

  const hook = () => {
    noteService.getAll()
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
      const existingPerson = person.find( p => p.name === newName)
      if (window.confirm(`${newName} is already added to phonebook, replace the old with a new one?`)){
        noteService.update(existingPerson.id, newPerson)
          .then(x => {
            setPerson(person.map(p => p.id === existingPerson.id ? x.data : p));
            setNewName('');
            setNewNumber(''); })
          .catch(error => {
            setErrorMessage(`Information of ${newName} has already been removed from server`)
            setTimeout(() => {
              setErrorMessage(null)
          }, 5000);
          
          })
          }
    
    } else {
      setPerson(person.concat(newPerson))
      noteService.create(newPerson)
      setErrorMessage(
        `Added ${newPerson.name}`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)

      setNewName('')
      setNewNumber('')
    }
  }

  const Notification = ({ message }) => {
    if (message === null) {
        return null
    }

    let className = 'notification';

    if (message.startsWith("Added")) {
        className += ' success';
    } else {
        className += ' error';
    }

    return (
        <div className={className}>
            {message}
        </div>
    )
}



  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const deletePerson = id => {
    const personToDelete = person.find(p => p.id === id);
    if (personToDelete && window.confirm(`Delete ${personToDelete.name} ?`)) {
      noteService.delett(id)
        .then(() => {
          setPerson(person.filter(p => p.id !== id));
        })
        .catch(error => {
          console.error("Error deleting person:", error);
          alert("There was an error deleting the person. Please try again.");
        });
    }
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
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
      <Filter persons={person} search={search} helpdelete={deletePerson}/>
      </div>
  )

}

export default App