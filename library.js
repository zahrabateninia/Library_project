const addBookBtn = document.querySelector(".addBookBtn");
const dialog = document.querySelector("dialog");
const removeBtn = document.querySelector("remove");
const addBtn = document.querySelector("add");
const myLibrary = []; 

function Book() {
  // the constructor...
}

// get the info about the new book
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






const newBook={
  title:bookTitle,
  author: bookAuthor,
  pages: pages,
  readStatus:readStatus
}

function addBookToLibrary() {
  
}


addBookBtn.addEventListener("click", () => {
  dialog.setAttribute("open", 'true');
});

addBtn.addEventListener('click', function(event){
  event.preventDefault;
})




