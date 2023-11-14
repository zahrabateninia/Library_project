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
      radio.addEventListener('change', function() {
        if (this.checked) {
          readStatus = this.value;
        }
      });
    });
    const newBook = new Book(bookTitle, bookAuthor, pages, readStatus);
    myLibrary.push(newBook);
    return newBook;
}



const addBookBtn = document.querySelector(".addBookBtn");
const dialog = document.querySelector("dialog");
const removeBtn = document.querySelector("remove");
const addBtn = document.querySelector("add");

addBookBtn.addEventListener("click", () => {
  dialog.setAttribute("open", 'true');
});

addBtn.addEventListener('click', function(event){
  event.preventDefault;
})

// Creating a new card with the book information
const newBookCard = document.createElement('div');
newBookCard.classList.add("bookCard"); // add bookCard class for css style

// function createAndAppendElement(parent, elementType, textContent) {
//   const element = document.createElement(elementType);
//   element.textContent = textContent;
//   parent.appendChild(element);
//   return element;
// }
// createAndAppendElement(newBookCard, "h2", bookTitle);
// createAndAppendElement(newBookCard, "p", `Author: ${bookAuthor}`);
// createAndAppendElement(newBookCard, "p", pages);
// createAndAppendElement(newBookCard, "p", readStatus);

// bookContainer.appendChild(newBookCard);
