const myLibrary = []; 

function Book(title, author, pages, readStatus){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
};

function addBookToLibrary(){
    const bookTitle = document.getElementById("bookTitle").value;
    const bookAuthor = document.getElementById("bookAuthor").value;
    const pages = document.getElementById("pages").value;
    const radios = document.querySelectorAll('input[name="readStatus"]');
    let readStatus = ''; 
    radios.forEach(function(radio) {
      if (radio.checked) {
        readStatus = radio.value;
      }
    });
    const newBook = new Book(bookTitle, bookAuthor, pages, readStatus);
    myLibrary.push(newBook);
    return newBook;
};


const addBookBtn = document.querySelector(".addBookBtn");
const discardBtn = document.querySelector(".discard");
const dialog = document.querySelector("dialog");
const removeBtn = document.querySelector(".remove");
const addBtn = document.querySelector("dialog .add");

addBookBtn.addEventListener("click", () => {
  dialog.setAttribute("open", 'true');
});

function makeBookCard(book){
  const bookCard = document.createElement('div');
  bookCard.classList.add('bookCard');

  bookCard.style.cssText = `
  background-color: rgb(212, 163, 115);
  display: flex;
  flex-direction: column; 
  gap: 1rem;"
  padding :1rem;
  width: 6rem;

  `;

  const title = document.createElement('h2');
  title.textContent = book.title;
  title.style.color = "white";
  title.style.paddingBottom = "1.3rem";
  title.style.fontSize = "2.5rem"

  const author = document.createElement('p');
  author.textContent = `By ${book.author}`;
  author.style.color = "black";
  author.style.fontSize = "1.3rem";

  const pages = document.createElement('p');
  if (!book.pages){
    pages.textContent = `Pages not included`;
  } else{
    pages.textContent = `Pages: ${book.pages}`;
  }
  pages.style.color = "black";
  pages.style.fontSize = "1.3rem";


  const readStatus = document.createElement('p');
  readStatus.textContent = book.readStatus;
  readStatus.style.color = "black";
  readStatus.style.fontSize = "1.3rem";

  // delete and read buttons
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add('deleteBtn');
  const statusBtn = document.createElement("button");
  statusBtn.classList.add('statusBtn');
  deleteBtn.textContent = "delete";
  deleteBtn.style.backgroundColor = '#FF4500';
  statusBtn.textContent = "read";

  const buttonsContainer = document.createElement("div");
  buttonsContainer.style.display = "flex";
  buttonsContainer.style.gap = "1rem";
  buttonsContainer.style.justifyContent = "center";
  buttonsContainer.appendChild(deleteBtn);
  buttonsContainer.appendChild(statusBtn);

  deleteBtn.addEventListener("click", ()=>{
    deleteBookCard(book);
  })

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(readStatus);
  bookCard.appendChild(buttonsContainer);

  return bookCard;
};

function deleteBookCard(book){
  const index = myLibrary.indexOf(book);
  if (index !== -1){ // if the index was valid
    // remove it form the library array
    myLibrary.splice(index, 1);
    // remove it form the UI
    const bookCards = document.querySelectorAll(".bookCard");
    bookCards.forEach( (card) => {
      if (card.textContent.includes(book.title) && card.textContent.includes(book.author)){
        card.remove();
      }
    })
  }

};

function displayCard(book){
  const booksContainer = document.querySelector('.booksContainer');
  const bookCard = makeBookCard(book);
  booksContainer.appendChild(bookCard);
};

addBtn.addEventListener("click", function(event) {
  // Retrieve values from form fields
  const bookTitle = document.getElementById("bookTitle").value;
  const bookAuthor = document.getElementById("bookAuthor").value;

  // Validate the form fields
  if (!bookTitle || !bookAuthor) {
    alert('Please enter both title and author of the book.');
    return;
  }

  event.preventDefault();
  // Add book to library and display book card
  const newBook = addBookToLibrary();
  displayCard(newBook);
  dialog.removeAttribute("open");
});

discardBtn.addEventListener('click', function(event){
  event.preventDefault();
  dialog.removeAttribute("open");
})

// Select the form element and prevent its default submission behavior
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission
});
