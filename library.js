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

export default { Library };
