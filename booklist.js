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
    this.read = read; //boolean has been read ?
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
      this.nextBook;
      this.lastBook;
      this.currentBook;
      this.books =[];
    }

}; // replace this with a BookList class

BookList.prototype.add = function (book) {
    this.books.push(book);
    if (book.read) {
      this.readBooks++;
      this.lastBook = book;
    } else {
      this.unreadBooks++;
      //this.nextBook = book;
      if (this.currentBook === undefined) {
        this.currentBook = book;
      }  else if (this.nextBook === undefined) {
        this.nextBook = book;
      }
    }

};
BookList.prototype.finishCurrentBook = function (){
    this.readBooks++;
    this.unreadBooks--;
    this.currentBook.read = true;
    this.currentBook.realDate = new Date(Date.now());
    this.lastBook = this.currentBook;
    this.currentBook = this.nextBook;

    var unreadBooks = this.books.filter((book) => !book.read && book !== this.currentBook)
    this.nextBook = unreadBooks[0];
};


module.exports = {
  Book: Book,
  BookList: BookList
};
