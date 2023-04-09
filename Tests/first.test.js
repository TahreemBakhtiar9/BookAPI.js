const {getBook, addBook, numberRead, addBooks} = require("../ReadingList/Book");

// TEST #01:
test ('Return empty list.', ()=>{

    //arrange
    let Assert = [];

    //act
    list = getBook();

    //assert
    expect(list).toEqual(Assert)
})
//--------------------------------------------------------------------
// TEST #02
test ('Add a Book to the list', ()=>{
    //arrange
    const Book = {
        title: "the dark",
        author: "john",
        length: 2909,
        year: 2022
    }
    const ReadingDate = "July, 2043";
    const rating = 4;
    addBook(Book,ReadingDate,rating)
    let assert = 1
    //act
    const list = numberRead();
    //assert
    expect(list).toBe(assert);
})
//--------------------------------------------------------------------
//TEST #03
test('Add multiple Books to the list', ()=>{
    const book = {
        book_1: {
            title: "It ends with us",
            author: "Colleen Hoover ",
            length: 389,
            year: 2017
        },
        book_2: {
            title: "The Hobbit",
            author: "J. R. R Tolkein ",
            length: 1058,
            year: 2012
        }
    }

    const bookInfo = {
        book_1info: {
            ReadingDate: "Dec, 2023",
            rating: 4.5
        },
        book_2info: {
            ReadingDate: "Sept, 2014",
            rating: 5
        }
    }

    addBooks(book.book_1, book.book_1info);
    addBooks(book.book_2, book.book_2info);
    let assert = 3;

    //act
    const list = numberRead();

    //assert
    expect(list).toBe(assert);
})