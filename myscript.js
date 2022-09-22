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
//Adding a button to each book display
const buttonForEachBookDisplay = document.createElement('button')

function changingEachBookDisplay(array){
    for(var i = 0; i < array.length; i++){
    const eachBook = document.querySelectorAll('.book-display > div');
    eachBook[i].textContent = array[i].title + ' by ' + array[i].author + ', ' + array[i].pages + ' pages, ' + array[i].read;
    eachBook[i].appendChild(buttonForEachBookDisplay);
    buttonForEachBookDisplay.textContent = 'Delete'
    buttonForEachBookDisplay.style.cssText = 'display: flex; padding: 10px; font-weight: bold; position: relative; bottom: -150px; color: red;'
    buttonForEachBookDisplay.classList.add('delete-button')
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
    var newBookAuthor = document.getElementById('book_author').value;
    var newBookPages = document.getElementById('book_pages').value;
    var newBookRead = document.getElementById('book_read').value;

    var newAddedBook = new book(newBookTitle, newBookAuthor, newBookPages, newBookRead);
    addBookToLibrary(newAddedBook);
    newBookDisplay(myLibrary);
    
}

submitButton.addEventListener('click', useFormMakeBook)

//Add event listener to delete button that removes the book from myLibrary
//Need to use loop to apply the delete function to each delete button

const allDeleteButtons = document.querySelectorAll('.delete-button')
console.log(allDeleteButtons)

function assigningEventButtons(listener, event){

    for(var i = 0; i < allDeleteButtons.length; i++){
        allDeleteButtons[i].addEventListener(listener, event);
    }
}

function deleteBook(event){
    const deletedBook = event.target.parentNode;
    deletedBook.remove()

}

assigningEventButtons('click', deleteBook)