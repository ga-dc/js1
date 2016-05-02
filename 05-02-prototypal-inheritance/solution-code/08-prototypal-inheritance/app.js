////////////////////////////////
// Animal (Parent) Class
////////////////////////////////
function Animal( name ){
  this.name = name;
}

Animal.prototype.kingdom = "Animalia";
Animal.prototype.breathe = function() {console.log("Inhale... exhale...")};


////////////////////////////////
// HELLO THIS IS DOG
////////////////////////////////
function Dog(name, breed){
  this.name = name;
  this.breed = breed;
}

// Important! Set up the link in the prototype chain connecting Dogs to Animals
Dog.prototype = new Animal();

// Add any methods / properties shared by all dogs.
Dog.prototype.bark = function(){ console.log("Woof")};
Dog.prototype.species = "Canis canis"

////////////////////////////////
// Testing our dawgs
////////////////////////////////
var spot = new Dog("Spot", "Beagle");

// from Animal prototype
spot.kingdom;
spot.breathe();

// from Dog prototype
spot.bark();
spot.species;

// from Dog properties
spot.name;
spot.breed;
