let persons = []

const getPersonas = () => {
    return persons
}
const getById = (id) => {
    const foundPersons = persons.find(person => person.id === Number(id))
    return foundPersons == undefined ? "Not found, if correct" : foundPersons
}
const createPerson = (id, name, birthDate) => {
    const infoPerson = {
        id: id,
        name: name,
        birthDate: birthDate
    }
    if (infoPerson.id === ' ' || infoPerson.name === ' ' || infoPerson.birthDate === ' ') {
        return "Todos os Campos sao obrigatorios"
    }
    persons.push(infoPerson)
    return persons
}

const removePerson = (id) => {
    persons = persons.filter(person => person.id != id)
}

const updatePerson = (id, name, birthDate) => {
    let getById = persons.find(persona => persona.id === Number(id))
    const verification = getById == undefined ?
        "Nao encontrado"
        : getById
    verification.id = id
    verification.name = name
    verification.birthDate = birthDate
}

const getPersonAge = () => {
    let PersonAge = []
    for (let i = 0; i < persons.length; i++) {
        const pesson = persons[i];
        if (getAge(pesson.birthDate) >= 18) {
            PersonAge.push(pesson)
        }
    }
    return PersonAge
}

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

module.exports = {
    getById,
    createPerson,
    getPersonas,
    removePerson,
    updatePerson,
    getPersonAge
}