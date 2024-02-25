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
const newBookButton = document.querySelector(".new");

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
  let isRead = document.getElementById('isRead').checked;

  const data = new Book(title, author, pages, isRead);
  console.log(data);
  myLibrary.push(data);
  container.innerHTML = "";
  displayBooks();
  dialog.close();
  form.reset();
});

function createTile(element)
{
  var newBook = document.createElement("div");
  newBook.className = "book";
  newBook.style.border = "2px solid black";
  newBook.style.borderRadius = "16px";
  newBook.style.alignItems = "left";
  newBook.style.display = "flex";
  newBook.style.flexDirection = "column";
  newBook.style.gap = "5px";

  var infoContainer = document.createElement("div");
  infoContainer.className = "info";
  infoContainer.style.padding = "20px";

  var title = document.createElement("h1");
  title.textContent = element.title;
  title.style.margin = "0px";
  
  var author = document.createElement("p");
  author.textContent = "By: "+element.author;
  author.style.margin = "0px";
  author.style.fontSize = "1.5em";
  author.style.marginTop = "5px";

  var pages = document.createElement("p");
  pages.textContent = "Number of pages: "+element.pages;
  pages.style.margin = "0px";
  pages.style.fontSize = "1.5em";
  pages.style.marginTop = "5px";


  var buttonsContainer = document.createElement("div");
  buttonsContainer.className = "buttons-container";
  buttonsContainer.style.margin = "0px";
  buttonsContainer.style.alignSelf = "flex-end";
  buttonsContainer.style.margin = "0px 10px 0px 10px"

  var readBook = document.createElement("button");
  readBook.style.border = "none";
  readBook.style.backgroundColor = "white";
  var readBookIcon = document.createElement('img');
  readBookIcon.alt = "Was-Read-Icon";

  if(element.isRead == false)
  {
    readBookIcon.src = "check-circle.svg";
  }
  else
  {
    readBookIcon.src = "x-circle.svg";
  }
  readBook.appendChild(readBookIcon);

  readBook.addEventListener('click', function() {
    if(element.isRead == false)
  {
    element.isRead = true;
    readBookIcon.src = "x-circle.svg";
  }
  else
  {
    element.isRead = false;
    readBookIcon.src = "check-circle.svg";
  }
  });

  var deleteBook = document.createElement("button");
  var deleteBookIcon = document.createElement("img");
  deleteBookIcon.src = 'trash-2.svg'
  deleteBookIcon.alt = 'Delete-Icon'
  deleteBook.style.border = "none";
  deleteBook.style.backgroundColor = "white";
  deleteBook.appendChild(deleteBookIcon);

  deleteBook.addEventListener("click", function() {
    const index = myLibrary.indexOf(element);
    myLibrary.splice(index,1);
    newBook.parentNode.removeChild(newBook);
});

  buttonsContainer.appendChild(readBook);
  buttonsContainer.appendChild(deleteBook);


  infoContainer.appendChild(title);
  infoContainer.appendChild(author);
  infoContainer.appendChild(pages);
  newBook.appendChild(infoContainer);
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
