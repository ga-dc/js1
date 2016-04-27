# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Closures and This (3:00)

![magic](https://media.giphy.com/media/CK6Izn4LCSy0E/giphy.gif)

### Objectives


- Understand and explain Javascript context.
- Understand and explain closures.
- Implement the module pattern in their code.

---

## Introduction to Closures and Context (5 min)

Today we are going to talk about a couple features of Javascript that make it
unique from other languages, _closures_ and _context_. Now, closures and context
are definitely used in many languages other than Javascript, but it is the way
Javascript handles these two concepts that makes them unique. Context and
closures are often thought of as the most hard to grasp concepts of JS, but we
will break down this lesson covering them one topic at a time, followed by
enough independent practice and brainteasers to give you a mastery of them.
Let's get cracking!

---

## A Review of Scope (10 mins)

As we have learned from Unit 1, Javascript implements a concept of scope. If
you don't fully remember, scope is synonymous with variable access, meaning,
the scope of our executed code will dictate which variables we have access to
and can ultimately use at the time of execution. The two types of scope we've
touched on were global and local.

>Note: Review scope diagram

Global scope:

```js
var a = 1

function foo() {
  console.log(a)
}

foo() // 1
```

If you declare a variable _outside_ of a function it becomes globally scoped
meaning it can be accessed from anywhere within the file. In the example above,
`foo()` logs the value for the global variable `a`.

Local scope:

```js
function bar() {
  var b = 'local value'
  console.log(b)
}

bar() // 'local value'

console.log(b) // b is not defined
```

Variables declared _inside_ of a function are given a local scope and can only
be accessed from within the function they were declared. This is why when we run
`bar()` our log of `b` gives us `'local value'` but when we try to access `b`
in the global scope we get `b is not defined`.

---

## Closures (30 mins)

This is all fine and dandy, and we are now masters of global and local scopes,
but naturally, a new question arises, how does scope work for functions within
functions? This type of scope is known as lexical scope, more commonly referred
to as _closure_.

> You can nest a function within a function. The nested (inner) function is
private to its containing (outer) function. It also forms a closure. A closure
is an expression (typically a function) that can have free variables together
with an environment that binds those variables (that "closes" the expression).

> Since a nested function is a closure, this means that a nested function can
"inherit" the arguments and variables of its containing function. In other
words, the inner function contains the scope of the outer function. - MDN

In other words, closure is a function within a function that exists alongside
declared variables. These variables help to create an environment for the inner
function and because of lexical scope, the inner function is able to remember
this environment, retaining state and scope even after it executes.

This can best be explained with an example:

```js
function printMessage() {
  var message = 'hello johnny';
  setTimeout(function onSetTimeout() {
    console.log(message);
  }, 1000);
}

printMessage();
```

In this example we have two functions, one that is immediately invoked
and a `setTimeout` callback function (onSetTimeout). The structure of these two functions forms a closure giving our inner function (onSetTimeout), _state_. The state in this case is a reference to `message` and when 1 second has passed, we print the message declared in our outer function.

There are two key takeaways here. The first being:

**Closures have access to the outer function’s variable even after the outer
function returns**

Even though our outer function has been executed and returned, our inner
function is still able to call upon the variables declared by the outer function
at any future time in the program!

To further prove this point, we could update the code to look like:

```js
function printMessage() {
  var message = 'hello johnny';
  setTimeout(function onSetTimeout() {
    console.log(message);
  }, 1000);
  return 'gonna do it';
}

var response = printMessage();
console.log(response);
```

Notice we _immediately_ return the outer function (printMessage) and print the response. The response prints on the console immediately - _proving_ the outer function has returned (finished executing). But 1 second later, the inner function still prints the correct message. This is because the inner function "remembers" the outer function's scope and can _always_ reference it.


The second takeaway is:

**Closures store references to the outer function’s variables**

Closures do **not** store the actual value, but rather a **reference** to it.

Take a look at the following example to help further explain:

```js
function createUser() {
  var userId = 999

  return {
    getUserId: function() {
      return userId
    },
    setUserId: function(newId) {
      userId = newId
    }
  }
}

var user = createUser()
console.log( user.getUserId() ) // 999
user.setUserId(555) // Changes the outer function's variable
console.log( user.getUserId() ) // 555; returns the updated userId variable
```

Here we have a function `user` that sets a variable `userId` and returns an
object full of methods. The first method, `getUserId`, returns `userId`, and
the second method, `setUserId`, allows you to set the `userId` with an argument.
As expected, when we call `user.getUserId()` we are returned with the value of
`999`. Then when we call `user.setUserId(555)` the outer function's variable
value is set to the given argument, `555`. Consequently, the `userId`'s
reference has been updated and now when we call `.getUserId()` we are returned
with the updated **reference** to the variable and **not** its originally stored
value.

*note:* The ability of reference by closures can be as harmful as it is helpful.
For example, because closures have access to the updated values of the outer
function’s variables, you must be conscious of which version of the variable
your closure (inner function) is using if it does in fact get updated.

---

<a name = "lab1"></a>
## Create a Closure: Independent Practice (15 mins)

Create a `makePerson` function which accepts two parameters (name, age) and returns an object that has methods on it. These methods should behave like closures and use the outer `makePerson` scope perform the following operations:

- getName()
- getAge()
- celebrateBirthday()
- haveAKid()
- getKids()

Use [this starter code](starter-code/make-a-person.js) to get you going!

---

<a name = "lab2"></a>
## Closure Brain Teaser: Independent Practice (25 mins)

As mentioned earlier, the ability for closure to reference an outer function
variable can be dubious if that variable updates. Take a look at the following
code.

```js
function queueCreator(waitList){

  for (var i=0; i<waitList.length; i++) {
    waitList[i].id = function() {
      return i + 1
    }
  }

  return waitList
}

var people = [{name:'George'},{name:'Chris'}]

var queueList = queueCreator(people)

console.log(queueList[0].id()) // 3?!

```

With 

- `c(i) = The condition under which we execute the loop`
- `u(i) = The update state of i`
- `cwlp = Calculated waiting list position (i + 1)`


| i | c(i) | u(i)  | cwlp (i + 1) |
|---|------|-------|--------------|
| 0 |i < 2 | 1     | 1            |
| 1 |i < 2 | 2     | 3            |
| 2 |i < 2 | **X** | 3            |


Here we have a `queueCreator` function that helps us order all of our guests upon arrival. However, as we can see the first person in our `queueList` is given the second position! Your job for the next 15 minutes is to help fix this `queueCreator` so that each guest is given his/her correct position in the list.

*hint:* You will need to implement an immediately invoked function expression.

Before we can cover the solution, we must first be able to explain the problem. Since, the closure accesses the outer function's variable by reference and not by value it grabs the latest updated value of `i`. And because the value of `i` was incremented in a for loop that ran twice, its referenced value ended up being `2`. So, how can we fix the code so that our closure uses the correct reference? The answer lies within _immediately invoked function expressions_ (IIFE).

#### Let's discuss the solution

By immediately invoking the first function commented with IIFE we are immediately evaluating and returning `i + 1` so that we do not need to refer to `positionInQueue` later when its value will have changed. The other immediately invoked function serves a similar purpose. It is executed so that the value of `waitList[i].id`, a function, can be executed immediately so as to use and return the current state of `positionInQueue`. To sum it up, in order to avoid bugs caused by changing references in closure, you must use IIFE to capture the proper state of your referenced variable.

---

<a name = "codealong2"></a>
## The Module Pattern (15 mins)

Now that we know the ins-and-outs and quirks of closure, how exactly is it useful?

Well, closures can help us hide state by creating _modules_:

```js
var car = (function(kind) {
  var wheelCount = 4;

	// a closure
  var start = function() {
    console.log('started with ' + wheelCount + ' wheels - vroom, vroom baby! Oh wait, I need gas :( help me I\'m poor');
  };

  return {
    make: kind,
    wheels: wheelCount,
    startEngine: start
  };
})('Tesla');

// => Tesla
console.log(car.make);

// => started with 4 wheels.
car.startEngine();
```

### Quick practice

Modify the module above to have a new function which fills the gas tank. Use a `boolean` value to keep track of whether or not the tank has gas or not. Make another modification to the start method which will only start the car if the gas tank has gas otherwise, print an error message.


Unlike most other object-oriented languages, Javascript doesn't have a true concept of private context. However, closures allow us to abstract away private variables and functions so that the public doesn't need to worry about the complicated details of how the program works, but rather, they can just use the module pattern to simply get what they need done accomplished. In terms of this example, `wheelCount` and `start` expressions are private. The module is solely concerned with returning an object for the public to use while hiding how the values for the object properties were created. This is the main idea behind the module pattern, that it returns an object literal which through its use, is the only way to access the private functions and variables. Another benefit of the module pattern, is that it helps keep your codebase cleaner by organizing relevant code together which in turn also helps with testing and reuse.

---

<a name = "codealong2"></a>
## Context...The Meaning and Purpose of _this_ (25 mins)


The next thing we will be covering is one of Javascript's most confusing concepts, _context_. However, don't fear, this concept may be a little confusing to grasp at first, but once you start to get it you'll know context like the back of your hand. So, what exactly is context? Well, in Javascript when a function is invoked there is an execution context associated with it. This _context_ is what makes up the value of the keyword _this_, which is a reference to the object that "owns" the currently executing code. In other words, _this_ is a reference to an object, an object that is the subject in context. Knowing that context is determined by how a function is invoked, we can infer that context is decided at runtime when the function is called.

![meaning](https://media2.giphy.com/media/3osxYcV5w9iN15pQPK/200.gif)

Confused? Here's some code to help bring some clarity:

```js
console.log(this === window) // true
```

If we were to run this single line of code by itself, in the global variable scope, it would run in the context of the `window` object, and because _this_ refers to the subject of the executing code, the subject in context, its value is equal to the `window` object it is running within.

Here's one more example to further the point:

```
function aFunc() {
	console.log(this); // whoa! All kinds of stuff. Recognize anything?
}

aFunc();
```

The above example prints the _global_ _this_ context. This is because `aFunc()` functions as a normal function. Functions can also be objects with their own _this_ context. In order to achieve this, you need to utilize the `new` operator

```
function aFunc() {
	console.log(this); // aFunc {}
}

new aFunc();
```

Now when we print _this_ within `aFunc()` we get an empty object with name `aFunc` next to it. This tells us we're referencing `aFunc`'s _this_ context and it's empty because we haven't put anything in it!

```
function aFunc() {
	this.foo = 'bar';
	console.log(this); // aFunc { foo: 'bar' }
}

new aFunc();
```

Now we see that `aFunc` _this_ has the `property` on it because we just added it. Lets observe how _this_ works with closures

```
function aFunc() {
	this.foo = 'bar';
	function inner() {
		console.log(this);
	}
	inner();
}

new aFunc();
```

OK, OK, OK...you have a basic understanding of _this_ now and how it refers to the object it's being executed within, but what's its purpose and why would we use it to refer to an object opposed to calling on the actual object itself? To answer these questions check out the following code:

```js
var chatroomUser = {
  age: '22',
  sex: 'm',
  location: 'Los Angeles',
  printASL: function() {
    // we can refer to the chatroomUser object with this
    console.log(this.age + '/' + this.sex + '/' + this.location)

    // or we could refer to it by name
    console.log(chatroomUser.age + '/' + chatroomUser.sex + '/' + chatroomUser.location)
  }
}
```

Inspecting the `printASL` function we can see that we can refer to the object the function is running within with _this_ or by directly calling the object name, `chatroomUser`. This leads us to the question, why not just use `chatroomUser`? The root of the answer lies within variable scope. Remember? That thing we learned a few units ago. ;) If we were to use `chatroomUser`, there is no predicting that that variable name is not already declared globally hence causing our reference to the `chatroomUser` in our object to break since the globally declared `chatroomUser` would be used instead. However, if we use _this_ as the context reference, we are precise and remove any ambiguity from our code. Further, _this_ gives us the ability to not only accurately _reference_ context, but it also allows us to _set_ the context of any function we call, allowing us to do some interesting things with closures. We'll get into the details of setting the context of functions in just a bit.

---

<a name = "practice"></a>
## Convert makePerson (15 mins)

Convert your `makePerson()` code to a JS module
 
- Be a JS module

*OR*

- Utilize _this_ instead of local variables

*Bonus*

- Do both!


<a name = "conclusion"></a>
## Conclusion (5 min)

Review class objectives and the following questions:

- What is the purpose of the module pattern and what are its benefits?
- When is context determined?
- Why would you want to manually change context of a function?
- What is a more commonly used to term for lexical scope?
- Explain one ability closure has upon variable scope that makes it special.
- How does closure work?
