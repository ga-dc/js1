# Monkies!!

Create a `Monkey` constructor in `lib/monkey.js`, which has the following attributes:
* name - (a string)
* species - (a string)
* foodsEaten - (an array)

And the following methods:
* eat(food) - adds the food (a string) to the list of foods eaten
* introduce() - introduces self, with name, species, and what it's eaten.

## Setup

Install dependencies:
```bash
$ npm install -g jasmine-node
$ npm install
```

## Goal

Run tests using `jasmine-node spec`. Write code in your Monkey constructor to make the tests pass.

Make sure to use the Monkey prototype so that you're not creating multiple copies of the functions for your monkies!

## Bonus

Uncomment the bonus tests in `spec/monkey_spec` and make them pass.
