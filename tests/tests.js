var expect = require('chai').expect;

var Cat = require("../cat.js").Cat;
var Book = require("../booklist.js").Book;
var BookList = require("../booklist.js").BookList;

describe('Cat',function () {
  var kitty;
  before(function () {
    kitty = new Cat();
  });

  it("should have tiredness, hunger, loneliness, and happiness properties", function () {
    expect(kitty.tiredness).to.be.a('number');
    expect(kitty.hunger).to.be.a('number');
    expect(kitty.loneliness).to.be.a('number');
    expect(kitty.happiness).to.be.a('number');
  });

  it("should have a feed method, which decreases hunger and increases happiness", function () {
    var hunger = kitty.hunger;
    var happiness = kitty.happiness;

    kitty.feed();

    expect(kitty.hunger).to.be.below(hunger);
    expect(kitty.happiness).to.be.above(happiness);
  });
  it("should have a feed method that accepts an argument (a number), which decreases hunger by an arbitrary amount", function(){
    var hunger = kitty.hunger;
    var happiness = kitty.happiness;

    kitty.feed(5);

    expect(kitty.hunger).to.equal(hunger - 5);
    expect(kitty.happiness).to.be.above(happiness);
  })

  it("should have a pet method, which decreases loneliness and increases happiness", function () {
    var loneliness = kitty.loneliness;
    var happiness = kitty.happiness;

    kitty.pet();

    expect(kitty.loneliness).to.be.below(loneliness);
    expect(kitty.happiness).to.be.above(happiness);
  });
  it("should have a pet method that accepts an argument (a number), which decreases loneliness by an arbitrary amount", function(){
    var loneliness = kitty.loneliness;
    var happiness = kitty.happiness;

    kitty.pet(5);

    expect(kitty.loneliness).to.equal(loneliness - 5);
    expect(kitty.happiness).to.be.above(happiness);
  })

  it("should have a sleep method, which decreases tiredness and increases happiness", function () {
    var tiredness = kitty.tiredness;
    var happiness = kitty.happiness;

    kitty.sleep();

    expect(kitty.tiredness).to.be.below(tiredness);
    expect(kitty.happiness).to.be.above(happiness);
  });
  it("should have a sleep method that accepts an argument (a number), which decreases tiredness by an arbitrary amount", function(){
    var tiredness = kitty.tiredness;
    var happiness = kitty.happiness;

    kitty.sleep(5);

    expect(kitty.tiredness).to.equal(tiredness - 5);
    expect(kitty.happiness).to.be.above(happiness);
  })

  it("should have a .status() method that returns it's status as a string, including all state information, along with property names", function(){
    var status = kitty.status().toLowerCase();

    //really just checks that all the names and values are in there
    expect(status).to.contain("loneliness");
    expect(status).to.contain("tiredness");
    expect(status).to.contain("hunger");
    expect(status).to.contain("happiness");

    expect(status).to.contain(kitty.loneliness);
    expect(status).to.contain(kitty.tiredness);
    expect(status).to.contain(kitty.hunger);
    expect(status).to.contain(kitty.happiness);
  });

});

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

  it("should have an 'add()' method, that takes a Book object, and updates the state of the booklist", function() {
    list.add(new Book("Harry Potter and the Source Code of Doom", "Sci-Fi", "Cake the Cat", false));
    list.add(new Book("Androids Do Dream of Electric Sheep", "Sci-Fi", "Android Jones", false));
    list.add(new Book("Just For Fun", "Biographies", "Linus Torvalds", true));
    list.add(new Book("Copying and Pasting Without Reading It from Stack Overflow: A Lazy Programmer's Guide", "Nonfiction", "Lay Z. Programmer", false));

    expect(list.books.length).to.equal(4);

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
      expect(list.lastbook.title).to.equal("Just For Fun");
    });
  });

  it("should have a '.finishCurrentBook()' method", function() {
    var currentBook = list.currentBook;
    var lastBook = list.lastBook;
    var nextBook = list.nextBook;
    list.finishCurrentBook();
    it("should update the currentBook reference to indicate that it has been read, and point the lastBook property to point at the currentBook property", function() {
      expect(list.lastBook).to.be(currentBook);
      expect(list.lastBook.read).to.be(true);
    });

    it("should update the currentBook property to point at the nextBook property", function() {
      expect(list.currentBook).to.be(nextBook);
      expect(list.currentBook.read).to.be(false);
    })

    it("should look through the books array and find the next book that hasn't been read, but is also not currently the currentBook. It should use that book to set the nextBook property.", function() {
      expect(list.nextBook).not.to.be(nextBook);
      expect(list.nextBook.read).to.be(false);
    })

    it("should update the read / unread counts", function() {
      expect(list.readBooks).to.be(2);
      expect(list.unreadBooks).to.be(2);
    })
  })

});
