import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
}
const checkExist = (name) => {
    const request = axios.get(baseUrl)
    return request.then(response => {
        const persons = response.data
        console.log(persons.some(person => person.name === name))
        return persons.some(person => person.name === name)
    })
}

const create = newObject => {
    if(checkExist(newObject.name)===true){
        axios.put(`${baseUrl}/${newObject.id}`, newObject)
    }
    else{

    return axios.post(baseUrl, newObject)
    }
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}
const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default {
    getAll: getAll,
    create: create,
    update: update,
    deletePerson: deletePerson
}