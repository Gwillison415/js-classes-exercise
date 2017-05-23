class Player {
  constructor(playerName) {
    this.player = playerName;
    this.wins = 0;
    this.losses = 0;
    this.roundsPlayed = 0;
    //this.move = undefined;
  }
  move() {
    this.odds = Math.random(Math.random());
    console.log(this.odds);
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
  status(){
    console.log(`${this.player} has ${this.wins} wins and ${this.losses} losses`);
    return `${this.player} has ${this.wins} wins and ${this.losses} losses`;
  }
}

class Game {
  constructor(p1, p2) {
    this.player1 = p1;
    this.player2 = p2;

  }
  addRoundRecord(){
    this.player1.roundsPlayed++;
    this.player2.roundsPlayed++;
  }
  decideWinner() {
    if (this.player1.wins > this.player2.wins) {
      console.log(`${this.player1} wins the game with ${this.player1.wins} wins!`);
    } else {
      console.log(`${this.player2} wins the game with ${this.player2.wins} wins!`);
    }
  }
  turn() {
    if (this.player2.move  == this.player1.move ) {
      console.log('tie game, no points awarded');
      addRoundRecord();
    } else if (this.player2.beats === this.player1.move) {
      this.player2.wins++;
      this.player1.losses++;
      addRoundRecord();
      console.log(`${this.player2} wins`);
    } else if (this.player1.beats = this.player2.move) {
      this.player1.wins++;
      this.player2.losses++;
      console.log(`${this.player1} wins`);
      addRoundRecord();
    }
    if (this.player1.roundsPlayed > 2) {
      decideWinner(this.player1, this.player2);
    }

  }

}



function bestOf3(player1, player2) {
  let grant = new Player(player1);
  let loser = new Player(player2);
  let game1 =new Game(grant.move(), loser.move());
  console.log(grant.status(), loser.status());
  game1.turn();
  console.log(game1);
}

console.log(bestOf3("gMoney", "ronan"));

module.exports = {
  Game: Game,
  Player: Player
}
