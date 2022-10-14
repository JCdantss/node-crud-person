const persona = []
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
module.exports = cadastrandoPerson