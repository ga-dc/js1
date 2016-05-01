// don't forget to use module.exports to export your resulting Monkey constructor!

var Monkey = function(name,species){
  this.name = name;
  this.species = species;
}
Monkey.prototype.foodsEaten = [];
Monkey.prototype.eat = function(food){
  this.foodsEaten.push(food);
}
Monkey.prototype.introduce = function(){
  return "Hello! My name is " + this.name + " and I am a " + this.species + ". I have eaten " + this.foodsEaten.join(", ")
}
module.exports = Monkey
