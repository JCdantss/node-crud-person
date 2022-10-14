const person = require("./book-person")

const getPerson = person.map(getId => getId.person.id)

module.exports = getPerson