// Update the constructor function for our car to define the methods on prototypes
// rather than on the individual instances themselves.

function Car(model, color){
  this.model = model;
  this.color = color;
}

Car.prototype.fuel = 100;

Car.prototype.drive = function(){
  this.fuel--;
  return 'Vroom!';
}

Car.prototype.refuel = function(){
  this.fuel = 100;
}

var celica = new Car("Celica","lemonchiffon")
celica.drive()
console.log(celica)
