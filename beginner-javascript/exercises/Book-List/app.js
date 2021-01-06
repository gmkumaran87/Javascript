// Book Constructor
function Book(name, author, isbn) {
    this.name = name;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI() {}

UI.prototype.removeBook = function(target) {
    console.log('Testing...');
};

UI.prototype.addBookList = function(book) {
    const list = document.getElementById('table-book-list');

    const row = document.createElement('tr');

    row.innerHTML = `<td> ${book.name}</td>
    <td> ${book.author}</td>
    <td> ${book.isbn}</td>
    <td> <a href="#" class="remove">X</a> </td>`;

    console.log(list);

    list.appendChild(row);
};

UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
};

UI.prototype.displayValidation = function(msg, classEl) {
    const container = document.querySelector('.container');
    const form = document.getElementById('book-list');
    const displayEl = document.createElement('h3');

    displayEl.innerHTML = `${msg}`;

    displayEl.className = `alert ${classEl}`;

    container.insertBefore(displayEl, form);

    setTimeout(function() {
        document.querySelector('.alert').remove();
    }, 3000);
};

function handleSubmit(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    const book = new Book(title, author, isbn);
    const ui = new UI();
    console.log(book);

    // Validation of entering records
    if (title.length > 0) {
        ui.addBookList(book);
        ui.displayValidation('Book has been added to the cart...! Thank you..', 'success');
    } else {
        ui.displayValidation('Kindly enter the details of book...!', 'error');
    }

    ui.clearFields();
}

// Add Event Listners
formEl = document.getElementById('book-list').addEventListener('submit', handleSubmit);

// Event Listener for removing the book
document.getElementById('table-book-list').addEventListener('click', function(e) {
    console.log(e.target);
    const ui = new UI();
    if (e.target.className === 'remove') {
        e.target.parentElement.parentElement.remove();
        ui.displayValidation('Book is deleted...!', 'success');
    }
});