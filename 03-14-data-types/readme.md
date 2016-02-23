# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) JS Data Types

| Timing | Type | Topic |
| --- | --- | --- |
| 10 min | [Opening](#opening) |What is a Data Type?  |
| 15 min | [Codealong](#codealong1)  | Data Types  |
| 15 min | [Codealong](#codealong2)  | Variables and Keywords|
| 10 min | [Introduction](#introduction) | Intro to Arrays|
| 15 min | [Codealong](#codealong3)  | Working with Arrays|
| 20 min | [Codealong](#codealong4)  | Accessing Values in Arrays |
| 20 min | [Codealong](#codealong5) | Array Helper Methods |
| 20 min | [Codealong](#codealong6) | Iterating through an Array |
| 25 min | [Lab](#lab1) | Independent Practice For Arrays|
| 25 min | [Lab](#lab2) |Independent practice for Startup Generator|
| 5 min | [Conclusion](#conclusion) | Final Questions & Exit Tickets|

### Objectives
*After this lesson, students will be able to:*

- Describe the concept of a "data type" and how it relates to variables.
- Declare, assign to, and manipulate data stored in a variable.
<!-- - Write code that uses conditional statements to perform various actions. -->
- Iterate over and and manipulate values in an array.

### Preparation
*Before this lesson, students should already be able to:*

- Understand the client-server model.
- Be comfortable navigating between folders on the command line.
- Run JavaScript on the command line using Node.js and use basic variables.

>Last class, we worked on using basic commands in the terminal, writing some JavaScript and working with Git and Github. Check with students to make sure that everyone is comfortable with the materials covered in the last class.

>Take a look at some simple keyboard shortcuts to practice: [CLI Shortcuts](https://gist.github.com/alexpchin/01caa027b825d5f98871)

---
<a name="opening"></a>
## What is a Data Type? (10 min)

Let's jump into today's lesson - data types! We'll learn the basics of JavaScript and how to pass data around. When we think about building any sort of app, we want to be able to pass data around. This all starts with data types! But what are data types? In computer science and computer programming, a data type is a classification identifying one of various types of data. Using data types, we can determine 1) the possible values for that type 2) the operations that can be done on values of that type 3) the meaning of the data; and the way values of that type can be stored.

Maybe you've already encountered data types before! Data types are really similar across different languages:

| Data Type | Description | Example |
| --- | --- | --- |
| Strings | Single words or sentences, surrounded by double or single quotes | `"lots of kittens"`, `'lots of kittens'` |
| Integers | Whole numbers, with no delimiter. Can optionally have underscores to make large numbers easier to read | `42`, `1024`, `1\_000\_000` |
| Floats | Decimals, with no delimiter | `3.14`, `3.0` |
| Booleans | Represents either true or false | `true`, `false` |
| Arrays | Collections of Data | [ superman, batman, spiderman] |
| Objects | ------ | ----- |

We'll elaborate all these- except Booleans, Arrays and Objects (for now) - and talk about how they differ in JavaScript, show you how to work with each type, and then, practice what are known as helper methods to manipulate this data.

*Citation: [Wikipedia](https://en.wikipedia.org/wiki/Data_type)*

#### Working with Data in JavaScript

JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements...client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.

>Note: This would be a good place to show students examples of browser based JavaScript applications. You can pull up the [General Assembly](www.generalassemb.ly) website and take them to the interest form section. Pull up the source code to show students how client-side JavaScript works.

*Citation: [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)*

---
<a name="codealong1"></a>
## Datatypes (15 min)

For this lesson, we're going to use the Terminal and Node to run some basic scripts to understand the types of data we're working with.  Open the terminal and type in ```node```.

#### Part 1: typeof( )

The computer knows what type of data we're working with, so why don't we ask it? To know what type of data we're dealing with, we can use [`typeof()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof).  Let's try it out in the terminal with the following:

  ```javascript
  typeof(37) === 'number';
  => true

  typeof({}) === 'object';
  => true

  typeof('hi there') === 'string';
  => true

  ```
  `typeof()` returns a string with the type of the operand, or expression of the object you're looking at.

  >Note: At this point we haven't explained exactly what objects are. Give a brief overview of objects as a  collections of properties, and a property as an association between a key and a value. Objects in JavaScript are used in two ways:
    >1. As simple structured data store, similar to arrays, the main difference being that instead of accessing our values by index, we access them by a key.
    >2. As a fundamental programming paradigm that helps us structure and categorize our code.
  >More about objects in the second half of this class!

#### Part 2: Numbers

Numbers are divided into two classes or objects:

* Integers (a.k.a. "whole numbers")

  ```javascript
   ..., -1,0, 2, 3, 4, 5, ...
  ```

* Floats (or Decimal numbers)

  ```javascript
   2.718, 3.14, .5, .25, etc
  ```

All numbers in JavaScript are **"double-precision 64-bit format IEEE 754 values"** - read this as "There's really no such thing as an integer in JavaScript."  You have to be a little careful with your arithmetic if you're used to math in other programming languages. Let's take a look at what happens when we do this:

  ```javascript
  0.1 + 0.2
  => 0.30000000000000004
  ```

In JavaScript, these data points are the same **type** of object, which it calls *Numbers*, so don't be surprised when ``typeof( )`` doesn't return 'float' and 'integer.'


#### Part 3: Arithmetic Operators

Operators are used to work with data in JavaScript. The standard [arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Arithmetic_operators) - that you've been learning since grade school - are supported, including addition, subtraction, division and so forth. Check it out:

```javascript
1 + 2
=> 3

2 - 5
=> -3

5 / 2
=> 2.5

6 * 2
=> 12
```

#### Part 4: Special Number Operators

JavaScript can be a little cheap with the number of operations it allows you to do. For example, how is someone supposed to square a number or cube a number easily? Luckily there is a special `Math` object with some very useful methods.

* Taking a number to some `power`? Then just use `Math.pow`

    ```javascript
    // 3^2 becomes
    Math.pow(3,2)
    => 4
    // 2^4 becomes
    Math.pow(2,4)
    => 16
    ```
* Taking a square root

    ```javascript
    // √(4) becomes
    Math.sqrt(4)
    => 2
    ```
* Need a `random` number? Then use `Math.random`.

    ```javascript
    // The following only returns a random decimal
    Math.random()
    => .229375290430
    /**
      The following will return a
      random number between 0 and 10
    */
    Math.random()*10
    ```

* Since Numbers can be **Floats** or **Integers**, we often want to get rid of remaining decimal places, which can be done using `Math.floor`.

    ```javascript
    // Remove the decimal
    Math.floor(3.14)
    => 3
    Math.floor(3.9999)
    => 3
    ```

#### Part 5: Strings

Strings are collections of letters and symbols known as *characters*, and we use them to deal with words and text in JavaScript. Strings are just another type of **value** in Javascript.

  ```javascript
  "John"
  "Jane"
  "123"
  ```

---
<a name="codealong2"></a>
## Variables and Keywords (15 min)

Variables are used to store data types into the memory of the computer so that they can be referenced later.

#### Part 1: Always use var!

New variables in JavaScript are declared using the [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var "/en/JavaScript/Reference/Statements/var") keyword.

If you declare a variable without assigning any value to it, its type is `undefined`.

```javascript
var a;
=> undefined
```

So lets try assigning a value to variable:

```javascript
var name = "Alex";
=> undefined

name
=> "Alex"
```

Having made some expressions it becomes evident we may want to store these values.

```javascript
var myNumber = 1;
// or also

var myString = "Greetings y'all!"
```

The main note to make here is that these variables should always have the `var` keyword and use `camelCase`

#### Part 2: Assignment Operators

Values are assigned using `=`, and there are also compound assignment statements such as `+=` and `-=`:

```javascript
var x = 1;
=> 1

x += 5
=> 6
```

You can use `++` and `--` to increment and decrement by 1, respectively. These can be used as prefix or postfix operators.

In Javascript, we just discussed two types of values we can use. We call these values objects, which for now just means that in addition to storing some data, you also get to use some helpful methods when you are working with them.

* If you want to turn a number into a string you can use a helpful method called `toString`.

```javascript
(1).toString()
=> "1"
/**
  be careful though,
  since numbers can be floats
  javascript might
  misunderstand you.
*/
1.toString()
=> Float Error
// but the following works
1..toString()
```

---
<a name="introduction"></a>
## Introduction to Arrays (10 min)

You will find that strings and numbers are often not enough for most programming purposes. What is needed are collections of data that we can use efficiently, Arrays.

Arrays are great for:

* Storing data
* Enumerating data, i.e. using an index to find them
* Quickly reordering data

Arrays, ultimately, are a data structure that is similar in concept to a list. Each item in an array is called an element, and the collection can contain data of the same or different types. In JavaScript, they can dynamically grow and shrink in size.


  ```javascript
  var friends = ['Moe', 'Larry', 'Curly'];
  => ['Moe', 'Larry', 'Curly']
  ```

Items in an array are stored in sequential order, and indexed starting at `0` and ending at `length - 1`. To be clear, JavaScript starts counting at zero, so the first position in the array will be `[0]`, the second position in the array will be `[1]` and sor forth.

  ```javascript
  // First friend
  var firstFriend = friends[0];
   => 'Moe'
  // Get the last friend
  var lastFriend = friends[2]
  => 'Curly'
  ```

We can even use strings like arrays:

  ```javascript
  var friend = "bobby bottleservice";
  // pick out first character
  friend[0]
  //=> 'b'
  friend.length
  ```
---
<a name="codealong3"></a>
## Working with Arrays (15 min)

Using the JavaScript Keyword `new`, is one way of creating arrays:

#### Part 1: var new

  ```javascript
  var a = new Array();
  => undefined

  a[0] = "dog";
  => "dog"

  a[1] = "cat";
  => "cat"

  a[2] = "hen";
  => "hen"

  a
  => ["dog", "cat", "hen"]

  a.length;
  => 3
  ```

A more convenient notation is to use an array literal:

  ```javascript
  var a = ["dog", "cat", "hen"];

  a.length;
  => 3
  ```

#### Part 2: Length method

The `length` method works in an interesting way in Javascript. It is always one more than the highest index in the array.

So `array.length` isn't necessarily the number of items in the array. Consider the following:

  ```javascript
  var a = ["dog", "cat", "hen"];
  a[100] = "fox";
  a.length;
  => 101
  ```

**Remember**: the length of the array is one more than the highest index.

#### Part 3: Getting data from an array

If you query a non-existent array index, you get `undefined`:

  ```javascript
  var a = ["dog", "cat", "hen"];
  => undefined

  typeof a[90];
  => undefined
  ```
---
<a name="codealong4"></a>
## Accessing Values in Arrays (20 min)

This exercise concerns getting and setting array indices, as well as continued practice with string concatenation. Students will be populating two arrays, one with strings, the other numbers. Students will then return these strings and numbers from the arrays in order to create sentences.

#### Part 1: Creating arrays using the `new` keyword and the array literal

Create two arrays; one using the `new` keyword; the other using an array literal.

* The first array will contain __String__ data values, representing goods a student consumes.
* The second array will contain __Number__ data values, representing the quantity of the respective good they consume on a daily basis.

First array (using `new` keyword)

  ```javascript
  var goods = new Array("water", "coffee")
  ```

  Second array (array literal)
  ```javascript
  var quantity = [8, 2]
  ```

Note to the students the differences in array creation (new keyword vs array literal):

```javascript
    var a = [];        // these are the same
    b = new Array();   // a and b are arrays with length 0

    c = ['foo', 'bar'];           // these are the same
    d = new Array('foo', 'bar');  // c and d are arrays with 2 strings

    // these are different:
    e = [3];           // e.length == 1, e[0] == 3
    f = new Array(3);  // f.length == 3, f[0] == undefined
    b = new Array();   // a and b are arrays with length 0

    c = ['foo', 'bar'],           // these are the same
    d = new Array('foo', 'bar'),  // c and d are arrays with 2 strings

    ```

* Citation: [StackOverflow](http://stackoverflow.com/questions/1094723/what-is-array-literal-notation-in-javascript-and-when-should-you-use-it)


#### Part 2: Adding elements to the arrays

Add values to the one of the arrays using bracket notation, and use the `.push()` method for the other.

```javascript
goods[2] = "beer"

quantity.push(8)
```

>Note to the students the differences in adding (or setting) array values. What are the pros/cons of each approach?

#### Part 3: Accessing elements from arrays and concatenating them with strings

Now it's time to access various combinations of the two array's elements and concantenate their returned values.

```javascript
  => 'Today, I consumed ' + quantity[0] + ' cups of ' + goods[0]
  => 'I am going to have ' + quantity[1] + ' cups of ' + goods[1] + ' tonight'
```

---
<a name="codealong5"></a>
## Array Helper Methods (20 min)

Arrays come with a number of methods. Here's a list of some popular helpers:

> Note: You might want to demonstrate a few of these.

- `a.toString()` - Returns a string with the `toString()` of each element separated by commas.

- `a.pop()` - Removes and returns the last item.

- `a.push(item1, ..., itemN)` - `Push` adds one or more items to the end.

- `a.reverse()` - Reverse the array.

- `a.shift()` - Removes and returns the first item.

- `a.unshift([item])` - Prepends items to the start of the array.

Remember, though, you will never remember _every_ method.  Explore the the [full documentation for array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and other helper methods given to you for particular objects.


The goal of this exercise is for students to utilize their knowledge of array helper methods in order to decode a secret message.

#### Part 1: Array Creation and the `.push()` method

```javascript
var message = []

message.push(8)
=> 1
message.push('r', 'e', 'b', 'm', 'u')
=> 6
message.push('n', 's', 'i', 'A', 'G', 'K')
=> 12

message
=> [ 8, 'r', 'e', 'b', 'm', 'u', 'n', 's', 'i', 'A', 'G', 'K' ]

```

#### Part 2: `.pop()`, `.shift()`, and `.unshift()`

```javascript
message.pop()
=> 'K'

message.shift()
=> 8

message.unshift(1)
=> 11
```

#### Part 3: Array reversal using `.reverse()`
```javascript
message.reverse()
=> [ 'G', 'A', 'i', 's', 'n', 'u', 'm', 'b', 'e', 'r', 1 ]
```

> Note: Discuss how the `.reverse()` method mutates the array structure.

#### Part 4: Array `.join()`

The `.join()` method joins all elements of an array into a single string.

Citation: [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

__Note:__ The `.join()` method accepts an optional argument, __the separator__, which becomes a string that separates the array values. If no argument is supplied to `.join()`, the separator defaults to a comma.

```javascript
message.join()
=> 'G,A,i,s,n,u,m,b,e,r,1'

message.join(' ')
=> 'G A i s n u m b e r 1'

```
---
<a name="codealong6"></a>
## Iterating through an Array (20 min)

Iterating through the elements of an array, one at a time, is a very common practice in programming.

We can use a `for` loop to iterate over the elements of an array like this:

```javascript
var teams = ['Bruins', 'Cal Bears', 'Ravens', 'Ducks'];
for (var i = 0; i < teams.length; i++) {
	console.log(teams[i]);
}
```

How is the following code following code different from the one above?
```javascript
var teams = ['Bruins', 'Cal Bears', 'Ravens', 'Ducks'];
for (var i = 2; i < teams.length; i++) {
	console.log(teams[i]);
}
```

JavaScript arrays have several advanced _iterator methods_.

Several of these methods require a function be supplied as an argument, and the code you write in the function will be applied to _each_ item in the array, individually.

As an example, lets look at the `forEach` method that we can use instead of a `for` loop to iterate the elements:

```javascript
var teams = ['Bruins', 'Cal Bears', 'Ravens', 'Ducks'];
teams.forEach(function(el) {
    console.log(el);
});
```

This function would return:

```javascript
Bruins
Cal Bears
Ravens
Ducks
undefined
```

Notice how much clearer this syntax is than that of the `for` loop?

Here are some other iterator methods for you to research and practice with:

- `Array.every()`
- `Array.some()`
- `Array.filter()`
- `Array.map()`


#### Part 1: Evens and Odds

Create an array, `evens`, and populate it with the even numbers 2 - 10. Create an array, `odds`, and populate it with the odd numbers 1 - 9 .

```javascript
var evens = []
evens.push(2,4,6,8,10)
=> 5

var odds = []
odds.push(1,3,5,7,9)
=> 5
```

#### Part 2: Array.every( )

The `.every()` method tests whether all elements in the array pass the test implemented by the provided function. [[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)]

```javascript
evens.every(function (num) {
  return num % 2 === 0
})

=> true

evens.every(function (num) {
  return num % 4 === 0
})

=> false
```

#### Part 3: Array.some( )

The `.some()` method tests whether some element in the array passes the test implemented by the provided function. [[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)]

```javascript
evens.some(function (num) {
  return num % 4 === 0
})

=> true
```

#### Part 4: Array.filter( )

The `.filter()` method creates a new array with all elements that pass the test implemented by the provided function.
[[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)]

__Note:__ `.filter()` does not mutate the array it is acting on; while it does return a new array of filtered elements, this new array must be assigned to a new variable or returned to another function.

```javascript
evens.filter(function (num) {
  return num > 5
})
=> [6, 8, 10]

evens
=>[ 2, 4, 6, 8, 10 ]

var bigNums = evens.filter(function (num) {
  return num > 5
})
=> undefined

bigNums
=> [6, 8, 10]

var smallNums = odds.filter(function (num) {
  return num < 5
})
=> undefined
smallNums
=> [1, 3]
```

#### Part 5: Array.map( )

The `.map()` method creates a new array with the results of calling a provided function on every element in this array.
[[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)]

__Note:__ `.map()` does not mutate the array it is acting on; while it does return a new array of filtered elements, this new array must be assigned to a new variable or returned to another function.

```javascript
var timesFive = evens.map(function (num) {
  return num * 5
})
=> undefined

timesFive
=> [10, 20, 30, 40, 50]

var timesTen = odds.map(function (num) {
  return num * 10
})
=> undefined

timesTen
=> [10, 30, 50, 70, 90]
```
---
<a name="lab1"></a>
## Arrays: Independent Practice

In the [starter code](starter-code/array.js) you'll find an array.js file that will help you get some more practice in the console with arrays!

---
<a name="lab2"></a>
## Mablibs: Lab (25 min)

For this lab, you'll create your own StartUp Generator app. Open the files in the [madlib with loops folder](starter-code/madlib_with_loops). You'll learn how to use helper methods and for loops. We've given you some starter code; while we haven't covered functions and DOM manipulation yet, this is a good chance for you to challenge yourself and get a head start on these topics.

>Notes: Give students the starter code for this but this exercise should not be due until after lesson 4 on functions and scope has been completed.

---
<a name="conclusion"></a>

## Conclusion (5 min)

#### Review

Make sure the lesson objectives have been met.

* Describe use cases of different "data types".
* Why is iterating important when working with stored data?

#### Further Resources

* Feel free to read more from [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) about JavaScript fundamentals.
