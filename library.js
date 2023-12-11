const myLibrary = [];

class Book {
  constructor(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
  }

  static makeBookCard(book) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');
    bookCard.style.cssText = `
      background-color: rgb(212, 163, 115);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1rem;
      padding: 1rem;
      padding-top: 2rem;
      width: 6rem;
    `;

    bookCard.appendChild(Book.createTitle(book));
    bookCard.appendChild(Book.createAuthor(book));
    bookCard.appendChild(Book.createPages(book));

    const deleteBtn = Book.createDeleteButton(book);
    const statusBtn = Book.createStatusButton(book);

    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.display = 'flex';
    buttonsContainer.style.gap = '1.5rem';
    buttonsContainer.style.justifyContent = 'center';
    buttonsContainer.appendChild(deleteBtn);
    buttonsContainer.appendChild(statusBtn);

    deleteBtn.addEventListener('click', () => {
      Book.deleteBookCard(book);
    });

    statusBtn.addEventListener('click', function (event) {
      Book.changeReadStatus(event);
    });

    bookCard.appendChild(buttonsContainer);

    return bookCard;
  }

  static deleteBookCard(book) {
    const index = myLibrary.indexOf(book);
    if (index !== -1) {
      myLibrary.splice(index, 1);

      const deleteButton = document.querySelector(
        `.deleteBtn[data-title="${book.title}"][data-author="${book.author}"]`
      );
      if (deleteButton) {
        const bookCard = deleteButton.closest('.bookCard');
        if (bookCard) {
          bookCard.remove();
        }
      }
    }
  }

  static changeReadStatus(event) {
    const statusBtn = event.target;
    if (statusBtn.textContent === 'Read') {
      statusBtn.textContent = 'Not read';
    } else {
      statusBtn.textContent = 'Read';
    }
  }

  static displayCard(book) {
    const booksContainer = document.querySelector('.booksContainer');
    const bookCard = Book.makeBookCard(book);
    booksContainer.appendChild(bookCard);
  }

  static createTitle(book) {
    const title = document.createElement('h2');
    title.textContent = book.title;
    title.style.color = 'white';
    title.style.textShadow = '1px 1px 3px rgba(0, 0, 0, 0.6)';
    title.style.letterSpacing = '1px';
    title.style.paddingBottom = '1.3rem';
    title.style.fontSize = '2.5rem';
    return title;
  }

  static createAuthor(book) {
    const author = document.createElement('p');
    author.textContent = `By ${book.author}`;
    author.style.color = 'black';
    author.style.fontSize = '1.3rem';
    return author;
  }

  static createPages(book) {
    const pages = document.createElement('p');
    if (!book.pages) {
      pages.textContent = `Pages not included`;
    } else {
      pages.textContent = `Pages: ${book.pages}`;
    }
    pages.style.color = 'black';
    pages.style.fontSize = '1.3rem';
    return pages;
  }

  static createDeleteButton(book) {
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.backgroundColor = '#FF4500';
    deleteBtn.setAttribute('data-title', book.title);
    deleteBtn.setAttribute('data-author', book.author);
    return deleteBtn;
  }

  static createStatusButton(book) {
    const statusBtn = document.createElement('button');
    statusBtn.classList.add('statusBtn');
    if (book.readStatus === 'Read') {
      statusBtn.textContent = 'Read';
    } else {
      statusBtn.textContent = 'Not read';
    }
    statusBtn.setAttribute('data-status', book.readStatus);
    return statusBtn;
  }
};

const addBookBtn = document.querySelector('.addBookBtn');
const discardBtn = document.querySelector('.discard');
const dialog = document.querySelector('dialog');
const removeBtn = document.querySelector('.remove');
const addBtn = document.querySelector('dialog .add');

addBookBtn.addEventListener('click', () => {
  dialog.setAttribute('open', 'true');
  const form = document.querySelector('form');
  form.reset();
});

addBtn.addEventListener('click', function (event) {
  const bookTitle = document.getElementById('bookTitle').value;
  const bookAuthor = document.getElementById('bookAuthor').value;
  if (!bookTitle || !bookAuthor) {
    alert('Please enter both title and author of the book.');
    return;
  }
  event.preventDefault();
  const newBook = addBookToLibrary();
  Book.displayCard(newBook);
  dialog.removeAttribute('open');
});

discardBtn.addEventListener('click', function (event) {
  event.preventDefault();
  dialog.removeAttribute('open');
});

const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
});

function addBookToLibrary() {
  const bookTitle = document.getElementById('bookTitle').value;
  const bookAuthor = document.getElementById('bookAuthor').value;
  const pages = document.getElementById('pages').value;
  const radios = document.querySelectorAll('input[name="readStatus"]');
  let readStatus = '';
  radios.forEach(function (radio) {
    if (radio.checked) {
      readStatus = radio.value;
    }
  });
  const newBook = new Book(bookTitle, bookAuthor, pages, readStatus);
  myLibrary.push(newBook);
  return newBook;
}
