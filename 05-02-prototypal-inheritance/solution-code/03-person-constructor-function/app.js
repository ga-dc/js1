function Person(initialName) {
  this.name = initialName;
  this.species = "Homo Sapiens";
  this.speak = function() {
    return "Hello! I'm " + this.name;
  };
}

var adam = new Person("Adam");
var bob =  new Person("Bob");

console.log(adam.name) // "Adam"
console.log(adam.speak()) // "Hello! I'm Adam"

console.log(bob.name) // "Bob"
console.log(bob.speak()) // "Hello! I'm Bob"
