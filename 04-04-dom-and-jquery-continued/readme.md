# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) DOM/jQuery Continued and Templating (3:00)

### Objectives

- Implement advanced jQuery events.
- Use event delegation to manage dynamic content.
- Use implicit iteration to update elements of a jQuery. selection and
chaining to place methods on selectors.
- Add a templating language to our projects for better and more abstracted
content manipulation.

---
<a name = "opening"></a>

## Warmup

https://github.com/ga-wdi-exercises/pixart_js

## Events Continued (15 minutes)
Last lesson we learned what the DOM was and how to manipulate it with vanilla
JavaScript and jQuery. We got a taste of jQuery's power in making our
interaction with the DOM significantly easier. Although we covered the basics
of using jQuery, such as selecting DOM elements, adding content, and
listening for a basic click event, we need to understand jQuery events and
DOM manipulation more intimately for true dynamic applications. In this
lesson we will work with additional jQuery events and understand implications
of adding dynamic content to our pages. We will also work with a templating
engine for better separation of concerns in our code.

We were able to implement a click event in the last lesson, however jQuery [
and JavaScript] gives us the ability to listen to a plethora of additional
user events. Additionally, what if we have multiple events for specific
elements? What if we want to listen for events to elements that have not yet
been added to our interface?

We can listen for mouse, keyboard, form, and document/window events. Today we
will focus on mouse events, however listening to other events is very similar
to mouse events.

*Mouse Events:*
- click
- dblclick
- mouseenter
- mouseleave

*Keyboard Events*
- keypress
- keydown
- keyup

*Form Events*
- submit
- change
- focus
- blur

*Document/Window Events*
- load
- resize
- scroll
- unload

---

<a name = "codealong1"></a>
## Event Delegation and Best Practices: Codealong (30 min)
We started covering mouse events with the click event. We can add additional
mouse events in the same manner.

```js
  var $listItem = $('#fav-list li');

  $listItem.on('mouseenter', function(e) {
    $(this).removeClass('inactive');
    $(this).siblings().addClass('inactive');
  });

  $listItem.on('mouseleave', function(e) {
    $(this).siblings().removeClass('inactive');
  });
```

`this` refers to the element that triggered the event. We'll talk more
about this in a few weeks.

The above code listens for two events:

1. User's mouse set to enter the list item element. In this case, it removes
the 'inactive' class from itself (if it exists) and adds it to its sibling
list items. *Note: element and sibling class switching is a common best
practice to toggle visual effects on user actions.*
2. User's mouse set to leave the list item element. This removes the 'inactive
' class from all elements on the same level.

While the above code works great for existing elements, if we add new
elements to the DOM, the events will not fire up for the newly added elements.

It is important to understand that these direct events are only attached to
elements at the time that the 'on' method is called. If list items did not
exist when the above events were called, they do not get included in the
calls above.

To get around this, we create a delegated event, which requires us to add the
element our event handler executes for, to the right side. Take the above
code and modify to:

```js
  $thingList.on('mouseenter', 'li', function(e) {
    $(this).removeClass('inactive');
    $(this).siblings().addClass('inactive');
  });

  $thingList.on('mouseleave', 'li', function(e) {
    $(this).siblings().removeClass('inactive');
  });
```

Our code is getting a little inefficient and duplicative. Our list items have
two event handles attached to them. We can handle both of the above scenarios
with one event handler. Grouping our events by element not only helps us
group our code, but it is also a drastically faster operation.

```js
  var $thingListItems = $('#fav-list');

  $thingList.on('mouseenter mouseleave', 'li', function(event) {
       if (event.type == 'mouseenter') {
         $(this).removeClass('inactive');
         $(this).siblings().addClass('inactive');
      } else if (event.type == 'mouseleave') {
          $(this).siblings().removeClass('inactive');
      }
  });
```

Let's add a dash in front of every one of our list items (yes in addition to
the bullets). jQuery gives us a convenience method to iterate through a list
of elements.

```js
  var $thingList = $('#fav-list');

  $thingList.find('li').each(function() {
    $(this).prepend(' - ');
  });
```
---

<a name = "lab1"></a>
## Appending: Independent Practice (30 mintutes)

