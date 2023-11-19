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
    pages.style.opacity = ".6";
  } else{
    pages.textContent = `Pages: ${book.pages}`;
  }
  pages.style.color = "black";
  pages.style.fontSize = "1.3rem";


  const readStatus = document.createElement('p');
  readStatus.textContent = book.readStatus;
  readStatus.style.color = "black";
  readStatus.style.fontSize = "1.3rem";

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(readStatus);

  return bookCard;
}
function displayCard(book){
  const booksContainer = document.querySelector('.booksContainer');
  const bookCard = makeBookCard(book);
  booksContainer.appendChild(bookCard);
}

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