// Modify the below code to create a closure.

function makePerson( fullName, currentAge ){
  var person = {
    getName: function(){

    },
    getAge: function(){

    },
    greet: function(){
      return "Hello! My name is " + "???";
    }
  };
  return person;
}

var bob = makePerson( "Bob", 45 ); //5
console.log(bob.getName())
console.log(bob.getAge())
console.log(bob.greet())

// Bonus!
//
// Create a setName method. Add a conditional to only update the name if the
// input is a string