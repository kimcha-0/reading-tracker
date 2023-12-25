// singleton Library object
const Library = (() => {

    const myLibrary = [];
    const numBooks = myLibrary.length;

    const addBook = (book) => {
        myLibrary.push(book);
        
    };

    const getBooks = () => myLibrary;

    const displayLibrary = () => {
        const bookShelf = document.querySelector('.book-shelf');
        // clear display
        bookShelf.innerHTML = '';
        for (i = 0; i < myLibrary.length; i++) {
            const bookCard = createBookCard(myLibrary[i]);
            bookShelf.appendChild(bookCard);
        }
    };

    return {
        addBook,
        numBooks,
        getBooks,
        displayLibrary,
    };
})();

const createBook = (({ title, author, pages, read }) => {
    const toggleRead = () => {
       read = !read; 
    }

    return {
        toggleRead,
        title,
        author,
        pages,
        read,
    }
});

const createBookCard = (book) => {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    const bookCardTitle = document.createElement('h1');
    const bookCardAuthor = document.createElement('p');
    const bookCardReadInput = document.createElement('input');
    bookCardReadInput.type = "checkbox";
    bookCardReadInput.value = book.read;
    bookCardReadInput.onToggle = book.toggleRead();
    bookCardTitle.textContent = `${book.title}`;
    bookCardAuthor.textContent = `${book.author}`;
    bookCard.appendChild(bookCardTitle);
    bookCard.appendChild(bookCardAuthor);
    bookCard.appendChild(bookCardReadInput);
    return bookCard;
}

const clearBookInput = () => {
    
    document.getElementById('book-title').value = "";
    document.getElementById('book-author').value = "";
    document.getElementById('book-pages').value = "";
    document.getElementById('book-read').value = "";
}

const getBookInput = () => {
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const pages = document.getElementById('book-pages').value;
    const read = document.getElementById('book-read').value;
    return { title, author, pages, read };
};

Library.displayLibrary();

const addBookBtn = document.getElementById('add-book-button');
const dialog = document.querySelector("dialog");
const openFormButton = document.querySelector(".add-book-container>button");

openFormButton.addEventListener("click", () => dialog.showModal());
addBookBtn.addEventListener("click", () => dialog.close());
addBookBtn.addEventListener("click", (e) => {
    const bookData = getBookInput();
    Library.addBook(createBook(bookData));
    Library.displayLibrary();
    e.preventDefault();
    clearBookInput();
});
