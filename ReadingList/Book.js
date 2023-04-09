let Booklist = [];


exports.getBook = () => {
    return Booklist.filter(item => {
        if (item.isDelete !== true) {
            return `${item.title} by ${item.author}, ${item.length} pages, ${item.year} read on ${item.ReadingDate}, ${item.rating} `
        }
    })
}

exports.addBook = (Book, ReadingDate, rating) => {
    Book.ReadingDate = ReadingDate;
    Book.rating = rating;
    Booklist.push(Book)
}


exports.numberRead = () => {
    return Booklist.length;
}

exports.deleteBook = (bookTitle) => {
    Booklist.map(item => {
        if (item.title === bookTitle) {
            return item.isDelete = true;
        }
    })

};

exports.getBooksByRating = (rating) => {
    Booklist.filter(item => {
        if(item.rating !== rating){
            return item.isDelete = true;
        }
    })
}