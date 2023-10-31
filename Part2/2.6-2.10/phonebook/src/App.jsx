
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import axios from 'axios'
import { useState, useEffect } from 'react'
import personServices from './services/persons'
const App = () => {
  const [persons, setPersons] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(response => {
      setPersons(response.data)
    })
  },[])
  const handleDelete = () => {
    console.log('delete')
  }


  const handleInputChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }
  const handleNumberInputChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleDeleteOf = (id) => {
    const person = persons.find((person) => person.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personServices.deletePerson(id)
      setPersons(persons.filter((person) => person.id !== id))
    }
  }


  const handleNameChange = (event) => {
    event.preventDefault()
    console.log(newName)
    if(persons.some(person=>person.name===newName)){
      console.log(persons) 
      personServices.update(persons.find(person=>person.name===newName).id,{name:newName,number:newNumber}).then(response=>{
        console.log(response)
        
      }).catch(error=>{console.log(error)})
      setPersons(persons.map(person=>person.name===newName?{...person,number:newNumber}:person))
    }
    else{
    setPersons(persons.concat({ name: newName, number: newNumber , id:persons.length+1}))
    personServices.create({ name: newName, number: newNumber })
    }
    setNewName('')
    setNewNumber('')
  }

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={newFilter} handleFilterChange={handleFilterChange} />
      <PersonForm newName={newName} handleInputChange={handleInputChange} newNumber={newNumber} handleNumberInputChange={handleNumberInputChange} handleNameChange={handleNameChange} />
      <Persons filteredPersons={filteredPersons} handleDelete={handleDelete}  handleDeleteOf={handleDeleteOf}/>
    </div>
  )
}

export default App