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

const harryPotter = new book('Harry Potter', 'J.K. Rowling', 1000, 'read');

addBookToLibrary(harryPotter);

console.log(myLibrary);