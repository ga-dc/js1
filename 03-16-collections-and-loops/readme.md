# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Collections, Loops and Conditionals (3:00)

| Timing | Topic |Description|
| --- | --- | --- |
| 15 min | [Opening](#opening) | Conditional Statements |
| 20 min | [Codealong](#codealong1) | Comparison Operators |
| 15 min | [Codealong](#codealong2)| Truthy and Falsy |
| 20 min | [Codealong](#codealong3)| Boolean/Logical Operators |
| 25 min | [Lab](#practice1) | Independent Practice |
| 25 min | [Codealong & Independent Practice](#codealong4) | Switch Statements |
| 10 min | [Codealong](#codealong5) | While & Do-While |
| 15 min | [Codealong](#codealong6) | Iteration |
| 30 min | [Lab](#practice2) | Fizzbuzz Code Challenge|
| 5 min | [Conclusion](#conclusion) | Final Questions & Exit Tickets |


### Learning Objectives
*After this lesson, students will be able to:*

- Use if/else conditionals to control program flow based on boolean condition.
- Set up a loop and get some input using prompts.
- Differentiate between true, false, 'truth-y', and 'false-y'.
- Use switch conditionals to control program flow based on explicit conditions.
- Use boolean logic (!, &&, ||) to combine and manipulate conditionals.
- Create arrays and access and change values in Arrays.

### Preparation
*Before this lesson, students should already be able to:*

- Create variables in Javascript.
- Create arrays and iterate over arrays.
- Declare, assign to, and manipulate data stored in a variable.

> Note: Last class, we worked on data types, arrays, helper methods and array iterations! Check with students to make sure that everyone is comfortable with the materials covered in the last class before introducing the new material.

---

<a name="opening"></a>
## Conditional Statements (15 min)

Conditional statements are a way of essentially skipping over a block of code if it does not pass a boolean expression. JavaScript supports two conditional statements: `if`...`else` and `switch`. We'll start off by looking at the 'if'...'else' and cover switch statements later in this lesson.

#### if...else statement

`if(expr) { code }`

... means run the `code` block if `expr` is `true`

```javascript
if (1 > 0) { console.log("hi") }
//=> hi
```

When you need to test more than one case, you may use `else if`:

```javascript
var name = "kittens";
if (name === "puppies") {
  name += "!";
} else if (name === "kittens") {
  name += "!!";
} else {
  name = "!" + name;
}
name === "kittens!!"
//=> true
```

**Note**: It is **not** recommended to assign variables within a conditional expression, as that will assign a value to the variable, as seen below:

```javascript
student = "Jamie";
//=> "Jamie"
```

The expression above will return the value (as shown on the second line), so if you assign a truthy value inside a conditional statement, then this condition will always be true, or if you assign something undefined, it will make the conditional statement false (because undefined is falsy). Another potential issue with this is that it can be confused with equality(`===`). The example below is the illustration of WHAT NOT TO DO, in general:

```javascript
if (x = 3) {
    console.log("boo");
}
```

#### Ternary Operators

JavaScript has a ternary operator for conditional expressions. You can think about the ternary operator as a concise "if-else in one line":

```javascript
var age = 12;
//=> undefined

var allowed = (age > 18) ? "yes" : "no";
//=> undefined

allowed
//=> "no"
```

### Practice

Given the object below, do the following

```javascript
	var johnny = {
		favoriteFood: "spaghetti",
		age: 17
	};
```


#### Block Statements

Statements meant to be executed after a control flow operation will be grouped into what is called a **block statement**. These statements are wrapped into a pair of curly braces:

```javascript

{
  console.log("hello");
  console.log("roar");
}
```

#### Block scope

We've seen that the scope in JavaScript changes often. In the case of **block statements**, there is no scope created.

```javascript
var name = "gerry";
{
  var name = "jay";
}
console.log(name); // outputs jay
```

Only functions introduce scope in Javascript.

**Bonus** ES6 (The next version of JavaScript) introduces block scoping. Read more about it [here](http://ariya.ofilabs.com/2013/05/es6-and-block-scope.html)

---

<a name="codealong1"></a>
## Comparison Operators (20 min)

[Comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) in JavaScript can be made using `<`, `>`, `<=` and `>=`. These work for both strings and numbers. This is both useful, and can be the source of frustration for some developers, since most languages do not implicitly convert strings to numbers the way that JavaScript does.

```javascript
"A" > "a"
//=> false

"b" > "a"
//=> true

12 > "12"
//=> false

12 >= "12"
//=> true
```

#### Equality Operator `==`

Equality is a bit more complex. There are 2 ways in JavaScript to verify equality.

When verifying equality using double equal `==`, JavaScript does a lot of the "type coercion" in the background. Like we mentioned above, if the operands have a different type (i.e.: the number `1` and the string `"1"`), so JavaScript will try to change the type of both operands to check whether they are equal. This means that a lot of times, expressions will return equal more easily than if we were stricter about what things were equivalent. Some examples:

```javascript
"dog" == "dog";
//=> true

1 == true;
//=> true
```

#### Equality Operator `===`

To avoid type coercion and measure equality more strictly, **use the triple-equals operator**. Because `===` more truly measures actual equality, we'll use this far more often when checking whether two things are, in fact, the same thing.

> **Note:** "Sameness" and "equality" have various definitions and can be somewhat "fuzzy". They can also differ by programming language. Because you'll often be measuring whether two things are equal, you should investigate the way this works carefully.

Some examples:

```javascript
1 === true;
//=> false

true === true;
//=> true

"hello" === "hello"
//=> true
```

However, there are some incidents when `===` does not behave like we expect, for example when working with empty objects or arrays:

```javascript
{} === {}
//=> false

[] === []
//=> false

[1,7] === [1,7]
//=> false
```

**Explanation**

The examples in the second set fail equality tests because both **object literals** and **arrays** are objects, and not just "primitive" values like strings, numbers, and booleans. Objects and arrays are complex collections of values, and when we refer to them, we're actually referencing where they live in memory. That's why we call them "reference types," while things like strings and numbers are "value types."

What this means is that when we go to compare two objects or arrays with `===`, JavaScript doesn't care if they look like similar collections. It only compares whether or not they are the exact same object in memory. In each of the cases above, when checking for equality, we're actually comparing two objects that are in two different places in memory. They're not exactly "the same."

**Talk about memory**
All variables live in some memory address on a computer. Triple equals tells you whether or not two objects actually live in the same place

```javascript
var foo = []

foo === []
//=> false

var beep = foo

beep === foo
//=> true
```


#### != and !==

There are also `!=` and `!==` operators, which are the negative versions of `==` and `===`.

---

<a name="codealong2"></a>

## Truthy & Falsy (15 min)

All of the following become false when converted to a Boolean

- `false`
- `0`
- `""` (empty string)
- `NaN`
- `null`
- `undefined`

All other values become true when converted to a Boolean

Do not confuse the primitive boolean values `true` and `false` with the true and false values of the Boolean object. For example:

```javascript
var b = new Boolean(false);
if (b) { console.log("true") }
//=> true
```

There is a simple way of verifying the 'truthyness' or 'falsyness' of a value. When you add `!` in front of a value, the returned value will be the inverse of the value in a boolean. So if you add two `!` then you'll get the boolean value of the original one:

```javascript
!!1
//=> true

!!0
//=> false

!!-1
//=> true

!![]
//=> true

!!{}
//=> true

!!null
//=> false

!!""
//=> false
```

*More on Truthy & Falsy Values [here](http://adripofjavascript.com/blog/drips/truthy-and-falsy-values-in-javascript.html)*

---

<a name="codealong3"></a>

## Boolean & Logical Operators (20 min)

Logical operators will always return a boolean value `true` or `false`.

There are two "binary" operators that require two values:

- **AND**, denoted `&&`
- **OR**, denoted `||`

A third "unary" operator requires only one value:

* **NOT**, denoted `!`

#### && (AND)

The `&&` operator requires both left and right values to be `true` in order to return `true`:

```javascript
true && true
//=> true
```

Any other combination is false.

```javascript
true && false
//=> false

false && false
//=> false
```

#### || (OR)

The `||` operator requires just one of the left or right values to be `true` in order to return true.

```javascript
true || false
//=> true

false || true
//=> true

false || false
//=> false
```

Only `false || false` will return `false`

The `!` takes a value and returns the opposite boolean value, i.e.

```javascript
!(true)
//=> false
```

The `&&` and `||` operators use short-circuit logic, which means whether they will execute their second operand is dependent on the first. This is useful for checking for null objects before accessing their attributes:

```javascript
var name = o && o.getName();
```

In this case, if the first operand `o` is false, then the second operand `o.getName()` will not be evaluated. The expression is basically saying "we already know the whole `&&` expression is false, because `o` is falsy. Why bother dealing with the second operand?"

Or for setting default values:

```javascript
var name = otherName || o.getName();
```

In this case, if the first operand `otherName` is false, then we'll see that `"my name"` will be returned. If `otherName` is truthy (e.g. it contains a value), it will get returned, and the second expression won't even be evaluated. The expression is basically saying "we already know the whole `||` expression is true, because `o` is truthy. Why bother dealing with the second operand?"

Further reference: [Mozilla Developer Network article on Logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)


---

<a name="practice1"></a>
## Independent Practice (Verify Age) (25 min)

Often, when programming user interfaces, you will want to display results to a user based on a certain input. In this exercise you will work the students to design a program what will alert users as to what privileges - in the U.S. - they are afforded based on their age.

Write a program that outputs results based on user's age. This exercise draws on if/else statements, boolean logic, and comparison operators. See the conditions below:

- If you are under 16, you cannot do much...but got to school
- If you are 16 or older, you can drive
- If you 18 or older, you can vote
- If you are 21 or older, you can drink alcohol
- If you are 25 or older, you can rent a car
- If you are 35 or older, you can run for president
- If you are 62 or older, you can begin to receive social security benefits

Students can work in pairs to complete the exercise. Check out the solution below.

>Note: If you are outside of the U.S., feel free to adjust the conditions above to reflect the  laws in your country.

>Show some code!

---
<a name="codealong4"></a>
## Switch Statements (25 min)

Now let's go back to the other type of conditional statement we mentioned earlier in this lesson, switch statements. Switch statements can be used for multiple branches based on a number or string:

```javascript
var food = "apple";

switch(food) {
  case 'pear':
    console.log("I like pears");
    break;
  case 'apple':
    console.log("I like apples");
    break;
  default:
    console.log("No favorite");
}
//=> I like apples
```

In this case, the `switch` statement compares `food` to each of the cases (`pear` and `apple`), and evaluates the expressions beneath them if there is a match. It uses `===` to evaluate equality.

The default clause is optional.

## Switch Statement Usage

>To illustrate why one would implement a switch statement, as opposed to if/else logic, compare these two approaches with the students.

#### Part 1: Construct if/else conditionals

Create an if/else statement that returns a string such as "Awesome Job" if the user gets a grade of A or "Bad Job" if they get a "F." Console.log a string for each letter grade.

```javascript

var grade = 'C'

if (grade === 'A') {
  console.log('Awesome job')
} else if (grade === 'B') {
  console.log('Good job')
} else if (grade === 'C') {
  console.log('Okay job')
} else if (grade === 'D') {
  console.log('Not so good job')
} else if (grade === 'F') {
  console.log('Bad job')
} else {
  console.log('Unexpected grade value entered')
}

```

#### Part 2: Construct similar logic using a switch statement

Using the if...else statement from above, convert it into a switch statement.

>Ask students to do this exercise individually.

```javascript
var grade = 'C'

switch (grade) {
  case 'A':
    console.log('Awesome job')
    break
  case 'B':
    console.log('Good job')
    break
  case 'C':
    console.log('Okay job')
    break
  case 'D':
    console.log('Not so good job')
    break
  case 'F':
    console.log('Bad job')
    break
  default:
    console.log('Unexpected grade value entered')
}

```

#### Part 4: Which is faster?

>Note: Prompt students to answer which format is faster. Be sure to elaborate on the number of computations run by each of the approaches. For example, when evaluating for `grade = 'C'` using the if/else approach, the condition (`grade === 'x'`) is evaluated three times. What if the if/else statement had 10 conditions? 100? How would this impact the speed of the program? Please see ['Writing Efficient JavaScript'](http://archive.oreilly.com/pub/a/server-administration/excerpts/even-faster-websites/writing-efficient-javascript.html) for more details.

#### Part 4: Intentionally `break` the switch statement

As `break` statements play a major role in switch statements, rewrite the switch statement from Part 2 without any `break`'s:

```javascript
var grade = 'C'

switch (grade) {
  case 'A':
    console.log('Awesome job')
  case 'B':
    console.log('Good job')
  case 'C':
    console.log('Okay job')
  case 'D':
    console.log('Not so good job')
  case 'F':
    console.log('Bad job')
  default:
    console.log('Unexpected grade value entered')
}

=> Okay job
=> Not so good job
=> Bad job
=> Unexpected grade value entered
```

>Prompt the students as to what is occurring. If you are unable to generate any responses, try changing the `grade` being evaluated from `'C'` to `'B'`:

```javascript
var grade = 'B'

switch (grade) {
  case 'A':
    console.log('Awesome job')
  case 'B':
    console.log('Good job')
  case 'C':
    console.log('Okay job')
  case 'D':
    console.log('Not so good job')
  case 'F':
    console.log('Bad job')
  default:
    console.log('Unexpected grade value entered')
}

=> Good job
=> Okay job
=> Not so good job
=> Bad job
=> Unexpected grade value entered
```

>Be sure to explain the purpose of the `break` - to stop evaluating and break out of the `switch` statement after the condition has been met.

#### Part 5: Illustrate the Fall-Through technique

Often, you will want to return the same value for different cases. The fall-through technique is one way to achieve this:

```javascript
var grade = 'C'

switch (grade) {
  case 'A':
  case 'B':
  case 'C':
    console.log('You passed!')
    break
  case 'D':
  case 'F':
    console.log('You failed')
    break
  default:
    console.log('Unexpected grade value entered')
}

=> You passed!
```
---

<a name="codealong5"></a>
## While and Do-While (10 min)

`while` is a loop statement that will run **while** a condition is true.

JavaScript has `while` loops and `do-while` loops. The first is good for basic looping, but there's a possibility it will never get run. Using a `do-while` loop makes sure that the body of the loop is executed at least once, because `while()` isn't evaluated until after the block of code runs.

```javascript
while (true) {
  // an infinite loop!
}
```

This should be enough to break a browser.

```javascript
var input = 0;
do {
  console.log(input++);
} while (input < 10);
```
---
<a name="codealong6"></a>
## Iteration (15 min)

Iterating is a way of incrementally repeating a task.

#### for

You can iterate over an array with:

```javascript
var a = [1, 2, 3, 4, 5];
for (var i = 0; i < a.length; i++) {
  console.log(i);
}
```

This is slightly inefficient as you are looking up the length property once every loop. An improvement is to chain the `var` assignment:

```javascript
var a = [1, 2, 3, 4, 5];
for (var i = 0, len = a.length; i < len; i++) {
  console.log(i);
}
```

Notice the placement of the comma and semi-colons.

#### forEach

Another way of iterating over an array that was added with ECMAScript 5 is [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach):

```javascript
["dog", "cat", "hen"].forEach(function(currentValue, index, array) {
   console.log("I want a ", currentValue);
   console.log(array[index]);
});
```
---

<a name="practice2"></a>

## Fizzbuzz: Independent Practice (30 min)

Relying on your newfound knowledge of loops and if/else statements, incrementally build the common fizzbuzz loop. Fizzbuzz is a game about division. Create a program that will iterate through numbers from 1 to 101 and log each number in the console.

>Hint: Go read about [the Remainder Operator on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators) and figure out how to use it to simplify this problem.

Open the [fizzbuzz.js](starter-code/fizzbuzz.js) to get started.

>Who wants to share code?!!

---
<a name="conclusion"></a>
## Conclusion (5 min)

These are some of the foundational tools you'll use in many of your applications. You'll probably need to refresh yourself on the exact syntax a few times before you memorize it, but it's important to be able to remember these core "control flow" concepts in general, because they'll come up in pretty much every programming language you'll ever encounter.

#### Review

Make sure the lesson objectives have been met.

* Be able to explain if/else and switch statements as well as use cases.
* Differentiate between true, false, 'truth-y', and 'false-y'.

### Before Next Class
|   |   |
|---|---|
| **UPCOMING PROJECTS**  | [Project 1: Slackbot](../../projects/unit1) |

#### Further Resources
- [Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [While](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
