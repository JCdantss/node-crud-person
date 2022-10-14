const books = []

exports.addBook = function (aBook) {
  const newBook = {
    id: aBook.id,
    name: aBook.name
  };
  books.push(newBook);
  return newBook;
} 