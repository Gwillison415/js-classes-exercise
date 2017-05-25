class Player {
  constructor(playerName) {
    this.name = playerName;
    this.wins = 0;
    this.losses = 0;
    this.roundsPlayed = 0;
    //this.move = undefined;
  }
  hand() {
    //randomize odds of picking any hand gesture
    //this.odds = Math.random(Math.random()).toFixed(2);
    // console.log(this.odds);
    if (this.odds >= .67) {
      this.move = 'rock';
      this.beats = 'scissors';

    } else if (this.odds >= .33 && this.odds <= .66) {
      this.move = 'paper';
      this.beats ='rock';

    } else {
      this.move = 'scissors';
      this.beats = 'paper';
    }
  }
  //console.log(this.player.move);
  status(){
    //console.log(`${this.player} has ${this.wins} wins and ${this.losses} losses`);
    return `${this.player} has ${this.wins} wins and ${this.losses} losses`;
  }
}

class Game {
  constructor(p1, p2) {
    this.player1 = p1;
    this.player2 = p2;
    // console.log(this.player1, this.player2);
  }

  addRoundRecord(){
    this.player1.roundsPlayed++;
    this.player2.roundsPlayed++;
  }
  decideWinner() {
    if (this.player1.wins > this.player2.wins) {
      // console.log(`${this.player1} wins the game with ${this.player1.wins} wins!`);
      return this.player1.name + `wins the game with ${this.player1.wins} wins!`;
    } else if (this.player1.wins == this.player2.wins) {
        return 'its a tie game!';
    }else if (this.player2.wins > this.player1.wins){
      // console.log(`${this.player2} wins the game with ${this.player2.wins} wins!`);
      return this.player2.name + `wins the game with ${this.player2.wins} wins!`
    } else {
      return "something went wrong with your game if no tie or win is recorded, this isn\'t very fun";
    }
  }
  turn() {
    if (this.player2.move === this.player1.move ) {
      // console.log('tie game, no points awarded');
      this.addRoundRecord();
    } else if (this.player2.beats === this.player1.move) {
      this.player2.wins++;
      this.player1.losses++;
      this.addRoundRecord();
      // console.log(this.player2, `wins`);
    } else if (this.player1.beats = this.player2.move) {
      this.player1.wins++;
      this.player2.losses++;
      // console.log(this.player1, `wins`);
      this.addRoundRecord();
    }
    if (this.player1.roundsPlayed > 2) {
      this.decideWinner(this.player1.name, this.player2.name);
    }

  }

}


// let grant = new Player("gWilli");
// let loser = new Player("rFitz");
// grant.odds = .30;
// loser.odds = .65;
// let game2 =new Game(grant, loser);
// game2.turn(grant.move(), loser.move());
// console.log(game2);

function bestOf3(player1, player2) {
  let grant = new Player(player1);
  let loser = new Player(player2);
  var game = new Game(grant, loser);
  for (var i = 1; i < 4; i++) {

    console.log(grant);
    game.turn(grant.hand(), loser.hand());
    // console.log(grant.status(), loser.status());
  }
  //let game3 =new Game(grant, loser);
 //game3.turn(grant.move(), loser.move());

}

console.log(bestOf3("gMoney", "ronan"));

module.exports = {
  Game: Game,
  Player: Player
}
