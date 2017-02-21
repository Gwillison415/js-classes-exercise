var expect = require('chai').expect;

var Book = require("../booklist.js").Book;
var BookList = require("../booklist.js").BookList;

describe('Book', function () {
  var book;

  before(function(){
    book = new Book("Harry Potter and the Source Code of Doom", "Sci-Fi", "Cake the Cat", false);
  })

  it("should have title, genre, author, read, and readDate properties", function() {
    expect(book.title).to.be.a("string");
    expect(book.genre).to.be.a("string");
    expect(book.author).to.be.a("string");
    expect(book.read).to.be.a("boolean");
    expect(book.readDate).to.be.undefined;
  })

  it("Should force readDate to be blank for unread books", function() {
    var unreadBook = new Book('title', 'genre', 'author', false, new Date());
    var unreadBookTwo = new Book('title', 'genre', 'author', false);
    var unreadBookThree = new Book('title', 'genre', 'author');

    expect(unreadBook.readDate).to.equal(undefined);
    expect(unreadBookTwo.readDate).to.equal(undefined);
    expect(unreadBookThree.readDate).to.equal(undefined);
  });

  it("Should create a new date for books that are read, but do not specify a readDate", function(){
    var book = new Book('title', 'genre', 'author', true);
    expect(book.readDate).to.be.instanceOf(Date);
  });
});


describe('BookList', function () {
  var list;

  before(function () {
    list = new BookList();
  })

  it("should have an array of all the Books, called 'books'", function() {
    expect(list.books).to.be.a("array");
  });

  describe("Book.add", function() {
    var list;

    before(function () {
      list = new BookList();
    })

    it("should have an 'add()' method, that takes a Book object, and updates the state of the booklist", function() {
      list.add(new Book("Harry Potter and the Source Code of Doom", "Sci-Fi", "Cake the Cat", false));
      list.add(new Book("Androids Do Dream of Electric Sheep", "Sci-Fi", "Android Jones", false));
      list.add(new Book("Just For Fun", "Biographies", "Linus Torvalds", true));
      list.add(new Book("Copying and Pasting Without Reading It from Stack Overflow: A Lazy Programmer's Guide", "Nonfiction", "Lay Z. Programmer", false));
      expect(list.books.length).to.equal(4);
    });

    it("should keep track of the number of finished books added by the 'add()' method, with a 'readBooks' property", function() {
      expect(list.readBooks).to.equal(1);
    });

    it("should keep track of the number of unfinished books, with a 'unreadBooks' property", function() {
      expect(list.unreadBooks).to.equal(3);
    });

    it("should keep a reference to the next unread book in the list, called 'nextBook'", function(){
      expect(list.nextBook.title).to.equal("Androids Do Dream of Electric Sheep");
    });

    it("should keep a reference to the current book being read, called 'currentBook'", function() {
      expect(list.currentBook.title).to.equal("Harry Potter and the Source Code of Doom");
    });

    it("should keep a reference to the last book marked as read, called 'lastBook'", function() {
      expect(list.lastBook.title).to.equal("Just For Fun");
    });
  });

  describe("Book.finishCurrentBook", function() {
    var list, currentBook, lastBook, nextBook;

    before(function () {
      list = new BookList();
      list.add(new Book("Harry Potter and the Source Code of Doom", "Sci-Fi", "Cake the Cat", false));
      list.add(new Book("Androids Do Dream of Electric Sheep", "Sci-Fi", "Android Jones", false));
      list.add(new Book("Just For Fun", "Biographies", "Linus Torvalds", true));
      list.add(new Book("Copying and Pasting Without Reading It from Stack Overflow: A Lazy Programmer's Guide", "Nonfiction", "Lay Z. Programmer", false));
      currentBook = list.currentBook;
      lastBook = list.lastBook;
      nextBook = list.nextBook;
    })

    it("should update the currentBook reference to indicate that it has been read, and point the lastBook property to point at the currentBook property", function() {
      list.finishCurrentBook();
      expect(list.lastBook).to.equal(currentBook);
      expect(list.lastBook.read).to.be.true;
    });

    it("should update the currentBook property to point at the nextBook property", function() {
      expect(list.currentBook).to.equal(nextBook);
      expect(list.currentBook.read).to.be.false;
    })

    it("should look through the books array and find the next book that hasn't been read, but is also not currently the currentBook. It should use that book to set the nextBook property.", function() {
      expect(list.nextBook).not.to.equal(nextBook);
      expect(list.nextBook.read).to.be.false;
    })

    it("should update the read / unread counts", function() {
      expect(list.readBooks).to.equal(2);
      expect(list.unreadBooks).to.equal(2);
    })
  })

});
