const Library = (() => {

    let numBooks = 0;
    const myLibrary = [];

    const addBook = (book) => {
        myLibrary.push(book);
        ++numBooks;
        
    };

    const removeBook = (bookId) => {
        myLibrary.splice(bookId, 1);
    }

    const getBooks = () => myLibrary;

    const displayLibrary = () => {
        const bookShelf = document.querySelector('.book-shelf');
        // clear display
        bookShelf.innerHTML = '';
        for (i = 0; i < myLibrary.length; i++) {
            const bookCard = createBookCard(myLibrary[i], i);
            bookShelf.appendChild(bookCard);
        }
    };

    return {
        addBook,
        removeBook,
        numBooks,
        getBooks,
        displayLibrary,
    };
})();

const Book = (({ title, author, pages, read }) => {

    const readStatuses = ['read', 'currently-reading', 'not-read'];
    let statusIndex = 0;
    const getStatus = () => readStatuses[statusIndex];
    const changeStatus = () => {
        statusIndex = (statusIndex + 1) % 3;
    };
    return {
        getStatus,
        changeStatus,
        title,
        author,
        pages,
        read,
    }
});

const createBookCard = (book, bookId) => {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    bookCard.id = bookId;

    const bookTitleAuthor = document.createElement('div');
    bookTitleAuthor.className = "title-author-container";

    const bookCardTitle = document.createElement('h1');
    const bookCardAuthor = document.createElement('p');
    bookCardTitle.textContent = `${book.title}`;
    bookCardAuthor.textContent = `${book.author}`;

    const readStatusBtn = document.createElement('button');
    readStatusBtn.textContent = book.read === "read" ? "read" : book.read === "currently-reading" ? "currently reading" : "not read";
    readStatusBtn.addEventListener("click", () => {
        book.changeStatus();
        book.read = book.getStatus();
        console.log(book.read);
        readStatusBtn.textContent = book.read === "read" ? "read" : book.read === "currently-reading" ? "currently reading" : "not read";
        Library.displayLibrary();
    });


    const removeBookBtn = document.createElement('button');
    removeBookBtn.textContent = 'Remove';
    removeBookBtn.addEventListener("click", () => {
        Library.removeBook(bookId);
        Library.displayLibrary();
    });

    bookTitleAuthor.appendChild(bookCardTitle);
    bookTitleAuthor.appendChild(bookCardAuthor);
    bookCard.appendChild(bookTitleAuthor);
    bookCard.appendChild(readStatusBtn);
    bookCard.appendChild(removeBookBtn);
    return bookCard;
}

const clearBookInput = () => {
    
    document.getElementById('book-title').value = "";
    document.getElementById('book-author').value = "";
    document.getElementById('book-pages').value = "";
    document.getElementById('read-status').value = "not-read";
}

const getBookInput = () => {
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const pages = document.getElementById('book-pages').value;
    const read = document.getElementById('read-status').value;
    return { title, author, pages, read };
};

Library.displayLibrary();

const dialog = document.querySelector("dialog");
const openFormButton = document.querySelector(".add-book-container>button");
const addBookBtn = document.getElementById('add-book-button');

openFormButton.addEventListener("click", () => dialog.showModal());

addBookBtn.addEventListener("click", (e) => {
    console.log(Library.getBooks());
    const bookData = getBookInput();
    console.log(bookData);
    if (bookData.title === "") {
        alert("Title must be filled out");
    } else if (bookData.author === "") {
        alert("Author must be filled out");
    } else if (bookData.pages === "") {
        alert("Pages must be filled out");
    } else {
        Library.addBook(Book(bookData));
        Library.displayLibrary();
        e.preventDefault();
        clearBookInput();
        dialog.close();
    }
});
