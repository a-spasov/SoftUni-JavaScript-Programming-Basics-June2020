function oldBooks(input) {
    let book = input.shift();
    let currentBook = input.shift();
    let checkedBooks = 0;
    while (currentBook != book) {
        if (currentBook == "No more books") {
            break;
        }
        if (input.length == 0) {
            break;
        }
        checkedBooks++;
        currentBook = input.shift();
    }
    if (currentBook == book) {
        console.log(`You checked ${checkedBooks} books and found it.`);
    } else {
        console.log("The book you search is not here!");
        console.log(`You checked ${checkedBooks} books.`);
    }
}
oldBooks();
