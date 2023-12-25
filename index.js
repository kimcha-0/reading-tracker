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

const createBook = ((title, author, pages, read) => {
    return {
        title,
        author,
        pages,
        read,
    }
});

const createBookCard = (book) => {
    const bookCard = document.createElement('div');
    bookCard.textContent =  `${book.title}`;
    return bookCard;
}

const getBookInput = () => {
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const pages = document.getElementById('book-author').value;
    const read = document.getElementById('book-author').value;
    return { title, author, pages, read };
};

const theHobbit = createBook("The Hobbit", "J.R.R. Tolkien", 200, "read");
const crimeAndPunishment = createBook("Crime and Punishment", "Fyodor Dosteovsky", 600, "read");
Library.addBook(theHobbit);
Library.addBook(crimeAndPunishment);
console.log(Library.getBooks());
Library.displayLibrary();
