const PersonForm = ({newName, handleInputChange, newNumber, handleNumberInputChange, handleNameChange})=>{
    return(
        <form>
        <div>
          name: <input value={newName}onChange={handleInputChange}/>
        </div>
        <div>
          number: <input value={newNumber}onChange={handleNumberInputChange}/>
        </div>
        <div>
          <button type="submit" onClick={handleNameChange}>add</button>
        </div>
      </form>
    )
}
export default PersonForm