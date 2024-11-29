//Destructuring: Allows unpacking values from arrays or properties from objects into distinct variables.

//Problem: Extract the title and author from a book object.

const book = { title: "1984", author: "Orwell" };
const { title, author } = book;
console.log(title, author);