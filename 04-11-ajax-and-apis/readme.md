# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) AJAX & APIs (3:00)

| Timing | Type | Topic |
| --- | --- | --- |
| 15 min | [Opening](#opening) | APIs: Introduction |
| 25 min | [Introduction](#introduction1) | HTTP: Recap |
| 30 min | [Demo](#demo) | HTTP |
| 35 min | [Codealong](#codealong)  | jQuery AJAX  |
| 40 min | [Lab](#lab1) | Fav Things List - API-ify  |
| 30 min | [Lab](#lab2) | Open Weather Map: Independent Practice |
| 5 min |  [Conclusion](#conclusion)| Final Questions & Exit Tickets |


###  Objectives
*After this lesson, students will be able to:*

- Identify all the HTTP Verbs & their uses.
- Describe APIs and how to make calls and consume API data.
- Access public APIs and get information back.
- Implement an AJAX request with Vanilla JS.
- Implement a jQuery AJAX client for a simple REST service.
- Reiterate the benefits of separation of concerns – API vs. Client.

### Preparation
*Before this lesson, students should already be able to:*

- Implement advanced jQuery events.
- Use event delegation to manage dynamic content.
- Use implicit iteration to update elements of a jQuery selection and
chaining to place methods on selectors.
- Add a templating language to our projects for better content manipulation.

> Note: Last class, we learned how to manipulate the DOM using jQuery and
even learned some handlebars.js! Check with students to make sure that
everyone is comfortable with the materials covered in the last class.

---

<a name = "opening"></a>
## APIs: Introduction (15 min)

Last class we learned the importance of separation of concerns. It's best
practice to separate DOM logic from our data models. This not only allows for
cleaner code, but is an easier way to manipulate our layouts and interaction
. Separation of concerns becomes ever more important when working with
outside data. Let's take a few scenarios where we want to pull data from an
external API:

- Twitter client
- Feed reader
- Weather forecasting app
- Social game sharing high scores
- Any app with user log in

Given the increase in the number of devices and platforms,
[Service Oriented Architectures (SOA)](https://en.wikipedia.org/wiki/Service-oriented_architecture)
have becoming increasingly prevalent and are soon becoming best practice.
SOAs allow us to build one backend/database to share across all of these
platforms. This means that our applications will not only deal with external
APIs, but also rely on these services for our core data.


### API Gotchas

API calls are really a fancy term for making HTTP requests to a server and
sending/receiving structured data from that endpoint. We are still
communicating with URLs, however instead of receiving markup, like we do with
HTML pages, we receive data. If that data is structured as JSON, we can
easily start reacting and communicating with it thanks to the provided JSON
methods.

Because our pages will be fully or partially rendered on the client side
after we receive this data, there are a few best scenarios we need to take
into account:

  - Certain APIs require authentication, and we need to provide an API key
  either as a request parameter, in the header, or in the body of the call.
  - When we make an API call after a user action, we need to give the user
  feedback that something is happening.
  - We update our view(s) only after we get a return from the server.
  - We need to account for us not receiving data back due to different
  interruptions/causes:
    - Server timeout
    - Wrong authentication information
    - User loses connection
    - Request URL not found
- [Representational state transfer (REST)](https://en.wikipedia.org/wiki/Representational_state_transfer)
is the most common architecture style for passing information to and from these API endpoints.

Before we start consuming these services however, it's important to
understand the fundamentals of the underlying communication layer. This
communication layer (HTTP) will be responsible for transporting our API calls.

---
<a name = "introduction1"></a>
## HTTP: Recap (25 min)

HTTP is a protocol - a system of rules - that determines how web pages
(see:'hypertext') get sent (see:'transferred') from one place to another.
Among other things, it defines the format of the messages passed between
**HTTP clients** and **HTTP servers**.

![Web Architecture](./images/webserver_to_rails_setup.jpeg "Web Architecture")

Since the web is a service, it works through a combination of
**clients which _make_ requests** and **servers (which _receive_ requests)**.

### HTTP Client

**HTTP Clients make or generate HTTP Requests.** Some types of clients are:

* Browsers - Chrome, Firefox and Safari.
* Command Line programs - [curl](http://curl.haxx.se/docs/)
and [wget](http://www.gnu.org/software/wget/manual/wget.html).

**HTTP Clients respond to HTTP Responses from a Web Server.** They process
the data being returned form a **Web Server, aka HTTP Server.**

### HTTP/Web Server

Two of the most popular **HTTP or Web servers** are
[Apache](http://httpd.apache.org/) and [Nginx](http://nginx.com/), But there
are lots different [web servers](http://en.wikipedia.org/wiki/Comparison_of_web_server_software)
out there. Some web servers are [written in Ruby](https://www.ruby-toolbox.com/categories/web_servers),
while others are written in other languages.

All **Web Servers** receive **HTTP Requests** and generate **HTTP Response **.
*We'll take a deeper look into these later.*

Often Web Servers are just the middleman, passing HTTP Request and Responses
between the client and web application.

> CFU client/server

### Web Applications

Are programs built by a developer, sometimes using a framework like Rails or
Express. These programs plug into a web server, process the **HTTP requests**
that the server receives, and generate **HTTP Responses**.

![HTTP Request and Response](images/http_req_resp.gif)

Lost? Here's the play-by-play.

1. A client sends a **HTTP Request** to a **HTTP Server** running on a remote machine. 
  * The **hostname**, given in the URL, indicates which server will receive the request. 
2. The **HTTP server** processes the **HTTP Request**. This may entail
passing the request to some **Web Application**, which creates a **HTTP Response**.
3. The response gets sent back to the client.
4. The client processes the response.

**How does the server know what the request is asking for? This is specified
by the URL**, a special kind of path that specifies where a **resource** can
be found on the web.

![URL](images/http1-url-structure.png)

> Technically, the term 'resource' refers to an abstraction that your
application uses; depending on what the application does. A resource might be
a 'Car', a 'Person', a 'User', or an 'Order Cart'. A single resource can be
represented in multiple different ways by the server, including a HTML, JSON,
PDF files, and images. What we really mean when we say 'resource' above is a
specific **representation** of a resource.

---

<a name = "demo"></a>
## HTTP: Demo (30 min)

Lets explore HTTP resources. We'll start by looking at HTTP requests and
responses using the Chrome Inspector.

![HTTP Request and Response](./images/http_request_response.jpeg "HTTP Request and Response")

* In Chrome, open up Chrome Inspector (*command + option + 'i', or ctrl + click and select 'inspect element'*).
* Select the Network tab. It should look something like this:

![Chrome Inspector](images/chrome_inspector.png)

* Next, go to the **URL** https://generalassemb.ly/

  You should be able to see a few HTTP Requests and Responses in the Network
  tab; for each request you'll see a **Path**, **Method**, **Status**, **Typ **,
  and **Size**, along with info about how long it took to get each of these
  resources.
  *Most of this information comes from the HTTP Request and Response.*

  * Some HTTP requests are for CSS, JavaScript and images that are referenced
  by the HTML.
  * Select `generalassemb.ly` in the Path column on the far left.
  * Select the Headers tab. **Headers** are meta-data properties of an HTTP
  request or response, separate from the body of the message.

### HTTP Request

The first word in the request line, **GET**, is the **HTTP Request's Method**.

![HTTP Request](./images/http_request.jpeg "HTTP Request")

**HTTP Request Methods:**  

* **GET** => Retrieve a resource. 
* **POST** => Create a resource. 
* **PATCH** (_or **PUT**, but **PATCH** is recommended_) => Update an
existing resource. 
* **DELETE** => Delete a resource. 

Of these, **GET** and **POST** are the most widely used.

**HTTP Request Structure:**

```
[http request method] [URL] [http version] 
[list of headers]

[request body]
```

*Notice, that the Request Header is separated from the Request Body by a new
line.*


**HTTP Request Method Example: (No Body)**

    GET http://vermonster.com HTTP/1.1 
    Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8 
    Accept-Encoding:gzip,deflate,sdch
    Accept-Language:en-US,en;q=0.8 
    Connection:keep-alive 
    Host:vermonster.com 
    User-Agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) 
    AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1659.2 Safari/537.36 

### HTTP Response

![HTTP Response](./images/http_response.jpeg "HTTP Response")

When a client sends a request, the server sends back a response; the standard
format for this response is:

```
[http version] [status] [reason] 
[list of headers]

[response body] # typically HTML, JSON, ... 
```

* HTTP version should be 1.1

**[Status Codes](http://en.wikipedia.org/wiki/List_of_HTTP_status_codes)**
have standard meanings; here are a few.

|Code|Reason|
|:---|:-----|
|200| OK
|301| Moved Permanently
|302| Moved Temporarily
|400| Bad Request
|403| Forbidden
|404| Not Found
|500| Internal Server Error

> CFU req/res
> CFU verbs

---
<a name = "codealong"></a>

## jQuery AJAX (20 minutes)

Vanilla JavaScript AJAX functionality gives us everything we need to make
http requests, however it takes 4-5 steps to make the call and get the
information back, without much other added benefit. Furthermore, certain
older browsers handle AJAX calls differently. We are already familiar with
jQuery's DOM helper methods. Just like with the DOM, jQuery has some very
useful convenience methods to interact with cross platform requests.

jQuery allows us to create quick get and post requests in one step, as
opposed to the above multiple steps.

```js
  // All we need to create a get or post request is use the get or post method
  $.get( 'https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD', function( r ) {
      // We get the data back from the request in the parameter we pass in the function
      console.log(r);
  });
```

Get and post methods are very useful and easy to work with, however there
will be scenarios where we need more granularity to handle our requests. The
`$.ajax()` method allows us significantly more granularity.

```js
  $.ajax({
      url: "https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD",

      // Tell YQL what we want and that we want JSON
      data: {
          // q: "select title,abstract,url from search.news where query=\"cat\"",
          format: "json"
      },

      // Work with the response
      success: function( response ) {
          console.log( response ); // server response
      }

      // Full list of options includes:
      // accepts: The content type sent in the request header that tells the server what kind of response it will accept in return
      // async: Set this options to false to perform a synchronous request
      // beforeSend: A pre-request callback function that can be used to modify the jqXHR object before it is sent
      // cache: Set this options to false to force requested pages not to be cached by the browser
      // complete: A function to be called when the request finishes (after success and error callbacks are executed)
      // contents: An object that determines how the library will parse the response
      // contentType: The content type of the data sent to the server
      // context: An object to use as the context (this) of all Ajax-related callbacks
      // converters: An object containing dataType-to-dataType converters
      // crossDomain: Set this property to true to force a cross-domain request (such as JSONP) on the same domain
      // data: The data to send to the server when performing the Ajax request
      // dataFilter: A function to be used to handle the raw response data of XMLHttpRequest
      // dataType: The type of data expected back from the server
      // error: A function to be called if the request fails
      // global: Whether to trigger global Ajax event handlers for this request
      // headers: An object of additional headers to send to the server
      // ifModified: Set this option to true if you want to force the request to be successful only if the response has changed since the last request
      // isLocal: Set this option to true if you want to force jQuery to recognize the current environment as “local”
      // jsonp: A string to override the callback function name in a JSONP request
      // jsonpCallback: Specifies the callback function name for a JSONP request
      // mimeType: A string that specifies the mime type to override the XHR mime type
      // password: A password to be used with XMLHttpRequest in response to an HTTP access authentication request
      // processData : Set this option to false if you don’t want that the data passed in to the data option (if not a string already) will be processed and transformed into a query string
      // scriptCharset: Sets the charset attribute on the script tag used in the request but only applies when the “script” transport is used
      // statusCode: An object of numeric HTTP codes and functions to be called when the response has the corresponding code
      // success: A function to be called if the request succeeds
      // timeout: A number that specifies a timeout (in milliseconds) for the request
      // traditional: Set this to true if you wish to use the traditional style of param serialization
      // type: The type of request to make, which can be either “POST” or “GET”
      // url: A string containing the URL to which the request is sent
      // username: A username to be used with XMLHttpRequest in response to an HTTP access authentication request
      // xhr: A callback for creating the XMLHttpRequest object
      // xhrFields: An object to set on the native XHR object

      /* Options definition referenced from http://www.sitepoint.com/use-jquerys-ajax-function/ */
  });
```
---

<a name = "lab1"></a>
## My Favorite Things: API-ify it! (40 min)

- Refactor your favorite things code to work with an API. In the starter code,
there is a small [nodejs server](starter-code/post_requests/server.js) which
has all of the API code. You **do not need to change or even understand this code**.
It's only there to provide functionality. You should replace the index.html
file with your index.html file from the fav things list assignment. You
should also bring in your main.js file from that assignment as well.
- Your program should:
  - Populate your list based on the data returned from the API
  - When you add things to the list, they should also be added to the API data

**Bonus**
  - When you remove things from the list, they should also be removed from
  the API data. This functionality does not yet exist, you'll have to
  implement it in the node code!


Getting started:

- cd into `starter-code/post_requests`
- Enter the command `npm install`
  - This will install all the server code for you (this may take a minute or so)
- When this completes you can now start your server with the command `node server.js`
- You will see an inspirational message!

At this point, you can now start editing the `index.html` - happy coding!


<a name = "lab2"></a>
## Open Weather Map: Independent Practice (30 min)

> Note: the following exercise is fairly challenging--if there's not enough
time for students to complete the exercise in class, you can have them start
it in class and complete it as homework.

Let's bring it all together. Open the [main.js](starter-code/jquery_ajax/main.js)
file. We will talk with a weather API, and retrieve weather information. Thus
far we have worked with just pulling static URLs. Follow the steps below.

  - Sign up for openweathermap.org and generate an API key.
  - User either $.ajax or $.get to pull weather current data for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
  - Print the temperature in console.
  - Bonus 1: add a form prompting user for the city and state.
  - Bonus 2: convert answer from kelvin to fahrenheit.

---
<a name = "conclusion"></a>
## Conclusion (5 min)

Make sure class objectives have been met:

- Reiterate the benefits of separation of concerns – API vs. Client.
- Identify all the HTTP Verbs & their uses.
- Implement an AJAX request with Vanilla JS.
- Implement a jQuery AJAX client for a simple REST service.

#### Additional Resources

- [jQuery: Ajax][1]
- [Sitepoint: jQuery Ajax][2]
- [MDNL JS Ajax][3]
- [Wikipedia: API][4]
- [What's an HTTP Request?][5]

[1]: https://learn.jquery.com/ajax/
[2]: http://www.sitepoint.com/use-jquerys-ajax-function/
[3]: https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started
[4]: https://en.wikipedia.org/wiki/Application_programming_interface
[5]: http://rve.org.uk/dumprequest
