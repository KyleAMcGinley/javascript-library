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

const harryPotter = new book('Harry Potter', 'J.K. Rowling', 1000, 'yes');
addBookToLibrary(harryPotter);

const lordOfTheRings = new book('Lord of the Rings', 'Tolkein', 2000, 'no');
addBookToLibrary(lordOfTheRings);

const theHobbit = new book('The Hobbit', 'Tolkein', 500, 'no');
addBookToLibrary(theHobbit);


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
//Need to add style to create a card shape with the book info
function changingEachBookDisplay(array){
    for(var i = 0; i < array.length; i++){
    const eachBook = document.querySelectorAll('.book-display > div');
    eachBook[i].textContent = array[i].title + ' by ' + array[i].author + ', ' + array[i].pages + ' pages, ' + array[i].read;
    eachBook[i].style.cssText = 'display: flex; flex-direction: column; justify-content: center; align-items: center; margin: 5px; padding: 10px; font-size: 2rem; border-style: solid; border-color: black; border-width: 2px;';
    }
}

//Need to make the contents of each book object displayable on webpage

//Need to combine the two functions to display myLibrary array
function newBookDisplay(array){
    makingBookDivs(array);
    changingEachBookDisplay(array)
}

newBookDisplay(myLibrary)

//Need to use DOM manipulation to add a form into html when a button is clicked
const newBookButton = document.querySelector('.new-book-button');

const popUpForm = document.querySelector('form');

function showingForm(){
    popUpForm.style.display = 'flex';
}

newBookButton.addEventListener('click', showingForm);

//Need to use the inputted values into the create new book function

//Need to select the submit button node. Will add event function on submit that will store the input values and add the book
const submitButton = document.getElementById('submit-button');

function useFormMakeBook(){
    var newBookTitle = document.getElementById('book_title').value;
    console.log(newBookTitle)
    
}

submitButton.addEventListener('submit', useFormMakeBook)