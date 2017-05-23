//
// class Cat {
//   constructor(name, age) {
//     this.name =name;
//     this.age = age;
//   }
// }
//es5
let Cat = function() {
  // name, age
  // this.name =name;
  // this.age = age;
  this.tiredness = 0;
  this.hunger = 0;
  this.loneliness = 0;
  this.happiness = 0;



};
//single fn def shared amoungst all instances
Cat.prototype.feed = function(quantity = 1){
      this.happiness += 1;
      this.hunger -= quantity;
  //return this.happiness, this.hunger;
};

Cat.prototype.status = function () {
      //return `the happiness of the cat is ${this.happiness} while loneliness is ${this.loneliness}, fortunately tiredness is reported as ${this.tiredness}, and kitty is ${this.hunger} hunger`;
        return `Cat status: tiredness = ${this.tiredness}, hunger = ${this.hunger}, loneliness = ${this.loneliness}, and happiness = ${this.happiness}.`
};

Cat.prototype.pet = function (minutes = 1) {
    var fickle = Math.round(Math.random())
   // BONUS   -----------------------------------commented out----------------------------
    // if (fickle === 1) {
      this.loneliness -= minutes;
      this.happiness += (1.5 * minutes);
    // } else {
    //   console.log("YYOOOOwwwwLLLLL");
    // }
};
Cat.prototype.sleep = function (hours = 1) {
    this.tiredness -= hours;
    this.happiness += hours;

};
// Cat should have a .status() method that returns it's status as a string,
// including all state information, along with property names:
module.exports = {
  Cat: Cat
}

// var joey = new Cat('joey', 5);
// joey.feed(2, 2);
// console.log(joey.tiredness, joey.hunger);
