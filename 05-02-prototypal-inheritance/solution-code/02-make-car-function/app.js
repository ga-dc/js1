// Create a makeCar function
// ---
// Define a function: `makeCar()` that takes two parameters (model, color) and
// makes a new object literal for a car using those params, and returns that object.

function makeCar(model, color){
  return {
    model: model,
    color: color,
    fuel: 100,
    drive: function() {
      this.fuel--;
      return 'Vroom!';
    },
    refuel: function() {
      this.fuel = 100;
    }
  }
}
var celica = makeCar("Toy-Yoda Celica", "limegreen");
console.log(celica);
