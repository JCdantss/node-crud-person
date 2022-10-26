const book = require("./book-person")
const getById = book.getById
const cadastrandoPerson = book.cadastrandoPerson
const getPersonas = book.getPersonas
const removePerssoa = book.removePerssoa
const putByPersona = book.putByPersona
const getPessoasMaiorDeIdade = book.getPessoasMaiorDeIdade
test("Deve cadastrar pessoas", () => {
    expect(cadastrandoPerson(1, "Julio", "2022-05-10")).toEqual([{ id: 1, name: "Julio", dataNasc: "2022-05-10" }])
})
test("Deve retorna uma menssagem de erro quando os valores forem invalidos", () => {
    expect(cadastrandoPerson(" ", " ", " ")).toEqual("Todos os Campos sao obrigatorios")
})
test("Deve retornar a pessoa pesquisada pelo ID", () => {
    cadastrandoPerson(2, "Cesar", "2022-05-10")
    expect(getById(2)).toEqual({ id: 2, name: "Cesar", dataNasc: "2022-05-10" })
})
test("Deve retornar menssagem de nao encontrada", () => {
    expect(getById(3)).toEqual("Nao encontrada, verifique se esta correto")
})
test("Deve retornar todas as pessoas cadastrada", () => {
    cadastrandoPerson(3, "Maria", "2022-05-10")
    expect(getPersonas()).toEqual([
        { id: 1, name: "Julio", dataNasc: "2022-05-10" },
        { id: 2, name: "Cesar", dataNasc: "2022-05-10" },
        { id: 3, name: "Maria", dataNasc: "2022-05-10" }
    ])
})
test("Deve excluir uma pessoa", () => {
    cadastrandoPerson(5, "Rita", "2022-05-10")
    removePerssoa(5)
    expect(getById(5)).toEqual("Nao encontrada, verifique se esta correto")
})
test("Deve fazer Alteracoes em uma pessoa", () => {
    putByPersona(1, "Snow", "Sem data")
    expect(getById(1)).toEqual({ dataNasc: "Sem data", id: 1, name: "Snow" })
})
test("Deve retornar pessoa maior de idade", () => {
    cadastrandoPerson(6, "Luana", "2022-05-10")
    cadastrandoPerson(7, "Paula", "1980-05-10")
    expect(getPessoasMaiorDeIdade()).toEqual(          // 1
        expect.arrayContaining([      // 2
            expect.objectContaining({   // 3
                id: 7,
                name: 'Paula',
                dataNasc: "1980-05-10"                // 4
            })
        ])
    )
})