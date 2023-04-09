const {getBook, addBook, numberRead, deleteBook, getBooksByRating} = require("../ReadingList/Book");

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

    addBook(book.book_1, "Dec, 2023" , 3);
    addBook(book.book_2, "Sept, 2014", 5);
    let assert = 3;

    //act
    const list = numberRead();

    //assert
    expect(list).toBe(assert);
})
//-----------------------------------------------------------------
//TEST 04
test ('Remove book from list', ()=> {
    //arrange
    let assert = [

        {
            title: "It ends with us",
            author: "Colleen Hoover ",
            length: 389,
            year: 2017,
            ReadingDate: "Dec, 2023",
            rating: 3
        },

        {
            title: "The Hobbit",
            author: "J. R. R Tolkein ",
            length: 1058,
            year: 2012,
            ReadingDate: "Sept, 2014",
            rating: 5 
        }
    ]

    let title = "the dark";
    //act
    deleteBook(title);
    let result = getBook();
    //assert
    expect(result).toStrictEqual(assert)
})

// ------------------------------------------------------------------
//TEST 05

test('Add a new book and return all books from the list', () => {
    //arrange
    let assert = [
        {
            title: "It ends with us",
            author: "Colleen Hoover ",
            length: 389,
            year: 2017,
            ReadingDate: "Dec, 2023",
            rating: 3
        },

        {
            title: "The Hobbit",
            author: "J. R. R Tolkein ",
            length: 1058,
            year: 2012,
            ReadingDate: "Sept, 2014",
            rating: 5 
        },

        {
            title: "A Dance With Dragons",
            author: "George R. R. Martin",
            length: 687,
            year: 2011,
            ReadingDate: "April, 2015",
            rating: 5   
        }
    ]

    const Book = {
        
            title: "A Dance With Dragons",
            author: "George R. R. Martin",
            length: 687,
            year: 2011
    }
    const ReadingDate = "April, 2015";
    const rating = 5; 

    //act
    addBook(Book , ReadingDate, rating);
    let result = getBook();

    //assert
    expect(result).toStrictEqual(assert)
})
//------------------------------------------------------------------
// TEST 06
test("Get book by rating", () => {
    //arrange
    const assert = [
        {
            title: "The Hobbit",
            author: "J. R. R Tolkein ",
            length: 1058,
            year: 2012,
            ReadingDate: "Sept, 2014",
            rating: 5 
        },

        {
            title: "A Dance With Dragons",
            author: "George R. R. Martin",
            length: 687,
            year: 2011,
            ReadingDate: "April, 2015",
            rating: 5 
        }
    ]
    let rating = 5;
    //act
    getBooksByRating(rating);
    const result = getBook();

    //assert
    expect(result).toEqual(assert)
})

  
