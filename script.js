const myLibrary = ["Hobbit", "Star Wars", "King Arthur", "sss"];


function Book(title,author,pages,isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}
var container = document.querySelector(".container");
const form = document.querySelector("form");
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector(".close-button");
const newBookButton = document.querySelector("dialog + button");

newBookButton.addEventListener('click', () => {
    dialog.showModal();
  });

closeButton.addEventListener("click", () => {
    dialog.close();
  });  

form.addEventListener('submit', function(event){
  event.preventDefault();

  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let isRead = document.getElementById('isRead').value;

  const data = new Book(title, author, pages, isRead);
  console.log(data);
  myLibrary.push(title);
  container.innerHTML = "";
  displayBooks();
});

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
