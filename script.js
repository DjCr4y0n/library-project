const myLibrary = [];


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
  myLibrary.push(data);
  container.innerHTML = "";
  displayBooks();
  dialog.close();
  title.value = "";
  author.value = "";
  pages.value = "0";
});

function createTile(element)
{
  var newBook = document.createElement("div");
  newBook.className = "book";
  newBook.style.border = "2px solid black";
  newBook.style.textAlign = "center";
  newBook.style.display = "flex";
  newBook.style.flexDirection = "column";

  var title = document.createElement("p");
  title.textContent = element.title;
  title.style.margin = "0px";
  
  var author = document.createElement("p");
  author.textContent = element.author;
  author.style.margin = "0px";

  var pages = document.createElement("p");
  pages.textContent = element.pages;
  pages.style.margin = "0px";

  var buttonsContainer = document.createElement("div");
  buttonsContainer.style.margin = "0px";


  newBook.appendChild(title);
  newBook.appendChild(author);
  newBook.appendChild(pages);
  newBook.appendChild(buttonsContainer);

  return newBook;
}

function displayBooks()
{
    for(let book in myLibrary)
    {
      container.appendChild(createTile(myLibrary[book])); 
    }
}
displayBooks();
