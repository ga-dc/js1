function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

Dog.prototype.species = "Canis Canis";
Dog.prototype.bark = function() { return "Woof! I'm " + this.name; }

// OR Alternate form:
// The disadvantage here is that we're overwriting any existing properties on
// the prototype
Dog.prototype = {
  species: "Canis Canis",
  speak: function() { return "Woof! I'm " + this.name; }
}

// Our objects work just as they did before!
var spot = new Dog("Spot", "Beagle");
var rufus =  new Dog("Rufus", "Poodle");

spot.name // "Spot"
spot.breed // "Beagle"
spot.bark() // "Hello! I'm Spot"

rufus.name // "Rufus"
rufus.bark() // "Hello! I'm Rufus"
