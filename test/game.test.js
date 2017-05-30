var expect = require('chai').expect;

var Game = require("../game.js").Game;
var Player = require("../game.js").Player;

describe('RoShamBo Players', function () {
  var grant;
  var loser;
  var game1;
  before(function () {
    grant = new Player("Grant");
    loser = new Player("Ronan");
    game1 = new Game();
    })
  it("should have wins, losses, number of rounds played and a name", function () {
    grant.hand();
    expect(grant.losses).to.be.a('number');
    expect(grant.wins).to.be.a('number');
    expect(grant.roundsPlayed).to.be.a('number');
    expect(grant.name).to.be.a("string");
    expect(grant).to.have.ownProperty('wins');
    expect(grant).to.have.ownProperty('losses');
    expect(grant).to.have.ownProperty('roundsPlayed');
    expect(grant).to.have.ownProperty('name');
    expect(grant).to.have.ownProperty('move');

  });

  // it("should play 3 rounds before the game is over", function () {
  //   expect()
  // })
  it("should be part of a class called Player", function () {
    expect(grant).to.be.an.instanceOf(Player);
    expect(loser).to.be.an.instanceOf(Player);

  });


  // INVESTIGATE THIS
  // it('Should have a function that changes the move the player is making', function () {
  //   expect(grant.hand()).to.change(grant, 'move');
  // });

  it("should have a .status() method that returns it's status as a string, including all state information, along with property names", function(){
    var status = grant.status().toLowerCase();

    //really just checks that all the names and values are in there
    expect(status).to.contain("losses");
    expect(status).to.contain("wins");
    expect(status).to.contain("rounds")
    // expect(status).to.contain(grant.name);
    expect(status).to.contain(grant.wins);
    expect(status).to.contain(grant.losses);
    expect(status).to.contain(grant.roundsPlayed);

  });

});

describe('Round of RoShamBo', function() {
var game1, grant, loser;
    before(function () {
      grant = new Player("Grant");
      loser = new Player("Ronan");
      game1 = new Game(grant, loser);
    });
    it('Should have players interact with a class called Game', function () {
        expect(game1).to.be.an.instanceOf(Game);
    });
    it('Game class should have methods to change the number of games played, play a turn and decide who wins', function () {
      expect(game1).to.respondTo("addRoundRecord");
      expect(game1).to.respondTo("turn");
      expect(game1).to.respondTo("decideWinner");
      // expect(game1).turn.to.increase(grant, 'roundsPlayed');
    });
    it("should have players and start each with zero games played", function () {
      it("should have player1, player2, with undefined loser and winner", function() {
        expect(game1.player1).to.be.a("object");
        expect(game1.player2).to.be.a("object");
        expect(game1.player1.roundsPlayed).to.equal(0);
        expect(game1.player2.roundsPlayed).to.equal(0);
    });
    })
    it("Should have a player win when their hand beats the other", function () {
       grant.odds = .70;
       loser.odds = .29;
      expect(game1.decideWinner()).to.increase(grant, 'wins');
      expect(game1.decideWinner()).to.increase(loser, 'losses');
    });


});
