let myLibrary = [];

//This function creates a book object with the title, author, pages, and read status
function book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
//Need to make an add book function that receives user input and stores new object into myLibrary array
function addBookToLibrary(newBook){
    return myLibrary.push(newBook);
}
//Need to write a loop function that goes through myLibrary array and displays it on website
//Need to target the book dipslay node and use DOM to change

const bookDisplay = document.querySelector('div')

console.log(bookDisplay)