const books = require('./books');

test('Deve adicionar um livro', () => {
  const book = {id: 1, name: 'Algum livro'}
  
  expect(books.addBook(book)).toEqual({"id": 1, "name": "Algum livro"});
})
