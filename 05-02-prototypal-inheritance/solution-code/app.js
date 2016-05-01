var farm = document.querySelector('.farm')
FarmAnimals = []

function FarmAnimal(name, animalSound, image) {
  this.name = name
  this.talk = function() {
    alert(animalSound + '!')
  }
  this.image = image
}

function Cow(name) {
  FarmAnimal.call(this, 'cow', 'moo', 'http://cdxdemo.dprm-lab.com/wp-content/uploads/2015/07/dairy_cow.jpg')
}

Cow.prototype = Object.create(FarmAnimal.prototype)

var milkCow = new Cow()

FarmAnimals.push(milkCow)

FarmAnimals.forEach(function(animal) {
  var animalElement = document.createElement('div')
  animalElement.style.backgroundImage = 'url(' + animal.image + ')'
  animalElement.classList.add('animal')
  animalElement.onclick = function() {
    animal.talk()
  }
  farm.appendChild(animalElement)
})
