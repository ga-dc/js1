# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Intro to DOM and jQuery (3:00)

| Timing | Type | Topic |
| --- | --- | --- |
| 10 min | [Opening](#opening) | The Document Object Model (DOM) |
| 30 min | [Codealong](#codealong1) | Working the DOM |
| 25 min | [Lab](#lab1) | DOM Manipulation: Independent Practice |
| 30 min | [Introduction](#introduction) | jQuery and DOM |
| 50 min | [Codealong](#codealong2) | Trading JavaScript for jQuery |
| 30 min | [Lab](#lab2)| Create a Checklist: Independent Practice |
| 5 min | [Conclusion](#conclusion) | Final Questions & Exit Tickets  |


### Objectives
*After this lesson, students will be able to:*

- Identify differences between the DOM and HTML.
- Explain the methods and use the DOM in javascript.
- Manipulate the DOM by using jQuery selectors and functions.
- Register and trigger event handlers for jQuery events.

### Preparation
*Before this lesson, students should already be able to:*

- Understand fundamental data types.
- Implement object oriented programming in JavaScript.
- Create and modify JavaScript objects.

>Note: Last class, we worked on writing constructors and prototypes for JavaScript objects! Check with students to make sure that everyone is comfortable with the materials covered in the last class.

---

<a name = "opening"></a>
## The Document Object Model (DOM) (10 minutes)

We are now familiar with all the fundamental JavaScript data types, including objects. We can use existing objects as well as create our own to pass around information and functionality. Understanding the fundamentals of objects not only gives us the ability to pass around information, but it is also essential in how we use JavaScript to manipulate our sites and applications.

The Document Object Model (DOM) is a programming interface for HTML [and XML] documents. Before we dive too deep into the DOM, we need to understand first how browsers work. Watch this short video on [browser rendering](https://www.youtube.com/watch?v=n1cKlKM3jYI).

So, the DOM is a (potential) large object that describes the structure of our content. Since it's an object, we can use normal techniques to get and set data! In the browser, the DOM is represented by the `document` object. JS specifies some built-in methods that make using the DOM easier. Take a minute to review the [summary of the DOM at MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document). Pay particular attention to the following methods:

- `Document.getElementById(String id)`
- `Document.querySelector(String selector)`
- `Document.querySelectorAll(String selector)`

When reading these methods, try to get a sense of what they're trying to accomplish. We aren't going to ask you to memorize documentation. Don't worry about the details, since we're going to observe some examples.

Each of these methods returns an element from the DOM. What can we do with an [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)? Let's write a few suggestions down on the board.

---
<a name = "codealong1"></a>
## Working with the DOM: Codealong (30 minutes)
We can manipulate the DOM in 3 different ways:

1.  Inline JavaScript (least desirable).
```html
  <body onload="window.alert('welcome to my app!');">
```
2. Include script tags in our HTML documents. This technique is used primarily when generating content/properties through a back-end language. Try to avoid this if not necessary.
```html
  <html>
    <head>
      <script>
         alert('Welcome to my app!');
      </script>
    </head>
    <body>
    </body>
  </html>
```
3. Including the JavaScript file [at the footer] of our site/app.

**It is important to get used to falling in the habit of only doing DOM related manipulation only once our content has loaded.** This is required, as we can't manipulate something that has not yet been drawn in the browser. In plain JavaScript, we can usually wrap this in a 'window.onload' function.

```javascript
   // run this function when the document is loaded
   window.onload = function() {

     // create a couple of elements in an empty HTML page
     var main_heading = document.createElement("h1");
     var heading_text = document.createTextNode("Hello dynamic world!");
     main_heading.appendChild(heading_text);
     document.body.appendChild(main_heading);
  }
```

The above `window.onload` function adds a new element to our page through the following steps:

  1. We first create the new H1 element through the `document.createElement` method.
  2. We create the text through the `createTextNode` method.
  3. The text is added to the newly created H1 element.
  4. The H1 element is added to the body. Both steps 3 and 4 use the `appendChild` method to the respective element. Think of `appendChild` as an array of elements belonging to the element we are adding to.

Below are a few of the core interfaces to target existing elements in the DOM.

```html
<body>
  <div id="hello">Hello world</p>
  <ul id="gaCampuses">
    <li>DC</li>
    <li>NY</li>
    <li>SF</li>
    <li>LA</li>
    <li>HK</li>
  </ul>
</body>
```

```js
   // run this function when the document is loaded
   window.onload = function() {
     // Target items by id via the getElementById() method
     var helloElem = document.getElementById("hello");
     // We can access that element's css styles through the style property, and then accessing the css property through its camel-cased equivalent
     helloElem.style.color = "red";

     var campusesContainer = document.getElementById("gaCampuses");
     // The getElementsByTagName() method returns a live HTMLCollection of elements with the given tag name.
     var gaCampuses = campusesContainer.getElementsByTagName("li");

     // We can iterate through the returned collection with a for loop
     for (var i = 0; i < gaCampuses.length; i++) {
          gaCampuses[i].style.backgroundColor = "red";
      }
  }
```

Finally, we can set certain events to execute based on user interaction. A common example is listening for a button click.

```html
  <form>
    <input id="my-input" />
    <input id="my-input-button" type="submit" value="Run button code"></submit>
  </form>
```

```javascript
  window.onload = function() {
    button = document.getElementById('my-input-button');
    // Event parameter is the default object event that would have happened on user click
    button.onclick = function(event) {
      // The preventDefault() method lets us disable the default action, allowing us to override with our on functionality.
      event.preventDefault();
      MyApp.do_something("world");
    };
  };

  // We can define things outside of the `window.onload` that are evaluated
  // only when called.
  MyApp = {};

  MyApp.do_something = function(name) {
    console.log("Hello " + name);
  }
```
---

<a name = "lab1"></a>
## DOM Manipulation: Independent Practice (25 minutes)

Complete the [main.js](starter-code/js_dom_exercise/main.js) file in [js_dom_exercise](starter-code/js_dom_exercise) folder.

You'll add the ability to complete tasks in the list. Your program must complete the following rules: To complete you must meet the following requirements:
- Change the value of the element with the `id="name"` attribute to be whatever the user inputs when page first loads.
- When the user clicks the "#new-thing-button" button, add whatever is in the input box to the "#fav-list" list.
- Clear the input box when the user clicks the button.
- Bonus: only add item if the input box is not blank (hint: check innerHTML property)

---

<a name = "introduction"></a>

## jQuery and the DOM: Introduction (30 minutes)
By now, you've learned about the DOM and seen how we can use JavaScript to interact with it - reading values from it, and writing values to it. The DOM's _**API**_ (application programming interface) give us access to a couple of different methods that allow us to select elements from the DOM.

* `document.getElementById` retrieves a single element with a matching ID.
* `document.getElementsByClassName` retrieves an array of elements that match the given class.
* `document.getElementsByTagName` retrieves an array of elements that are of the given type.

However, these options are somewhat limiting. What if we wanted to retrieve the first `<li>` on a particular list with class `specialList`? We might be able to find it by using the `children` property, but that's a little clunky. If we were using CSS, we could just write a selector like this to style that element:

```CSS
  .specialList li:first-child {
    ...
  }
```

Wow - short and powerful! Wouldn't it be nice if we could select elements in the same way?

Enter jQuery. jQuery is an open-source project that was released in 2006, and it's currently the most widely used JavaScript library on the web; originally, it was going to be called "JSelect", but the domain name "JSelect.com" was taken, so its creator, John Resig, decided to call it jQuery instead.

jQuery allows us to query (i.e. select elements from) the DOM using the exact same selector syntax that we've used in CSS. To select the element described above, we would write

```js
jQuery(".specialList li:first-child")
```

jQuery allows us to query (i.e. select elements from) the DOM using the exact same selector syntax that we've used in CSS. To select the element described above, we would write

This will return a 'jQuery Object' - think of it as an abstraction for the search results from our query. You can retrieve any of the specific results using array notation (`jQuery("...")[i]`). There are also a number of special methods on the 'jQuery Object' that you can call which will manipulate the DOM for _all elements select by the query, at once_. These methods can do things like:

* change styling
* add event listeners for specific events
* write brand new content (text _and_ HTML) into the page

Writing 'jQuery' every time we want to make a query is a little tedious, though, so the jQuery team kindly created a shorthand reference that you can use to refer to jQuery : `$`. We can rewrite our jQuery code above as follows.

```js
$(".specialList li:first-child")
```

---
<a name = "codealong2"></a>
## Augmenting JavaScript with jQuery: Codealong (50 min)

When reading the jQuery documentation, be sure to scroll through the whole document to ensure you're looking at the correct method signature. Most jQuery methods change their behavior depending on the number of arguments they have when called.

For example, have a look at [.val()](https://api.jquery.com/val/). Note in the table of contents that there are two method signatures, `.val()` and `.val(value)`. This is our hint that `.val()` can do two things.

Reading the documentation, we discover that `.val()` is getter on an element, but that `.val(value)` is a setter on an element. Be sure you're using the correct method. Reading examples is very helpful, and the jQuery examples in the docs are fully functional!

Here is a list of many commonly used jQuery API functions:

1. **[find()](http://api.jquery.com/find)**
1. **[hide()](http://api.jquery.com/hide)**
1. **[show()](http://api.jquery.com/show)**
1. **[html()](http://api.jquery.com/html)**
1. **[append()](http://api.jquery.com/append)**
1. **[prepend()](http://api.jquery.com/prepend)**
1. **[on()](http://api.jquery.com/on)**
1. **[off()](http://api.jquery.com/off)**
1. **[css()](http://api.jquery.com/css)**
1. **[attr()](http://api.jquery.com/attr)**
1. **[val()](http://api.jquery.com/val)**
1. **[text()](http://api.jquery.com/text)**
1. **[each()](http://api.jquery.com/each)**

We can use jQuery to find elements, manipulate the returned elements, change styles, and add event listeners.

Targeting DOM elements in jQuery is a little easier to read than the JavaScript counterpart.

```js
  // Target item by id
  $('#item');

  // Target item(s) by class
  $('.box')

  // Target item(s) by tag
  $('h2')
```

Setting CSS properties is just as easy
```js
  // It is good practice to prefix items we have selected via jQuery with a $ in front of the variable name
  var $item = $('#item');
  // Setting the css property requires us to pass the property we are changing and the value we are changing it to as parameters (strings) in the css() method
  $item.css('color', 'red');
```
*** NOTE: We often don't update styles through the css property. This should be done by adding and removing classes appropriately through the `addClass()` and `removeClass()` methods. ***

We can update the internal html of an element with the html() method. Whatever we pass through the method will replace the current content of the selected element.
```js
  var $item = $('#item');
  // We can replace the content of the element either with text or with additional html.
  var htmlContent = "<p>Hello world</p>";
  $item.html(htmlContent);
```

jQuery also gives us access to many events making dealing with user interaction significantly easier.
```js
  var $button = $('#my-button');

  // Most events we will work with will pass as the first parameter in the on() method
  $button.on('click', function(event) {
    event.preventDefault();
    // Do something
  });
```

Now let's use jQuery to refactor some JS code! You may either follow along as or you may focus on taking notes.

---

<a name = "lab2"></a>
## Create a Checklist: Independent Practice (30 mintutes)

Complete the [main.js](starter-code/jquery_exercise/main.js) app in the [jquery_exercise folder](starter-code/jquery_exercise).

You'll add the ability to complete tasks in the list. Your program must complete the following rules:

Add the ability to complete tasks in the list. Your program must complete the following rules:
- Through jQuery add a "complete task" link at the end of each to-do item.
- When clicked, the link will cross out the current task (hint: add a class to the list that sets the text-decoration to strikeout).
- Each new task added by the user needs to also have the "complete task" link at the end.
- Bonus: when user completes task, remove the task from the current list and add it to a completed list below. Do not show this list unless the there are completed items.
- Bonus 2: add the ability to restore items from the completed list to the first list.

---

<a name = "conclusion"></a>

## Conclusion (5 min)

Ask students what was learned. Make sure the objectives have been met.
* Summarize the difference between global and local scope.
* Explain how you define and call functions using arguments.

#### Further Resources

- [MDN: Document Object Model (DOM)][1]
- [Youtube video: browser rendering flow][2]
- [jQuery documentation][3]
- [jQuery events][4]

[1]: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
[2]: https://www.youtube.com/watch?v=n1cKlKM3jYI
[3]: http://api.jquery.com
[4]: https://learn.jquery.com/events/
