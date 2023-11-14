const myLibrary = []; 

function Book(title, author, pages, readStatus){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

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
const dialog = document.querySelector("dialog");
const removeBtn = document.querySelector(".remove");
const addBtn = document.querySelector(".add");

addBookBtn.addEventListener("click", () => {
  dialog.setAttribute("open", 'true');
});

function displayCard(book){
  const booksContainer = document.querySelector('.booksContainer');
  const bookCard = document.createElement('div');
  bookCard.classList.add('bookCard');

  const title = document.createElement('h2');
  title.textContent = bookTitle;

  const author = document.createElement('p');
  author.textContent = `Author: ${bookAuthor}`;

  const pages = document.createElement('p');
  pages.textContent = `Total pages: ${pages}`;

  const readStatus = document.createElement('p');
  readStatus.textContent = readStatus;

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(readStatus);

 booksContainer.appendChild(bookCard);
}

addBtn.addEventListener("click", function(event) {

  event.preventDefault();
  // Add book to library and display book card
  const newBook = addBookToLibrary();
  displayCard(newBook);
  dialog.removeAttribute("open"); // Close the dialog after adding the book
});

// Select the form element and prevent its default submission behavior
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission
});