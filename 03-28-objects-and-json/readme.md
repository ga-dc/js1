# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Objects and JSON (3:00)

| Timing | Type | Topic |
| --- | --- | --- |
| 10 min |[Opening](#opening) | Introduction to Objects |
| 30 min |[Codealong](#codealong1) | Object Properties |
| 30 min |[Discussion/Independent Practice](#discussion)  | Real World Scenarios & Objects |
| 30 min |[Codealong](#codealong2)  | Coding Our Objects |
| 25 min |[Lab](#lab1) | Monkey Exercise  |
| 20 min |[Introduction](#introduction1)  | Introduction to JSON  |
| 30 min |[Lab](#lab2) | JSON: Independent Practice |
| 5 min |[Conclusion](#conclusion) | Final Questions & Exit Tickets |


### Objectives
*After this lesson, students will be able to:*

- Identify likely objects, attributes, and methods in real-world scenarios
- Write a constructor for a JavaScript object
- Write a prototype method for a JavaScript object
- Implement and interface with JSON data

### Preparation
*Before this lesson, students should already be able to:*

- Understand fundamental data types
- Execute functions and understand scope
- Use control flow to manage the flow of information in our programs

>Note: Last class, we worked on creating and returning values from functions, global and local scopes! Check with students to make sure that everyone is comfortable with the materials covered in the last class.

---
<a name = "opening"></a>

## Objects: Introduction (10 minutes)
So far we have learned about fairly simple data types. We have learned to store data in arrays that allow us to associate values in an ordered list. However, as our applications grow to be more complex, we will increasingly need more structure in our code. Objects allow us to do just that in JavaScript. Objects are collections of properties, and a property is an association between a key and a value. Objects in JavaScript are used in two ways:
1. As simple structured data store, similar to arrays, the main difference being that instead of accessing our values by index, we access them by a key.
2. As a fundamental programming paradigm that helps us structure and categorize our code.

---

<a name = "codealong1"></a>

## Object Properties (30 minutes)
An object is an associative array, also known as a hash or a dictionary in other languages. It stores key-value pairs, and unlike arrays, is not ordered. Object properties are variables attached to a specific object.

There are two ways to create objects:

```js
  var myHouse = {};

  var myCar = new Object();

  // We can also create objects populated with data
  var myMotorcycle = {
    wheels: 2,
    color: "blue",
    maxSpeed: 300,
    owners: ["Tedi", "Ena"]
  }
```

We can get and set object properties with either dot notation or square brackets and parenthesis.

**Setting object properties:**
```js
  // We can set object properties via the key in dot notation (more common for simple scenarios)
  myHouse.windows = 6;
  myHouse.address = "Tedi Manor, Gotham City";

  // We can also set object properties via square brackets with the key as a string.
  // We use the square bracket notation when a property name has either a special character
  // like a space or a hyphen, or when the property name starts with a number.
  // This notation is also used when our property names are dynamically determined
  myCar["num-of-wheels"] = 4;
  myCar["doors"] = 2;
```

**We access object properties the same way as setting them:**
```js
  myHouse.windows; //returns 6
  myHouse.address; // returns "Tedi Manor, Gotham City";

  myCar["num-of-wheels"]; // returns 4;

  var numDoors = "doors";
  myCar[numDoors]; // returns 2;
```

We have the ability to iterate through all enumerable properties of objects. This is however a costly operation in performance, that should not be abused;

```js
  for (var i in myHouse) {
    if (myHouse.hasOwnProperty(i)) { // The "hasOwnProperty method returns true if an object property has a certain key"
        console.log(i + " = " + myHouse[i] + "\n");
    }
  }
```

Copying an object into another one does not duplicate the object, but rather references it.

```js
  var yourHouse = myHouse;
  yourHouse.doors; // returns 2
  myHouse.doors; // returns 2

  yourHouse.doors = 4;
  myHouse.doors; // returns 4
```

---
<a name = "discussion"></a>

## Real World Scenarios & Objects: Discussion/Independent Practice (30 min)
We have so far learned how to just store data in object properties. However objects in JavaScript are extremely powerful and allow us to program in a certain paradigm called object oriented programming (OOP). One of the most useful and powerful approaches for breaking down larger problems into smaller, simpler problems involves considering the world and our code model of it in terms of a collection of objects interacting with each other. If we consider everything in terms of objects, we have a powerful tool for organizing our code and our thoughts.


#### Breaking Down a Real-World Scenario

Ask the students to consider a couple of real-world scenarios, like this one:

> A user, browsing on a shopping website, searches for size 12 sneakers,
> and examines several pairs before purchasing one.

We start by identifying the nouns and noun phrases: some are going to be objects. There are also implicit nouns here: even though it's not mentioned, there's likely to be a shopping cart object.

And when we consider the verbs in the scenario, we will find that some of them are associated with particular nouns, and those are excellent candidates for methods. Also consider verbs implicit in the scenario.

>*Note: Explain to students that an object is a similar thing, represented by a set of data -- its attributes -- that has functions associated with it to do certain things -- its methods. We have so far worked with objects as associative arrays, however we haven't used some of the superpowers we are given for JavaScript objects such as methods (object functions) and prototype.*


#### Try it for yourself!

With a parter or small group, consider one or two of the following scenarios.  Identify likely objects, attributes, and methods in each scenario.  Remember to consider implicit objects as well as explicit ones.

>Note: Ask students to write down likely objects, attributes and methods.

- Reporting software analyzes the snow removal performance of each snow plow driver in the city.

- A simulation predicts the behavior of the MBTA if ridership increases by 20%.

- A user is required to watch video training sessions as part of a recertification process and answer questions about them.

- A user on a cooking website enters the number of dinner guests, and the cooking website adjusts all the recipes accordingly.

- A user who had reserved a Zipcar arrives to find it has not been returned yet, and customer service transfers her reservation to an available car.

- A computer game allows the user to take the role of a unit commander or general at Gettysburg and simulates the battle based on his or her commands.

- A user searches for her reservation on a hotel website, and changes the arrival date and room type.

---
<a name = "codealong2"></a>

## Coding Our Objects (30 min)
By convention, the way to create an object is with a function called a constructor. This is really a JavaScript function like any other, but when you call it in a particular way JavaScript does some magic under the hood for you.

```js
  var Person = function () {};
```

**The object**
We're familiar with the new Object() syntax from our first example today. We create an instance of our "Person" class in a similar way.

```js
  var clark = new Person();
  var bruce = new Person();
```

**The constructor** is called at the moment that our new object is instantiated. The constructor is most often used to set the object's properties or to call methods for the object to use.

```js
  var Superhero = function () {
    console.log('Superhero instance created');
  };

  var clark = new Superhero(); // console logs "Superhero instance created"
  var bruce = new Superhero(); // console logs "Superhero instance created"
```

We have so far worked with **object properties**. However we have been setting these property names by hand every time we create an object. The point of our objects/classes is to create blueprints of our data models, so when we create a new instance, we wouldn't need to reset all the keys, but just change particular properties. **Properties can be set in the constructor, so they are set specifically for each instance. This simply means that we pass them as parameters in our constructor function.**

While working with objects, we will run to the keyword **this** quite often. We will cover **this** in much more detail later on in the unit, however it's important to understand in the context of our objects that **this** refers to the current object instance.

```js
  var Superhero = function (firstName, superheroName) {
    // Important to understand here that the object properties firstName and superheroName
    // are set through the this keyword with the value passed through the constructor function
    this.firstName = firstName;
    this.superheroName = superheroName;
    console.log('Superhero instantiated');
  };

  var superman = new Superhero('Clark', 'Superman');
  console.log(superman.firstNAme + ' is ' + superman.superheroName);
```

**Methods** are functions grouped together in our objects. We can call our object methods the same way we call our object properties through the dot notation, with the main difference being that we add () at the end of our statement. To define a method, we assign a function to the named property of the class's prototype property.

```js
  Superhero.prototype.identity = function() {
    console.log(this.firstName + ' is ' +this.superheroName);
  }

  var superman = new Person('Clark', 'Superman');
  superman.identity();
```

Whoa.  Where did `prototype` come from?

Every object in JavaScript has a prototype, connected to the constructor that created it.  If `foo` is an object, and you ask JavaScript to invoke the method `foo.doSomething()`, JavaScript looks first to see if the object has a property called doSomething that contains a function.  If it does, JavaScript invokes that function.  If not, JavaScript looks for the prototype object on its constructor and sees if that object has an appropriate method.

## Useful Idea: Restricting Access to Attributes

Much of the time, attributes can only reasonably contain certain values.  For instance, an attribute containing a person's age in years should never contain a negative number, and will rarely contain a number over 100.  By convention, all changes to attributes are done by *accessor functions*, like this:

```js
// Example 3

Person.prototype.setAge = function (newAge) {
  if (newAge < 0) {
    console.error("A person cannot be negative years old!");
  }
  else if (newAge > 150) {
    console.error("People do not generally live to the age of 150");
  }
  else {
    this.age = newAge;
  }
};

Person.prototype.age = function () {
  return this.age;
};
```

---
<a name = "lab1"></a>
## Monkey Exercise (25 minutes)

Open the [monkey.js file](starter-code/monkey.js) in the starter code.

Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes for retrieving properties (dot notation and brackets).

---
## Working with Object Properties: Bonus!

Work individually or with a partner and follow instructions in the [app.js](starter-code/objects/app.js) file to complete the challenge!

---
<a name = "introduction1"></a>

### Introduction to JSON (15 min)
[JSON](http://json.org/) (JavaScript Object Notation) is a lightweight text-based data format that's based on JavaScript (specifically, a subset of Standard ECMA-262 3rd Edition - December 1999). Because it's text, and it looks like JavaScript, JSON is simultaneously both easy for humans to read and write AND easy for programs to parse and generate.

> JSON is completely language-independent, but it uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data-interchange language.

We use JSON objects to transfer data between applications and Javascript. To keep everything consistent, all JSON code must follow a number of strict conventions (_stricter even than normal JavaScript!_) in order to be syntactically correct. For instance:

- Property names must be double-quoted strings.
- Trailing commas are forbidden.
- Leading zeroes are prohibited.
- In numbers, a decimal point must be followed by at least one digit.
- Most characters are allowed in strings; however, certain characters (such as `'`, `"`, `\`, and newline/tab) must be 'escaped' with a preceding backslash (`\`) in order to be read as characters (as opposed to JSON control code).
- All strings must be double-quoted.
- No comments!

---
<a name = "lab2"></a>

## JSON: Independent Practice (30 min)

Work individually or with a partner and follow instructions in the [app.js](starter-code/json/app.js) file.

---

<a name = "conclusion"></a>

## Conclusion (5 mins)
They are the center of OOP; unlike other languages, JavaScript uses a classless system. Objects not only give us more superpowers for storing and manipulating our data, they help us better structure our code. JSON will also be an important structure from this point on. All of the data we'll be working with from APIs will be in the form of JSON.

Make sure the lesson objectives have been met.

* Be able to code objects using constructors and prototypes.
* Understand how JSON transfers data between programs.

### Before Next Class
|   |   |
|---|---|
| **UPCOMING PROJECTS**  | [Project 1: [Slackbot](../../projects/unit1) |

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
