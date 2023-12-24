const Library = () => {
    const myLibrary = [];
    
    
    const addBook = (book) => {
        myLibrary.push(book);
    }

    return {
        addBook,
    }
};

export { Library };
