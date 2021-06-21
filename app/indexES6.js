console.log("Using ES6 classes");
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;

    }

}
class Display  {
    add(book) {
        console.log("add is started");
        let tablebody = document.getElementById('tablebody');


        let uiString = `<tr>
                       
           <td>#</td>
           <td>${book.name}</td>
           <td>${book.author}</td>
           <td>${book.type}</td>
         </tr>
         `
        tablebody.innerHTML = tablebody.innerHTML + uiString;

    }
    clear() {
        let myForm = document.getElementById('myForm');
        myForm.reset();
    }
    validate(book) {
        if (book.name.length > 3 || book.author.length > 3) {
            return true;
        }
        else {
            return false;
        }
    }
    show(type, displayMessage, color) {

        let message = document.getElementById('message');


        message.innerHTML = `<div class="alert alert-${color} alert-dismissible fade show" role="alert">
                                <strong>${type.toUpperCase()}:</strong> ${displayMessage}
                                 <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                </button>
                        </div>`
        setTimeout(function () {
            message.innerHTML = "";
        }, 2000);
    }

}
let myForm = document.getElementById('myForm');

myForm.addEventListener('submit', submitLibraryForm);

function submitLibraryForm(e) {
    console.log('you have submitted your form successfully.');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let type;
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    let book = new Book(name, author, type);
    console.log(book);
    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Your book has been added successfully', 'success');

    }
    else {
        display.show('error', 'The no of characters is less than required Please Submit it again by adding more than 3 charcters in name and same in author.', 'danger');
    }
    e.preventDefault();

}
