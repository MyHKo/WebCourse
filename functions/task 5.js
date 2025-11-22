class Book {
    #name;
    getNumberOfPages() {}
    setNumberOfPages(numberOfPages) {
        this.getNumberOfPages = () => {return numberOfPages;};
    }
    constructor(numberOfPages, name) {
        this.name = name;
        this.setNumberOfPages(numberOfPages);
    }
}

class Library {
    books;

    constructor(books) {
        this.books = books;
    }
}
