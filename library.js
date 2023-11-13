const myLibrary = []; // All of your book objects are going to be stored in it

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}
// Write a function that loops through the array and displays each book on the page


// Add a few books to your array so you can see the display.




// Add a “NEW BOOK” button that brings up a form allowing users 
// to input the details for the new book: author, title, number of pages, whether it’s been read 
const addBookBtn = document.querySelector(".addBookBtn");
const dialog = document.querySelector("dialog");
const removeBtn = document.querySelector("remove");
const addBtn = document.querySelector("add");
// show the dialog
addBookBtn.addEventListener("click", () => {
  dialog.showModal()
});




// Add a button on each book’s display to remove the book from the library.
// You will need to associate your DOM elements with the actual book objects in some way. 
// One easy solution is giving them a data-attribute that corresponds to the index of the library array.




// Add a button on each book’s display to change its read status.
// To facilitate this you will want to create the function that toggles 
// a book’s read status on your Book prototype instance