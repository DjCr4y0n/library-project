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
  newBook.style.minWidth = "100px";

  var infoContainer = document.createElement("div");
  infoContainer.className = "info";
  infoContainer.style.padding = "15px";

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
  buttonsContainer.style.margin = "0px 10px 0px 10px";
  buttonsContainer.style.display = 'flex';
  buttonsContainer.style.gap = '9px';

  var readBook = document.createElement("button");
  readBook.style.border = "none";
  readBook.style.backgroundColor = "white";
  readBook.style.padding = "0px";
  var readBookIcon = document.createElement('img');
  readBookIcon.alt = "Was-Read-Icon";

  if(element.isRead == false)
  {
    readBookIcon.src = "check-circle.svg";
    readBook.addEventListener('mouseover', () =>{
      readBookIcon.style.filter = 'invert(50%) sepia(17%) saturate(4692%) hue-rotate(83deg) brightness(123%) contrast(130%)';
    });

    readBook.addEventListener('mouseout', () => {
      readBookIcon.style.filter = 'invert(0%) sepia(100%) saturate(16%) hue-rotate(274deg) brightness(100%) contrast(103%)';
    })

    newBook.style.borderLeft = "15px solid red";
  }
  else
  {
    readBookIcon.src = "x-circle.svg";
    readBook.addEventListener('mouseover', () =>{
      readBookIcon.style.filter = 'invert(12%) sepia(94%) saturate(6714%) hue-rotate(360deg) brightness(106%) contrast(112%)';
    });

    readBook.addEventListener('mouseout', () => {
      readBookIcon.style.filter = 'invert(0%) sepia(100%) saturate(16%) hue-rotate(274deg) brightness(100%) contrast(103%)';
    })

    newBook.style.borderLeft = "15px solid green";
  }
  readBook.appendChild(readBookIcon);

  readBook.addEventListener('click', function() {
    readBookIcon.style.filter = 'invert(0%) sepia(100%) saturate(16%) hue-rotate(274deg) brightness(100%) contrast(103%)';
    if(element.isRead == false)
  {
    element.isRead = true;
    readBookIcon.src = "x-circle.svg";

    readBook.addEventListener('mouseover', () =>{
      readBookIcon.style.filter = 'invert(12%) sepia(94%) saturate(6714%) hue-rotate(360deg) brightness(106%) contrast(112%)';
    });

    readBook.addEventListener('mouseout', () => {
      readBookIcon.style.filter = 'invert(0%) sepia(100%) saturate(16%) hue-rotate(274deg) brightness(100%) contrast(103%)';
    })

    newBook.style.borderLeft = "15px solid green";
  }
  else
  {
    element.isRead = false;
    readBookIcon.src = "check-circle.svg";

    readBook.addEventListener('mouseover', () =>{
      readBookIcon.style.filter = 'invert(50%) sepia(17%) saturate(4692%) hue-rotate(83deg) brightness(123%) contrast(130%)';
    });

    readBook.addEventListener('mouseout', () => {
      readBookIcon.style.filter = 'invert(0%) sepia(100%) saturate(16%) hue-rotate(274deg) brightness(100%) contrast(103%)';
    })

    newBook.style.borderLeft = "15px solid red";
  }
  });

  var deleteBook = document.createElement("button");
  var deleteBookIcon = document.createElement("img");
  deleteBookIcon.src = 'trash-2.svg'
  deleteBookIcon.alt = 'Delete-Icon'
  deleteBook.style.border = "none";
  deleteBook.style.backgroundColor = "white";
  deleteBook.addEventListener('mouseover', () =>{
    deleteBookIcon.style.filter = 'invert(12%) sepia(94%) saturate(6714%) hue-rotate(360deg) brightness(106%) contrast(112%)';
  });
  deleteBook.addEventListener('mouseout', () => {
    deleteBookIcon.style.filter = 'invert(0%) sepia(100%) saturate(16%) hue-rotate(274deg) brightness(100%) contrast(103%)';
  })
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
