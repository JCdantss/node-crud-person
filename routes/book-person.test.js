const cadastrandoPerson = require("./book-person")
test("Cadastrando person", () => {
    expect(cadastrandoPerson(1, "Julio", "19/05/1990")).toEqual([{ id: 1, name: "Julio", dataNasc: "19/05/1990" }])
})
test("erro de cadastro", () => {
    expect(cadastrandoPerson(" ", " ", " ")).toEqual("Todos os Campos sao obrigatorios")
})