Open the [main.js](starter-code/events_codealong_and_exercise/main.js) file
in the in the events_codealong folder to get started.

- Append two anchor tags to each list item:
  - An anchor tag to complete the task.
  - An anchor tag to delete the task (list item).

- The complete task event handler should toggle a 'completed' class on the
list item

### Bonus

When the user clicks on a list item, replace the <li> with a form and input.
When the form is submitted, replace the input with the text, like:

![](http://jshawl.com/s/inline-editing.gif)

---

<a name = "introduction"></a>
## Separation of Concerns and Templating: Introduction (25 minutes)

Through event handlers and DOM manipulation we are able to making our
applications more dynamic, interactive, responsive, and just plain fun.
However, even with a small to do list app, our code is starting to grow
significantly. If we keep stacking features, our code will soon become much
more difficult to manage. We are currently having to interact with our data
as DOM elements. As our applications start forming relationships, it will
become very messy to get values, serialize them, and pass them around.

This is why separating our data from our view logic becomes very important.
We can still use jQuery to interact with the DOM and listen for user events,
however our business rules (data) should be kept separate from the view. This
is where templating becomes very useful.

Templating lets us reference a snippet of code, and populate it with data we
store in actual JavaScript objects, before adding it to the DOM. There are
many JavaScript templating libraries like [Handlebars](http://handlebarsjs.com/),
[Mustache](http://mustache.github.io/), and
[Underscore templates](http://underscorejs.org/). Today we will be working with
[Handlebars](http://handlebarsjs.com/).

---

<a name = "codealong2"></a>
## Templating: Codealong (35 minutes)
Handlebars has a 4 step process to implementing templates in our applications:

  1. Create the template(s)
  2. Reference and compile template
  3. Pass the object to compile to Handlebars
  4. Add the new compiled element to DOM


1. We create our element surrounded in script tags with a reference id and a
type of handlebars template. We surround the content that's to be replaced by
double curly brackets.

  ```html
    <script id="hello-world-template" type="text/x-handlebars-template">
      <h1>{{helloTitle}}</h1>
      <p>{{helloContent}}</p>
    </script>
  ```

2. We can then use jQuery to reference the newly created template and pass
that reference to Handlebars.

  ```js
    var source = $('#hello-world-template').html();
    var template = Handlebars.compile(source);
  ```

3. We can then pass our data object to the newly created template.

4. And add it to the DOM via jQuery.

  ```js
    var source = $('#hello-world-template').html();
    var template = Handlebars.compile(source);

    var helloStatement = { helloTitle: "Hello world", helloContent: "GA JS class is just awesome"};

    var compiledTemplate = template(helloStatement);
    $('body').append(compiledTemplate);

    // or you could have done $('body').append(template(helloStatement));
  ```

This routine allows us to organize our code by DOM and event logic (usually
taken care of by jQuery in our case) and by model logic (currently just JS
models). This will help interacting with data sets much cleaner and more
manageable.

---

<a name = "lab2"></a>
## To Do List: Independent Practice (35 minutes)

Build on top of the to-do list app to store your initial to-do data in a
JavaScript object and interact with the object whenever the user interacts
with the DOM.

1. Use Handlebars to add any new DOM content.

2. Store all of your data in a todos object.

3. Organize your code so your app logic is DRY.

4. Bonus: create a method you can reference in your app to compile your data
to Handlebars templates, instead of relying on doing this every time you need
to add a DOM object.

---

<a name = "conclusion"></a>
## Conclusion (5 min)

Ask students what was learned. Make sure the objectives have been met.
* Why would we want to use templating?
* What is event delegation? Why would we use it?

#### Further Resources

- [jQuery: Event delegation][1]
- [Handlebars.js][2]
- [jQuery: Handling events][3]
- [Advanced reading: Understanding MVVM][4]
- [JavaScript MVC][5]

[1]: https://learn.jquery.com/events/event-delegation/
[2]: http://handlebarsjs.com/
[3]: https://learn.jquery.com/events/handling-events/
[4]: http://addyosmani.com/blog/understanding-mvvm-a-guide-for-javascript-developers/
[5]: http://alistapart.com/article/javascript-mvc
