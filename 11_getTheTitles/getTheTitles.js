const getTheTitles = function(books) {
    const filtedBooks = books.map((book) => {
        return book.title
    });

    return filtedBooks;
};

// Do not edit below this line
module.exports = getTheTitles;
