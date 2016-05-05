![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

#Intro to CRUD (3:00)


### Objectives

_After this lesson, students will be able to:_

- Explain what CRUD is.
- Explain the HTTP methods associated with CRUD.
- Build a basic CRUD front end app

### Preparation

_Before this lesson, students should already be able to:_

- Identify all the HTTP Verbs & their uses.
- Describe APIs & how to make calls and consume API data.

---

<a name = "opening"></a>
## Introduction to CRUD and Parse (10 min)

In terms of an app's functionality, in general, most app's share the purpose of being able to show, create, update and delete data. For example, with Instagram a user is allowed to create and show data by uploading pictures with captions and share them with all their followers to see. Further, if the user wanted to go back and update the data, say they wanted to change the caption, they could do so by editing the caption or they could even delete all the data by removing the entire post. Similarly, with Tumblr, users can create posts they wish to share which they can edit later or even delete entirely. Being made aware of this pattern in apps can you name two or more apps and how they go about performing this functionality?

This common app functionality dealing with data is known as CRUD (Create, Read, Update and Delete). For today's lesson we will not only become familiar with this concept, but learn how to implement it with the help of a back-end service known as Parse as we build out our very own CRUD application.

---

<a name = "review"></a>
## A Little Review...A Lotta CRUD (20 min)

Even though we have never explicitly covered the term CRUD in this course, we have covered some of the technical implementations of performing CRUD. Can you think of what we have learned in an earlier lesson that relates to an application's ability to create, read, update and delete data? If it is not apparent as of yet, take a step back to think about what we know is needed in order to "play" with data. If the term API comes to mind you're on the right track. Using our _Advanced APIs_ lesson as an example, when we wanted to get Instagram post data, we had to ping one of Instagram's API endpoints to do so. But how exactly did we go about communicating with Instagram's endpoint? Herein lies the answer to our original question of what technical feature we have already learned which is related to CRUD, and that is _HTTP_.

When developing an application that deals with data, a developer must be able to communicate with the application program interface (API) using various HTTP methods. To better understand how the different HTTP methods we already know perform CRUD checkout at the following table:

|HTTP Method|CRUD|Further explanation|
|:---|:-----|:-----|
|POST| Create|Most-often utilized to _create_ new resources. On successful creation returns a 201 status code.
|GET| Read|The HTTP GET method is used to _read_ a representation of a resource. Upon success, returns data in the form of XML or JSON with a 200 status code. Upon failure, often returns a 404 or 400.
|PUT| Update|Most often utilized to for _update_ capabilities. Upon successful update, often returns a 200 or 204.
|DELETE| Delete|Used to _delete_ a resources. Upon successful deletion, most often returns a 200 status code.

---

<a name = "introduction1"></a>
## Understand CRUD Through Public APIs (15 min)

Now that you have an understanding of what CRUD is and how HTTP methods help you implement it, spend the next 15 minutes with a partner researching two of the following APIs to see what HTTP methods a developer must use to perform at least one instance of create, read, update and destroy. Further, you must define what exactly is being created, read, updated or deleted. For example, for Facebook what HTTP method on what endpoint must you ping in order to create a post in a feed?

API options:

- Facebook
- Instagram
- Twitter

> **Note:** Certain APIs may not allow for full CRUD functionality. If you're researching one of these APIs be sure to point out its limitations.

---

<a name = "introduction2"></a>
## Back-end Service (10 min)

So far in this course we have covered how to consume data from third-party APIs, but have not yet created our own API. The work that we have been doing is what is known in the tech industry as client-side or _front-end_ development.

> Front end development, also known as client side development is the practice of producing HTML, CSS and JavaScript for a website or web application so that a user can see and interact with them directly.

> -wikipedia

The process of actually creating the API, not consuming it, is what is known as _back-end_ development. You can think of back-end code as all the code living on the server-side, the code that app users never interact with directly. It is the "non-HTML-CSS-JavaScript" code.

Even though we don't have all the skills needed to roll out our own fully custom back-end, today we are going to learn how to use Parse, a back-end as a service (BEaaS), to help us create our very own API!

Parse serves as the entire back-end of an application, meaning its biggest features include working as a database for your app as well as providing you with a Javascript library to interact with said database. It's truly a great tool for designers/front-end developers that are either not familiar or don’t want to deal with building out the back-end. Sometimes you just want to quickly prototype and focus on your UX!

---

<a name = "setup"></a>
## GA Parse Server (35 min)

We've created a very simple JS library which will communicate with a backend server.

![it's alive](https://media.giphy.com/media/d3Kq5w84bzlBLVDO/giphy.gif)

---


<a name = "codealong1"></a>
## Create

The first part of CRUD we'll be covering is _C_, create.

```javascript
   	// ParseObjectType is a global function that allows you to create new object types!
	var Vehicle = new ParseObjectType('Vehicle');
	
	// now you need to define some properties for the car
	var props = { wheelCount: 4 };
	
	// now just call .create and pass in the props!
	Vehicle.create(props, function(err, result) {
		// if an error exists, read it in the console
		if (err) {
			console.log(err);
		} else {
		   // otherwise, you'll get a result with the new object and an assigned objectId
			console.log(result); // { wheelCount: 4, objectId: '10iedlfd' }
		}
	})
```


---

<a name = "codealong2"></a>
## Get

Now that we see how we can _create_ objects, how can we get objects?

```javascript
	// Once we have an object's 'objectId', we can fetch that object based on it!
	Vehicle.get(objectId, function(err, car) {
		// check for error
		
		// if there's no error, take a look at the vehicle object
		console.log(car); // { wheelCount: 4, objectId }
	}); 
```

## Get All

```javascript
	// Once we have an object's 'objectId', we can fetch that object based on it!
	Vehicle.getAll(function(err, allCars) {
		// check for error
		
		console.log(allCars);
	}); 
```

---

<a name = "codealong3"></a>
## Update

```js
	// Having the objectId also allows us to update an object
	Vehicle.update(objectId, { wheelCount: 2 }, function(err, result) {
		// check for the error
		
		console.log(result); // { updatedAt: 'some date string' }
	});
```

---

<a name = "codealong4"></a>
## Delete

```javascript
	// and to delete, use the remove() method
	
	Vehicle.remove(objectId, function(err){
		// check for err
		
		// if there is no error, the object was successfully removed
	})
```

---

<a name = "conclusion"></a>
## Conclusion (5 min)

- What does CRUD stand for?
- What HTTP methods are associated with C, R, U and D?
- What is a BEaaS?
- Do all apps have CRUD?
- How would you explain the front-end vs. the back-end to a fellow developer?

### Before Next Class
|   |   |
|---|---|
| **UPCOMING PROJECTS**  | [Project 3: Final Project](../../projects/unit4) |
