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

function makingBookDivs(){
        const addedBook = document.createElement('div');
        bookDisplay.appendChild(addedBook);
}

function makingBookButtons(array){
    for(var i = 0; i < array.length; i++){
        const addedButton = document.createElement('button');
        const addReadButton = document.createElement('button')
        const eachBook = document.querySelectorAll('.book-display > div');
        eachBook[i].appendChild(addedButton)
        eachBook[i].appendChild(addReadButton)
        addedButton.classList.add('delete-button')
        addReadButton.classList.add('read-button')
    }
}


//Need to display each index value of the array in a div
//Need to add style to create a card shape with the book info
//Adding a button to each book display

function changingEachBookDisplay(array){
    for(var i = 0; i < array.length; i++){
    const eachBook = document.querySelectorAll('.book-display > div');
    eachBook[i].textContent = `${array[i].title} by ${array[i].author}, ${array[i].pages} pages, ${array[i].read}`;
    eachBook[i].style.cssText = 'display: flex; flex-direction: column; justify-content: center; align-items: center; margin: 5px; padding: 10px; font-size: 2rem; border-style: solid; border-color: black; border-width: 2px;';
    }
}



function changingEachButtonDisplay(array){
    for(var i = 0; i < array.length; i++){
        const eachButton = document.querySelectorAll('.delete-button');
        eachButton[i].textContent = ' Delete ';
        eachButton[i].style.cssText = 'display: flex; color: red; padding: 10px'
        eachButton[i].addEventListener('click', deleteBook);
    }
}

function changingEachReadButtonDisplay(array){
    for(var i = 0; i < array.length; i++){
        const eachButton = document.querySelectorAll('.read-button');
        eachButton[i].textContent = ' Read ';
        eachButton[i].style.cssText = 'display: flex; color: blue; padding: 10px'
        eachButton[i].addEventListener('click', changeRead);
    }
}
//Need to make the contents of each book object displayable on webpage

//Need to combine the functions to display myLibrary array
function newBookDisplay(array){
    makingBookDivs();
    changingEachBookDisplay(array);
    makingBookButtons(array);
    changingEachButtonDisplay(array);
    changingEachReadButtonDisplay(array);
}

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
    const popUpForm = document.querySelector('form');
    var newBookTitle = document.getElementById('book_title').value;
    var newBookAuthor = document.getElementById('book_author').value;
    var newBookPages = document.getElementById('book_pages').value;
    var newBookRead = document.getElementById('book_read').value;

    var newAddedBook = new book(newBookTitle, newBookAuthor, newBookPages, newBookRead);
    addBookToLibrary(newAddedBook);
    newBookDisplay(myLibrary);
    changingDataAttribute(myLibrary);
    popUpForm.reset();
    console.log(myLibrary)
    
}

submitButton.addEventListener('click', useFormMakeBook)

//Add event listener to delete button that removes the book from myLibrary
//Will add event listener to each button in the same loop for creating the buttons


function deleteBook(){
    var selectedBook = event.target.parentNode;
    var selectedBookID = selectedBook.getAttribute('data-bookID');
    myLibrary.splice(selectedBookID, 1);
    selectedBook.remove();
    changingDataAttribute(myLibrary);
    console.log(myLibrary);
}

//Need to obtain myLibrary array to access index values
//Make function that assigns a data attribute to the new book

function changingDataAttribute(array){
    const selectedDataBook = document.querySelectorAll('.book-display > div');
    for(var i = 0; i < array.length; i++){
        selectedDataBook[i].setAttribute('data-bookID', i)
    }
}

//Need to make function that changes status of book read
//Need to access the read property value for the given book
function changeRead(){
    changingDataAttribute(myLibrary);
    console.log(myLibrary)
   var selectedChangeReadBook = event.target.parentNode;
   console.log(selectedChangeReadBook)
   var selectedChangeReadBookID = selectedChangeReadBook.getAttribute('data-bookID');
   console.log(selectedChangeReadBookID)
   if(myLibrary[selectedChangeReadBookID].read == 'yes'){
    myLibrary[selectedChangeReadBookID].read = 'no';
   } else if (myLibrary[selectedChangeReadBookID].read == 'no'){
    myLibrary[selectedChangeReadBookID].read = 'yes';
   }
   changingEachBookDisplay(myLibrary);
    makingBookButtons(myLibrary);
    changingEachButtonDisplay(myLibrary);
    changingEachReadButtonDisplay(myLibrary);
}