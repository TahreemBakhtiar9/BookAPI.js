let Booklist = [];


exports.getBook = () => {
    return Booklist
}

exports.addBook = (Book, ReadingDate, rating)=>{
    Book.ReadingDate = ReadingDate;
    Book.rating = rating;
    Booklist.push({Book})    
}


exports.numberRead = () => {
    return Booklist.length;
}

exports.addBooks = (book, bookInfo) => {
    Booklist.push({...book, bookInfo});
}

exports.deleteBook = (bookTitle) => {
    Booklist.map(item => {
        if(item.title === bookTitle){
            return item.isDelete = true;
        }
    })
    //Booklist.filter(Booklist => Booklist.Book.title === title);
}