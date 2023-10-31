import DeleteButton from "./DeleteButton"

const Persons = ({ filteredPersons, handleDeleteOf}) => {

  return (
    <>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person) => (


            <li key={person.name}>{person.name} {person.number}{" "}
               <DeleteButton handleDelete={()=>handleDeleteOf(person.id)}/>
            </li>


        ))}
      </ul>
    </>
  )
}
export default Persons