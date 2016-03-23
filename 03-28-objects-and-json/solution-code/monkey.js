// Create a constructor function that makes a monkey
function Monkey(name, species) {
  this.name       = name;
  this.species    = species;
  this.foodsEaten = [];
  this.eatSomething = function(food) {
    this.foodsEaten.push(food);
  }
  this.introduce = function() {
    console.log("My name is "+ this.name +". I come from the "+ this.species + " family. I have eaten "+ this.foodsEaten.join(", ") + ".");
  }
}

var monkey1 = new Monkey("Jack", "Howler");
monkey1.eatSomething("banana");
monkey1.introduce();

var monkey2 = new Monkey("James", "Pygmy Marmoset");
monkey2.eatSomething("peach");
monkey2.eatSomething("plum");
monkey2.introduce();

var monkey3 = new Monkey("James", "Squirrel Monkey");
monkey3.eatSomething("pineapple");
monkey3.introduce();

// Getting properties using the dot syntax / bracket syntax
console.log(monkey1.name);
console.log(monkey1["name"]);
