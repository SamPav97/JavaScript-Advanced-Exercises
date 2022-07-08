class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook (bookName, bookAuthor) {
        if (this.books.length == this.capacity) {
            throw new Error("Not enough space in the collection.");
        }

        this.books.push({bookName, bookAuthor, payed: false});

        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName) {
        let searcehdBook = this.books.find(a => a.bookName == bookName);

        if (searcehdBook == undefined) {
           throw new Error(`${bookName} is not in the collection.`)
        }
        if (searcehdBook.payed == true) {
            throw new Error(`${bookName} has already been paid.`)
        }
        searcehdBook.payed = true;
        return `${bookName} has been successfully paid.`
    }

    removeBook(bookName) {
        let searcehdBook = this.books.find(a => a.bookName == bookName);

        if (searcehdBook == undefined) {
            throw new Error("The book, you're looking for, is not found.")
        }
        if (searcehdBook.payed == false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }

        let remove = this.books.indexOf(searcehdBook);
        this.books.splice(remove, 1)
        return `${bookName} remove from the collection.`
    }

    getStatistics(bookAuthor) {
        if(bookAuthor == undefined) {
            let lstStrings = [];
            let res = `The book collection has ${this.capacity - this.books.length} empty spots left.\n`;

            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));

            for (const book of this.books) {
                lstStrings.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`)
            }
            res += lstStrings.join('\n');

            return res
        } else {
            let bookNeeded = this.books.find(a => a.bookAuthor == bookAuthor);

            if (bookNeeded == undefined) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
            return `${bookNeeded.bookName} == ${bookNeeded.bookAuthor} - ${bookNeeded.payed ? 'Has Paid' : 'Not Paid'}.`
        }


    }
}

const library = new LibraryCollection(2)
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.getStatistics('Miguel de Cervantes'));

