const Persons({filteredPersons})=>{
    return(
        <>
        <h2>Numbers</h2>
        <ul>
          {filteredPersons.map((person) => (
            <li key={person.name}>{person.name} {person.number}</li>
          ))}
        </ul>
        </>
    )
}
export default Persons