let myLibrary = ['Hello', 'how', 'are'];

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



//Need to target the book dipslay node and use DOM to add a book to the display
//Need to create new div element to put into book display for each book
const bookDisplay = document.querySelector('div.book-display');

function makingBookDivs(array){
    for(var i = 0; i < array.length; i++){
        const addedBook = document.createElement('div');
        bookDisplay.appendChild(addedBook);
    }
}


//Need to display each index value of the array in a div
function changingEachBookDisplay(array){
    for(var i = 0; i < array.length; i++){
    const eachBook = document.querySelectorAll('.book-display > div');
    eachBook[i].textContent = array[i];
    }
}

//Need to make the contents of each book object displayable on webpage

//Need to combine the two functions to display myLibrary array
function newBookDisplay(array){
    makingBookDivs(array);
    changingEachBookDisplay(array)
}

newBookDisplay(myLibrary)