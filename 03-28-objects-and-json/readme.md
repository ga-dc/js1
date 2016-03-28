# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Objects and JSON (3:00)

## Submitting Project 1

Please submit your first project by creating an issue here: https://github.com/ga-dc/js1/issues/new

Include your name and link to your code.

### Objectives

- Explain how objects are defined as data structures
- Create objects using object literal syntax.
- Practice interacting with properties of literal objects.
- Explain nested data structures.
- Explain the difference between object properties and methods.
- Write an object method.

---
<a name = "opening"></a>

## Objects: Introduction (10 minutes)
So far we have learned about fairly simple data types. We have learned to store 
data in arrays that allow us to associate values in an ordered list. However,
as our applications grow to be more complex, we will increasingly need more
structure in our code. Objects allow us to do just that in JavaScript. Objects
are collections of properties, and a property is an association between a key
and a value. Objects in JavaScript are used in two ways:

1. As simple structured data store, similar to arrays, the main difference
being that instead of accessing our values by index, we access them by a key.
2. As a fundamental programming paradigm that helps us structure and categorize 
our code.

>What kinds of things in the world are grouped by key-value pairs?

---

<a name = "codealong1"></a>

## Object Properties (30 minutes)
An object is an associative array, also known as a hash or a dictionary in
other languages. It stores key-value pairs, and unlike arrays, is not ordered.
Object properties are variables attached to a specific object.

```js
// We can also create objects populated with data
var myMotorcycle = {
  "num-wheels": 2,
  color: "blue",
  maxSpeed: 300,
  owners: ["Tedi", "Ena"]
}
```

We can get and set object properties with either dot notation or square brackets
and parenthesis.

**Accessing object properties:**
```js

myMotorcycle.color // returns "blue"
myMotorcycle["num-wheels"] // returns 2

var speed = "maxSpeed";
myMotorcycle[speed] // returns 300

```

**Setting object properties:**
```js
  // We can set object properties via the key in dot notation (more common for
  simple scenarios)
  myMotorcycle.color = "red";

  // We can also set object properties via square brackets with the key as a string.
  // We use the square bracket notation when a property name has either a special character
  // like a space or a hyphen, or when the property name starts with a number.
  // This notation is also used when our property names are dynamically determined
  myMotorcycle["speed"] = 120;
  myMotorcylce["num-wheels"] = 3;
```

**Removing object properties:**

```js
delete myMotorcycle.owners
```

We have the ability to iterate through all enumerable properties of objects.

```js
  for (var key in myMotorcycle) {
    console.log(key + " = " + myMotorcycle[key] + "\n");
  }
```

## You do:

Create a variable named `gaStudent` and assign it to an object literal.

1. Give your student at least three properties.
1. One must have a key that contains a hyphen.
1. Update two properties, one of which is the hyphenated key.
1. Give your student a new property using dot or bracket notation.
1. Delete one attribute.
1. Iterate through and print out all of the student's key-value pairs.


## Nested Collections

Object properties aren't limited to simple data types. We can also nest collections inside of collections.

```js
var car = {
  make: "Honda",
  model: "Civic",
  year: 1997,

  // An array within an object.
  gears: ["Reverse", "Neutral", "1", "2", "3", "4"],

  // An object within an object.
  engine: {
    horsepower: "6 horses",
    pistons: 12,
    fast: true,
    furious: false
  }
}
```

> Q: In the above example, how do we access...

1. "Neutral"
1. "6 horses"

## You do: The Reading List

Keep track of which books you read and which books you want to read!

Create an array of objects, where each object describes a book and has
properties for the title (a string), author (a string), and alreadyRead (a
boolean indicating if you read it yet).

Iterate through the array of books. For each book, log the book title and book
author like so: "The Hobbit by J.R.R. Tolkien".

Now use an if/else statement to change the output depending on whether you read 
it yet or not. If you read it, log a string like 'You already read "The Hobbit" 
by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The
Lord of the Rings" by J.R.R. Tolkien.'

## Introduction to JSON (15 min)

[JSON](http://json.org/) (JavaScript Object Notation) is a lightweight
text-based data format that's based on JavaScript (specifically, a subset of
Standard ECMA-262 3rd Edition - December 1999). Because it's text, and it looks 
like JavaScript, JSON is simultaneously both easy for humans to read and write
AND easy for programs to parse and generate.

> JSON is completely language-independent, but it uses conventions that are
familiar to programmers of the C-family of languages, including C, C++, C#,
Java, JavaScript, Perl, Python, and many others. These properties make JSON an
ideal data-interchange language.

We use JSON objects to transfer data between applications and Javascript. To
keep everything consistent, all JSON code must follow a number of strict
conventions (_stricter even than normal JavaScript!_) in order to be
syntactically correct. For instance:

- Property names must be double-quoted strings.
- Trailing commas are forbidden.
- Leading zeroes are prohibited.
- In numbers, a decimal point must be followed by at least one digit.
- Most characters are allowed in strings; however, certain characters (such as `'`, `"`, `\`, and newline/tab) must be 'escaped' with a preceding backslash (`\`) in order to be read as characters (as opposed to JSON control code).
- All strings must be double-quoted.
- No comments!

## You do: Big Ole Twitter Object

Fork and clone this repository: https://github.com/ga-wdi-exercises/big_ole_twitter_object

```
$ git clone https://github.com/ga-wdi-exercises/big_ole_twitter_object
$ cd big_ole_twitter_object
$ open index.html
$ atom scripts/app.js
```

Modify the `console.log(tweet)` to access the information in the JSON object and answer the question.


## Methods

Methods are functions that are attached to some object.

```js
// Our car now has a drive method...
var car = {
  make: "Honda",
  model: "Civic",
  color: "red",
  drive: function(){
    console.log("vroom vroom");
  },

  // Methods can take arguments
  gps: function( location ){
    console.log( "Beep boop, driving to " + location );
  },
  paint: function( newColor ){
    console.log( "Your car has been painted " + newColor );
    car.color = newColor;
  }
}

// We can run the car's two methods like so...
car.drive();
car.paint( "blue" );
console.log( "Car color is: " + car.color );
```

With methods as part of our Javascript toolbox, we now have a cool interface
with which we can interact with our objects.

- Why would custom methods be a preferred way to modify object properties vs.
using object literal notation?

We've only scratched the surface for objects. We're going to dive much deeper
into them later on in the course.

>If you're looking for a sneak peak into the power of objects and functions, we
recommend reading [The Secret Life of JS Objects chapter in Eloquent JS](http://eloquentjavascript.net/06_object.html)

### Additional Exercise

- https://github.com/ga-wdi-exercises/js-calculator


#### Additional JavaScript Object Resources

- [MDN: Working with objects][1]
- [MDN: Introduction to Object-Oriented JavaScript][2]
- [JavaScript Tutorial: Objects][3]

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
[3]: http://javascript.info/tutorial/objects


#### Additional JSON Resources

- [JSONLint][1]
- [JSON on Wikipedia][2]

[1]: http://jsonlint.com/
[2]: http://en.wikipedia.org/wiki/JSON
