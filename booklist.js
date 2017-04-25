// class Book {
//   constructor(title, genre, author, read, readDate = undefined) {
//     this.title =title;
//     this.genre = genre;
//     this.author = author;
//     this.read = read;
//     this.readDate = new Date();
//   }

class Book {
  constructor(title, genre, author, read, readDate) {
    this.title =title;
    this.genre = genre;
    this.author = author;
    this.read = read;
    this.readDate;

    if(this.read) {
      this.readDate = new Date(Date.now())
    };
  }
};

class BookList {
  constructor(){
      this.readBooks = 0;
      this.unreadBooks =0;
      this.nextBook ={};
      this.previousBook ={};
      this.currentBook ={};
      this.books =[];
    }

}; // replace this with a BookList class

BookList.prototype.add = function (book) {
    this.books.push(book);
    if (book.read) {
      this.readBooks++;
    } else {
      this.unreadBooks++;
    }
    if (this.currentBook.length < 1 ) {
      this.currentBook.push(book);
    } else if (this.nextBook.length < 1 && !this.read) {
      this.nextBook.push(book);
      //Object.keys(this.nextBook).length <= 1
    }
};
class ClassName {
  constructor() {

  }
}

module.exports = {
  Book: Book,
  BookList: BookList
}
