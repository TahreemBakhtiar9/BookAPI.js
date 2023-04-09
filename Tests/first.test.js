const {getBook, addBook, numberRead} = require("../Books/Book")

test ('Return empty list.', ()=>{

    //arrange
    let Assert = [];

    //act
    list = getBook();

    //assert
    expect(list).toEqual(Assert)
})

//test ()