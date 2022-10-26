let persona = []

const getPersonas = () => {
    return persona
}
const getById = (id) => {
    const foundPersons = persona.find(person => person.id === Number(id))
    const verificando = foundPersons == undefined ?
        "Nao encontrada, verifique se esta correto"
        : foundPersons
    return verificando
}
const cadastrandoPerson = (id, name, dataNasc) => {
    const infoPerson = {
        id: id,
        name: name,
        dataNasc: dataNasc
    }
    if (infoPerson.id === ' ' || infoPerson.name === ' ' || infoPerson.dataNasc === ' ') {
        return "Todos os Campos sao obrigatorios"
    }
    persona.push(infoPerson)
    return persona
}

const removePerssoa = (id) => {
    persona = persona.filter(person => person.id != id)
}

const putByPersona = (id, nome, dataNasc) => {
    let getById = persona.find(persona => persona.id === Number(id))
    const verification = getById == undefined ?
        "Nao encontrado"
        : getById
    verification.id = id
    verification.name = nome
    verification.dataNasc = dataNasc
}

const getPessoasMaiorDeIdade = () => {
    let pessoasMaiorDeIdade = []
    for (let i = 0; i < persona.length; i++) {
        const pessoa = persona[i];
        if (getAge(pessoa.dataNasc) >= 18) {
            pessoasMaiorDeIdade.push(pessoa)
        }
    }
    return pessoasMaiorDeIdade
}

module.exports = {
    getById,
    cadastrandoPerson,
    getPersonas,
    removePerssoa,
    putByPersona,
    getPessoasMaiorDeIdade
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



// const personaMaiorDeIdade = (id) => {
//     const personaMaior = myVar.map(persona => persona.data.split("/"))
//     const result = personaMaior.map(num => 2022 - num[2])
//     console.log(result)
// }
// personaMaiorDeIdade()
// const myVar = [
//     { id: 1, nome: "julio", data: "19/05/1990" },
//     { nome: "cesar", data: "23/08/1990" },
//     { nome: "renato", data: "31/03/2030" },
//     { nome: "raul", data: "03/01/2040" },
//     { nome: "fulano", data: "08/09/2010" },
//     { nome: "cicrano", data: "28/11/2020" },
//     { nome: "chico", data: "31/01/1980" },
//     { nome: "tio", data: "13/11/1980" },
// ]
// const sortName = myVar.map(nome => nome.nome).sort()
// const func = myVar.map(nome => nome.data.split("/")).sort()
// const map2 = func.map(numb => numb[1]).sort()
// console.log(sortName)
// console.log(map2)