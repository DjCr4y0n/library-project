const myLibrary = ["Hobbit", "Star Wars", "King Arthur", "sss", "sss"];


function Book() {
  // the constructor...
}

const dialog = document.querySelector("dialog");
const closeButton = document.querySelector("dialog button");
const newBookButton = document.querySelector("dialog + button");

newBookButton.addEventListener('click', () => {
    dialog.showModal();
  });

closeButton.addEventListener("click", () => {
    dialog.close();
  });  

function AddBookToLibrary() {
  
}

var container = document.querySelector(".container");

function displayBooks()
{
    for(let book in myLibrary)
    {
        var newBook = document.createElement("div");
        newBook.className = "book";
        newBook.textContent = myLibrary[book];
        newBook.style.border = "2px solid black";
        newBook.style.textAlign = "center";
        newBook.style.height = "100px"
        container.appendChild(newBook);
    }
}
displayBooks();
