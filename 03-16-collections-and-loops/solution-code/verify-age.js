

var age = 25

if (age < 16) {
  console.log('You can go to school!')
} else if (age >= 16 && age < 18) {
  console.log('You can drive!')
} else if (age >= 18 && age < 21) {
  console.log('You can vote!')
} else if (age >= 21 && age < 25) {
  console.log('You can drink alcohol!')
} else if (age >= 25 && age < 35) {
  console.log('You can rent a car!')
} else if (age >= 35 && age < 62) {
  console.log('You can run for president!')
} else if (age >= 62) {
  console.log('You can collect social security!')
} else {
  console.log('Please enter a correct age value')
}