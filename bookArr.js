// Suppose you have an array of books, and each book is represented as an object with a "title" and a "details" property. The "details" property itself is an object with a "genre" property. How would you change the genre of the book with the title "JavaScript 101" to "Programming"?

const books = [
  { title: "HTML", detail: { genre: "Structure" } },
  { title: "CSS", detail: { genre: "Color" } },
  { title: "JavaScript 101", detail: { genre: "Logic" } },
];
books.forEach((value) => {
  if (value.title === "JavaScript 101") {
    return (value.detail.genre = "Programming");
  }
});
console.log(books);
