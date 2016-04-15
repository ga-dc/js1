# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Closures and This (3:00)

### Objectives


- Understand and explain Javascript context.
- Understand and explain closures.
- Implement the module pattern in their code.

>Note: Last class, we learned how prototypical inheritance differs from
classical inheritance.

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
(function() {
  var a = 1
  $('.button').on('click', function() {
    alert(a)
  })
})()
```

In this example we have two functions, one that is immediately invoked
and an event handler that is triggered by a click on a button. The
structure of these two functions forms a closure giving our inner function,
the click handler, _state_. The state in this case is a reference to `a` and if
a user were to click on `.button` they would be alerted with `1`.

There are two key takeaways here. The first being:

**Closures have access to the outer function’s variable even after the outer
function returns**

Even though our outer function has been executed and returned, our inner
function is still able to call upon the variables declared by the outer function
at any future time in the program!

To further prove this point, we could update the code to look like:

```js
...
  var a = 1

  $('.button').on('click', function() {
    a = a + 1
    alert(a)
  })
...
```

Now if a user were to click on `.button` what value do you think they would be
alerted with? If you said `2` you'd be correct. What about if they clicked on
`.button` a second time? Yes, the value would increase to `3`. Once again, even 
though the outer function has been returned our program is still able to
reference its declared variable, `a`, because of closure. So how is this possible?
When our wrapper function was executed its variable, `a`, was stored into memory
and subsequently, our inner function was able to create a reference to `a`.
Because of this reference, as long as the inner function exists (meaning the
reference exists), the value of `a` will exist in memory. Further, all value
changes the inner function performs on `a` will also be saved to memory. By
creating this lexical scope, Javascript is told to remember the
state/environment that the inner function lives in. And this is the first key
takeaway of closure, the ability for functional variables to outlive their
original functional scope.

*note:* If we were to remove our event handler, thereby removing our reference
to `a`, Javascript would automatically remove `a` from memory because it knows
the program no longer has a use for the variable. This helpful memory task is
known as _garbage collection_.

The second takeaway is:

**Closures store references to the outer function’s variables**

Closures do **not** store the actual value, but rather a **reference** to it.
This is a fundamental difference as seen in our button clicking example. Our
inner function referred to the value of `a` initially and with each click was
able to update its value incrementing it by one.

Take a look at the following example to help further explain:

```js
function user() {
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

var user = user()
user.getUserId() // 999
user.setUserId(555) // Changes the outer function's variable
user.getUserId() // 555; returns the updated userId variable
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

Create a closure that will help you create colored sticky notes dynamically in
your DOM with the click of a button. The results should look something like:

![](https://s3.amazonaws.com/f.cl.ly/items/30342l3m3N151L442S1Z/Image%202015-12-03%20at%207.23.15%20PM.png)

The CSS is all setup for you in the start index.html, but you will have to add:

- create input and button elements
- run Javascript code only after document is "ready"
- sticky note color and message should both be dictated by user input
- each sticky note message should start with a number representing the order of
its creation

---

<a name = "lab2"></a>
## Closure Brain Teaser: Independent Practice (25 mins)

As mentioned earlier, the ability for closure to reference an outer function
variable can be dubious if that variable updates. Take a look at the following
code.

```js
function queueCreator(waitList){
  var positionInQueue = 0

  for (var i=0; i<waitList.length; i++) {
    waitList[i].id = function() {
      return positionInQueue + i
    }
  }

  return waitList
}

var people = [{name:'George'},{name:'Chris'}]

var queueList = queueCreator(people)

queueList[0].id() // 2?!
```

Here we have a `queueCreator` function that helps us order all of our guests upon arrival. However, as we can see the first person in our `queueList` is given the second position! Your job for the next 15 minutes is to help fix this `queueCreator` so that each guest is given his/her correct position in the list.

*hint:* You will need to implement a immediately invoked function expression.

#### Closure Brain Teaser Solution

Before we can cover the solution, we must first be able to explain the problem. Since, the closure accesses the outer function's variable by reference and not by value it grabs the latest updated value of `positionInQueue`. And because the value of `positionInQueue` was incremented in a for loop that ran twice, its referenced value ended up being `2`. So, how can we fix the code so that our closure uses the correct reference? The answer lies within _immediately invoked function expressions_ (IIFE).

```js
function queueCreator(waitList){
  var positionInQueue = 1

  for (var i=0; i<waitList.length; i++) {
    waitList[i].id = function() {
      return function() {
        return positionInQueue + i
      }() // IIFE
    }() // IIFE
  }

  return waitList
}

var people = [{name:'George'},{name:'Chris'}]

var queueList = queueCreator(people)

queueList[0].id // 1
```

By immediately invoking the first function commented with IIFE we are immediately evaluating and returning `positionInQueue + i` so that we do not need to refer to `positionInQueue` later when its value will have changed. The other immediately invoked function serves a similar purpose. It is executed so that the value of `waitList[i].id`, a function, can be executed immediately so as to use and return the current state of `positionInQueue`. To sum it up, in order to avoid bugs caused by changing references in closure, you must use IIFE to capture the proper state of your referenced variable.

---

<a name = "codealong2"></a>
## The Module Pattern (15 mins)

Now that we know the ins-and-outs and quirks of closure, how exactly is it useful?

Well, closures can help us hide state by creating _modules_:

```js
var car;
function carFactory(kind) {
  var wheelCount, start;
  wheelCount = 4;
  start = function() {
    console.log('started with ' + wheelCount + ' wheels.');
  };

  // Closure created here.
  return (function() {
    return {
      make: kind,
      wheels: wheelCount,
      startEngine: start
    };
  }());
}

car = carFactory('Tesla');

// => Tesla
console.log(car.make);

// => started with 4 wheels.
car.startEngine();
```

Unlike most other object-oriented languages, Javascript doesn't have a true concept of private context. However, closures allow us to abstract away private variables and functions so that the public doesn't need to worry about the complicated details of how the program works, but rather, they can just use the module pattern to simply get what they need done accomplished. In terms of this example, `wheelCount` and `start` expressions are private. The module is solely concerned with returning an object for the public to use while hiding how the values for the object properties were created. This is the main idea behind the module pattern, that it returns an object literal which through its use, is the only way to access the private functions and variables. Another benefit of the module pattern, is that it helps keep your codebase cleaner by organizing relevant code together which in turn also helps with testing and reuse.

---

<a name = "codealong2"></a>
## Context...The Meaning and Purpose of _this_ (25 mins)

The next thing we will be covering is one of Javascript's most confusing concepts, _context_. However, don't fear, this concept may be a little confusing to grasp at first, but once you start to get it you'll know context like the back of your hand. So, what exactly is context? Well, in Javascript when a function is invoked there is an execution context associated with it. This _context_ is what makes up the value of the keyword _this_, which is a reference to the object that "owns" the currently executing code. In other words, _this_ is a reference to an object, an object that is the subject in context. Knowing that context is determined by how a function is invoked, we can infer that context is decided at runtime when the function is called.

Confused? Here's some code to help bring some clarity:

```js
console.log(this === window) // true
```

If we were to run this single line of code by itself, in the global variable scope, it would run in the context of the `window` object, and because _this_ refers to the subject of the executing code, the subject in context, its value is equal to the `window` object it is running within.

Here's one more example to further the point:

```js
function foo() {
  console.log(this === window)
}

foo() // true
```
By default a function runs within the scope of the object it sits in, so in this case _this_ is still equivalent to the window object.

In fact:

```js
foo() === window.foo() // true
```
Here you can see that `foo()` is a property of the object it's running in.

*note:* In the real world, we would never need to explicitly code the `window` object like this, but this example illustrates the point that the function `foo` does in fact exist within `window` when it runs in the global scope.

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

<a name = "codealong3"></a>
## Manipulating Context (25 mins)

Before we go into how to manually change context, we must remember that all objects, which includes functions, have properties. And when a function object executes, the value of _this_ is set to the object that invokes said function.

Let's take a look the following code to cement what we already know:

```js
var user = {
  firstName: 'Chelsea',
  lastName: 'Logan',
  showFullName: function() {
    console.log(this.firstName, this.lastName)
  }
}

user.showFullName() // Chelsea Logan
```

Looking at the example above, the first thing you may notice is that we have declared an object, `user`, which contains a few properties, one of them being a method. Because this method, `showFullName`, is defined on `user`, we also know that the context of _this_ within the method is `user`. So, when we run `user.showFullName()`, _this_ serves as a reference to `user` allowing us to access the `firstName` and `lastName` properties.

This is fine and dandy, but what if we want to be able to choose what object _this_ refers to, is it possible? In fact, with the help of a few built-in Javascript methods it is.

But before we dive into examples of how to use these methods, why do you think we would need to change our context in the first place? Well, when it comes to the use of event handlers, the value of _this_ is not always what we want.

For example:

```js
var user = {
  firstName: 'Chelsea',
  lastName: 'Logan',
  showFullName: function() {
    console.log(this.firstName, this.lastName)
  }
}

$('.button').click(user.showFullName) // undefined undefined
```

With what we know so far, we would expect to see `Chelsea Logan` upon a click, but instead we are returned with `undefined undefined`. Why is this? Well, if you're thinking its because our context has changed you're absolutely right! In Javascript, the context of an event listener is set to the element it is listening to. So for this example, _this_ is actually equal to the `button` element which is why we get `undefined undefined`, since `.button` doesn't have any `firstName` or `lastName` properties upon itself. And alas, this is a real-world example of why you would want to change the context of a function.

Here are the methods that allow us to control context:

- `call`: The call() method calls a function with a given this value and arguments provided individually
- `apply`: The apply() method calls a function with a given this value and arguments provided as an array (or an array-like object)
- `bind`: The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called

`call`:

```js
$('.button').click(function() {
 user.showFullName.call(user) // Chelsea Logan
})
```

`apply`:

```js
$('.button').click(function() {
 user.showFullName.apply(user) // Chelsea Logan
})
```

`call` and `apply` are identical in their service, but they differ in how many arguments they take. `call` can accept many arguments, the first argument always being the setting context and the rest being arguments that are to be passed to the function whose context is being set in a respective order. `apply` only accepts two arguments, like `call` the first argument is the setting context, but the second argument is an array of all the arguments to be passed to the function whose context you are setting.

Their implementations with arguments looks like this:

```js
var user = {
  firstName: 'Chelsea',
  lastName: 'Logan',
  showFullName: function(one, two, three) {
    console.log(this.firstName, this.lastName, one, two, three)
  }
}

$('.button').click(function() {
 user.showFullName.call(user, 1, 2, 3) // Chelsea Logan 1 2 3
})

$('.button').click(function() {
 user.showFullName.apply(user, [1, 2, 3]) // Chelsea Logan 1 2 3
})
```

Pretty straightforward stuff. `bind` is different than `call` and `apply` in the sense that it doesn't set the context of a function, but rather `bind` creates a whole new function with the context you supply it.

```js
var user = {
  firstName: 'Chelsea',
  lastName: 'Logan',
  showFullName: function() {
    console.log(this.firstName, this.lastName)
  }
}

// declare a new variable whose value is the user.showFullName function with a context set to user
var contextSetUser = user.showFullName.bind(user)
$('.button').click(contextSetUser) // Chelsea Logan

$('.button').click(user.showFullName) // undefined undefined
```

---

<a name = "lab3"></a>
## This Brainteasers (20 mins)

Let's go ahead and test out all of our freshly acquired knowledge with a couple of fun brainteasers! Feel free to work independently or with a partner.

1. Explain the results of the following code:

```js
var fullName = 'John Doe';
var obj = {
   fullName: 'Colin Ihrig',
   prop: {
      fullName: 'Aurelio De Rosa',
      getFullName: function() {
         return this.fullName;
      }
   }
};

console.log(obj.prop.getFullName());

var test = obj.prop.getFullName;

console.log(test());
```

2. Make `console.log(test())` return `Aurelio De Rosa`

#### Brainteasers Solution

1. Context of a function is dependent on how a function is invoked, not how it's defined. For the first log, we execute `obj.prop.getFullName()` invoking `.getFullName()` upon the `prop` object, thereby setting the context of the function to `prop` and logging `prop`'s `fullName` property, `Aurelio De Rosa`. For the second log, `.getFullName()` is set to the variable `test` which is in declared in the context of the `window` object, similar to the first example we saw earlier. Hence, when `test` is called, the log returns the value of the `fullName` property of the `window` object, `John Doe`.

2. `console.log(test.call(obj.prop))` or `console.log(test.apply(obj.prop))`

---

<a name = "conclusion"></a>
## Conclusion (5 min)

Review class objectives and the following questions:

- What is the purpose of the module pattern and what are its benefits?
- When is context determined?
- Why would you want to manually change context of a function?
- What is a more commonly used to term for lexical scope?
- Explain one ability closure has upon variable scope that makes it special.
- How does closure work?

### Before Next Class
|   |   |
|---|---|
| **DUE NEXT CLASS**  | [Project 2: Feedr](../../projects/unit2) |
| **UPCOMING PROJECTS**  | [Project 3: Final Project](../../projects/unit4) |
