var expect = require('chai').expect;

var Cat = require("../cat.js").Cat;

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
