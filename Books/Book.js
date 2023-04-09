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