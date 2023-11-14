const addBookBtn = document.querySelector(".addBookBtn");
const dialog = document.querySelector("dialog");
const removeBtn = document.querySelector("remove");
const addBtn = document.querySelector("add");
const myLibrary = []; 

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}


addBookBtn.addEventListener("click", () => {
  dialog.setAttribute("open", 'true');
});

addBtn.addEventListener('click', function(event){
  event.preventDefault;
})
// get the info about the new book
const bookTitle = document.getElementById("bookTitle").value;
const bookAuthor = document.getElementById("bookAuthor").value;
const pages = document.getElementById("pages").value;
const haveRead = document.getElementById("haveRead").checked;
const notRead = document.getElementById("notRead").checked;




