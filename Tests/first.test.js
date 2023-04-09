const {getBook, addBook, numberRead} = require("../Books/Book")

test ('Return empty list.', ()=>{

    //arrange
    let Assert = [];

    //act
    list = getBook();

    //assert
    expect(list).toEqual(Assert)
})

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