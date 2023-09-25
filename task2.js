// Suppose you have an array of books, and each book is represented as an object with a "title" and a "details" property.
// The "details" property itself is an object with a "genre" property. How would you change the genre of the book with
// the title "JavaScript 101" to "Programming"?

const books =[
    {
        title: "harry potter",
        details: {
          genre: "fiction"
        }
      },
      {
        title: "JavaScript 101",
        details: {
          genre: "programming"
        }
      },
      {
        title: "it ends with us",
        details: {
          genre: "love"
        }
      }
]
function changeGenreWithTitle(newTitle, newGenre) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].title === newTitle) {
     
      books[i].details.genre = newGenre;
      
    }
  }
}
changeGenreWithTitle("JavaScript 101", "sadness");

console.log(books);