test ('booklist should be empty while starting for the first time.', ()=>{

    //arrange
    let bookList;
    let Assert = 0;

    //act
    bookList = new bookList();

    //assert
    expect(bookList.getBook().length).toBe(Assert)
})