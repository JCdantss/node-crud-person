const book = require("./book-person")
const getById = book.getById
const createPerson = book.createPerson
const getPersonas = book.getPersonas
const removePerson = book.removePerson
const updatePerson = book.updatePerson
const getPersonAge = book.getPersonAge
test("Should register people", () => {
    expect(createPerson(1, "Julio", "2022-05-10")).toEqual([{ id: 1, name: "Julio", birthDate: "2022-05-10" }])
})
test("Should returns an error message when values ​​are invalid", () => {
    expect(createPerson(" ", " ", " ")).toEqual("All fields are mandatory")
})
test("Should return the person searched for by ID", () => {
    createPerson(2, "Cesar", "2022-05-10")
    expect(getById(2)).toEqual({ id: 2, name: "Cesar", birthDate: "2022-05-10" })
})
test("Should return not found message", () => {
    expect(getById(3)).toEqual("Nao encontrada, verifique se esta correto")
})
test("Should return all registered people", () => {
    createPerson(3, "Mary", "2022-05-10")
    expect(getPersonas()).toEqual([
        { id: 1, name: "Julio", birthDate: "2022-05-10" },
        { id: 2, name: "Cesar", birthDate: "2022-05-10" },
        { id: 3, name: "Mary", birthDate: "2022-05-10" }
    ])
})
test("Deve excluir uma pessoa", () => {
    createPerson(5, "Rita", "2022-05-10")
    removePerson(5)
    expect(getById(5)).toEqual("Nao encontrada, verifique se esta correto")
})
test("Deve fazer Alteracoes em uma pessoa", () => {
    updatePerson(1, "Snow", "Sem data")
    expect(getById(1)).toEqual({ birthDate: "Sem data", id: 1, name: "Snow" })
})
test("Deve retornar pessoa maior de idade", () => {
    createPerson(6, "Luna", "2022-05-10")
    createPerson(7, "Paul", "1980-05-10")
    expect(getPersonAge()).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                id: 7,
                name: 'Paul',
                birthDate: "1980-05-10"
            })
        ])
    )
})