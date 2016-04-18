# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Advanced APIs

| Timing | Type | Topic |
| --- | --- | --- |
| 10 min | [Opening](#opening) | Introduction to Advanced APIs |
| 15 min | [Introduction](#introduction) | OAuth |
| 30 min | [Set Up](#setup) | LocalGram: Let's Get to Building! |
| 10 min | [Demo](#demo) | Starter Code Review |
| 20 min | [Codealong](#codealong1)  | Instagram OAuth |
| 1 hour | [Lab](#lab) | Lab |
| 20 min | [Share](#code-reviews) | Share Code
| - | [Bonuse](#bonus) | Local Storage
| 5 min |  [Conclusion](#conclusion)| Final Questions & Exit Tickets |

### Objectives
*After this lesson, students will be able to:*

- Generate API specific events and request data from a web service.
- Implement a geolocation API to request a location.
- Process a third-party API response and share location data on your website.
- Make a request and ask another program or script to do something.
- Access storage api and implement local storage.

### Preparation
*Before this lesson, students should already be able to:*

- Have a solid grasp on HTTP fundamentals.
- Know how to make an AJAX request with jQuery.

> Note: This lesson relies heavily on Instagram's API, which is subject to change. **Before you teach this lesson, be sure to test out all of the code below, as you may need to make adjustments to accommodate any changes that Instagram makes to its API.** Instagram also now requires new applications to undergo approval before granting full API access, so it's strongly reccommended that you set up your API credentials in advance (or use a set of credentials that have already been approved). API credentials that are sandboxed awaiting approval will be able to access the authenticated user's photos but not all public photos, so the below exercise should still work, albeit with a limited amount of content.

---

<a name = "opening"></a>
## Introduction to Advanced APIs (10 min)

Now that we have a background in consuming an API's data, let's go over what to do when an API requires you to make authenticated requests. Often times when dealing with third-party API's (google, twitter, etc.) access to certain endpoints are contingent upon being authenticated by the third-party's server. What this means is that for every time we ping the API it wants to know who we are, and more specifically, that we have the authority to GET/POST/PATCH/DELETE their endpoints. This process of authenticating with a third-party API is known as OAuth (Open Authorization). For today's lesson we will gain an understanding of how OAuth works, as well as other related API authentication concepts by building an app which shows user's Instagram photos posted in the vicinity of their current location.

---

<a name = "introduction"></a>
## OAuth (15 min)

> OAuth is an open standard for authorization. OAuth provides client applications a 'secure delegated access' to server resources on behalf of a resource owner. It specifies a process for resource owners to authorize third-party access to their server resources without sharing their credentials.
Citation: [wikipedia](https://en.wikipedia.org/wiki/OAuth)

For any company that wants to track the usage of their API on a user level, they will implement OAuth. So how exactly does it work? Let's breakdown the following diagram:

![OAuth flow](https://s3.amazonaws.com/f.cl.ly/items/382N1b0b0j3a3t1n0G0J/Image%202015-11-08%20at%2012.01.35%20PM.png)

OAuth Flow:

- User is redirected from our application to the third-party API we wish to authenticate with (let's go with Instagram).
- User logs into Instagram.
- Instagram redirects user back to our application with an **access token**.
- User can now make requests for resources from the third-party API with the provided access token. The access token is used by the Instagram server to verify User's authentication and authority to make requests.
- User receives resources from Instagram.

***Note:*** Having an access token does not mean you can perform any HTTP method on the resource provider's API, nor does it mean your request for any type of data will be granted. Each access token is accompanied with a "scope" of authority. This scope varies per API and user consent. For example, if you have ever logged into an app using OAuth (maybe you've logged into Spotify with Facebook) you are asked whether or not it is okay for the application to obtain certain information from the third-party API (profile picture, friends list, etc.).

---

<a name = "setup"></a>
## LocalGram: Let's Get to Building! (30 min)

The app we will be making will show our user an aggregate of the most recently posted Instagram pictures based off their location. Let's refer to our app as LocalGram. Fun times ahead!

Here are the steps we'll take in this endeavor:

- Get our Instagram developer credentials
- Create our initial view which will have a way for our user to perform OAuth
- Get User's location
- Ping Instagram endpoint with User's location and access token
- Parse through API response for images and put them into view

#### Which Instagram Endpoint Do We Hit?

The first part of creating an app is coming up with the idea. The second part is to find out whether or not the idea is even feasible.

Our idea is to find Instagram photos based off location. How do we go about figuring out if it's possible to do this? Well, we already know from our previous API lesson that in order to receive a resource from an API, the API must expose a specific endpoint that can be pinged for the wanted data. If we Google "Instagram endpoints" you should be able to find Instagram's [documentation on endpoints](https://instagram.com/developer/endpoints/). Take a second to explore the possibilities! Are your creative juices flowing with ideas for future possible apps you can make with Instagram's data? Alright, go ahead and see if you can find the endpoint we need for the app we're building today. You should find this:

![Instagram endpoint](https://s3.amazonaws.com/f.cl.ly/items/1c1r1B2D3h2H021x2h2N/Image%202015-11-08%20at%201.25.47%20PM.png)

As we inspect the Instagram endpoint, we can see that as long as we pass certain query values (latitude, longitude and access token) we will be given a response containing the images we want. Awesome! Now that we know our app idea is doable, let's start setting it up.

#### Get Instagram Credentials

> Note: Students should have already signed up for Instagram API credentials as homework. You will now quickly review the sign up process with them, to ensure they understand what all the information they entered in is and why it is needed.

The first step in working with a third-party API that requires authentication is to register your application with the API. The purpose of this is so what that the API, in this case Instagram, can give our app credentials to use in future requests so it can recognize who is asking for what information. Let's go ahead and get our credentials.

First and foremost, you must have an Instagram account. If you don't already have one, please sign up. Once you are signed in, visit Instagram's [developer site](https://instagram.com/developer/). Here you will see an option in the navbar to "Manage Clients". Click it. Once [here](https://instagram.com/developer/clients/manage/) register your application by clicking on the "Register a New Client" button. You should see the following:

![register client](https://s3.amazonaws.com/f.cl.ly/items/26180R00453o1D1q171i/Image%202015-11-08%20at%2012.55.00%20PM.png)

After you fill out the form you'll have:

![register client form](https://s3.amazonaws.com/f.cl.ly/items/2B2g2J1d1l200q190h44/Image%202015-11-08%20at%2012.57.36%20PM.png)

Most of the fields values should be pretty self-explanatory. However, _Valid Redirect URIs_ may not be as obvious. If you can recall the OAuth flow we went over earlier, do you remember the process of obtaining our beloved access token? After our user leaves our app to log in to Instagram, Instagram redirects them back to our app with the access token. So how does Instagram know where to send the authenticated user? Well that input value, `http://localhost:3000`, is how. We have not yet covered what `http://localhost:3000` is, but for now just know that it is the URI that our app will be connected to and so it is the URI we want Instagram to redirect to.

The last step is to turn on implicit Oauth flow, which we'll be needing for our app. Hit the "edit" button on your newly-created application. Next, hit the "security" button. You should see the screen below. What you're looking for is the checkbox that says "Disable implicit Oauth" next to it. **If this box is checked, make sure to uncheck it**. If you neglect to uncheck this box, your app will not work!

![Implicit Oauth](../../../resources/images/implicit_oauth.png)

Once you have completed registering your client, you will see your `CLIENT ID`, `REDIRECT URI ` and other information pertaining to your Instagram app on the ["Manage Clients"](https://instagram.com/developer/clients/manage/) view. In order to obtain an access token for our app, we must pass the client id of our app in our access token request to Instagram. Once again, the reason Instagram wants you to pass this credential with your request, is so that Instagram can track which third-party application (our application) is associated with which access token. Go ahead and read the [Client-Side (Implicit) Authentication](https://instagram.com/developer/authentication/) documentation to get a more detailed understanding on how we'll go about getting our token.

The process will consist of two steps:

- Sending our user to Instagram with the given URI (https://instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=token) to authenticate. Note how we pass our client id and redirect URI as query values.
- Upon their authentication they will be redirected back to our app with the `REDIRECT-URI` query value we provided. This URI should be the same URI we provided when registering our client. If it is not, Instagram won't recognize the URI as being "whitelisted" (given permission for use) and the redirect will not work. If all goes well, a new access token will be appended to the redirect URI.

---
<a name = "demo"></a>
## Starter Code Review (10 min)

Alright, now that all our Instagram configuration is setup, go ahead and open the starter code.

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Advanced APIs Lesson</title>

  <!-- bootstrap -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
  <!-- css -->
  <link rel="stylesheet" href="/style.css">
  <!-- jQuery CDN -->
  <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
</head>
<body>

  <div class="container-fluid sign-in-view">
    <div class="row text-center">
      <h1>Want to see what your neighbors are Instagramming?</h1>
      <button class="btn btn-default">
        <a href="">
          Click Here
        </a>
      </button>
    </div>
  </div>

  <div class="container-fluid text-center image-results-view">
    <h1>Here are the images in your neighborhood:</h1>
    <div class="images"></div>
  </div>

  <!-- js -->
  <script src="/app.js"></script>
</body>
</html>
```

Our starter code has an HTML file with bootstrap and jQuery libraries made available via CDNs. Also, there are CSS and JS files connected. The CSS styling gives our app some very basic styling and the js file doesn't contain any code...yet.

The body of our HTML file contains:

```html
  <div class="container-fluid sign-in-view">
    <div class="row text-center">
      <h1>Want to see what your neighbors are Instagramming?</h1>
      <button class="btn btn-default">
        <a href="">
          Click Here
        </a>
      </button>
    </div>
  </div>

  <div class="container-fluid text-center image-results-view">
    <h1>Here are the images in your neighborhood:</h1>
    <div class="images"></div>
  </div>
```

In a little bit we will be breaking up these two parent div nodes, showing them conditionally. Initially, only the top div, `.sign-in-view`, will show and be used for our user to perform OAuth and upon redirect, only the bottom parent div, `.image-results-view`, will show with a whole bunch of Instagram images appended to `.images` (this syntax denotes a div with a class "images").

---

<a name = "codealong1"></a>
## Instagram OAuth (20 min)

First things first, in order for our app to run on the http://localhost:3000 URI, we need to start a server. For help with this we will globally install the `http-server` node package on our machine:

`npm i -g http-server`

***note:*** `i` is short for install. `-g`, option g, will install the package globally, giving us a `http-server` command line tool.

Now in our terminal, from the path of our app (i.e. /JS_Materials/curriculum/lesson-plans/11-advanced-apis/starter-code) we can run the command `http-server -p 3000`. This command simply says start up a server on port 3000 for the code that is in the current path. For the purpose of today's lesson, you don't need to understand all the details of how this works, you just need to know that `http-server` is providing us an easy way to create an http server for our app. Go ahead and visit http://localhost:3000 in your browser. You should see:

![app](https://s3.amazonaws.com/f.cl.ly/items/1b2K2S1I27263m0a3a05/Image%202015-11-08%20at%207.24.44%20PM.png)

Great, now that our app is up and running, let's set up the OAuth so we can get our access token. Can you remember the OAuth flow?

First we're going to send our user to Instagram to authenticate with the Instagram given URI mentioned earlier, https://instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=token&scope=public_content. Be sure to configure the query values of the URI, client id and redirect URI. It should look something like, https://instagram.com/oauth/authorize/?client_id=fc3e98dd5a444732a87ae38f4072fcc4&redirect_uri=http://localhost:3000&response_type=token&scope=public_content.


```html
...
      <h1>Want to see what your neighbors are Instagramming?</h1>
      <button class="btn btn-default">
        <a href="https://instagram.com/oauth/authorize/?client_id=fc3e98dd5a444732a87ae38f4072fcc4&redirect_uri=http://localhost:3000&response_type=token&scope=public_content">
          Click Here
        </a>
      </button>
...
```

We've configured the `href` attribute of `a` so that a user can be taken to Instagram to login and where upon authentication, they will be redirected back to our site with an access token. This is the first process of OAuth.

Make sure you are signed out of Instagram and go ahead and refresh your browser window and click on the button. You will be sent to an Instagram login page where after a successful login you'll be redirected back to our app. When redirected, you'll notice that the URI is a little bit different than what it was originally. It'll look something like, http://localhost:3000/#access_token=1116277938.0c3e98c.06688425d4724646852e007784a46025. Bam! We have our access token!

---
<a name = "lab"></a>
## Code it up! (1 Hour)
![handleResponseSuccess()](https://s3.amazonaws.com/f.cl.ly/items/1b1U153E281w3M0r3N29/Image%202015-11-08%20at%2010.19.21%20PM.png)

> Note: If you do not see any images and your code appears to be correct, it is likely because your API credentials are sandboxed (see note at the top of this lesson) and you are only pulling in photos from your own account. If you haven't previously posted any photos to Instagram from nearby, the API call will return no results. There's a simple fix for this: have post a photo to your account from the classroom! This should allow you to display a result on your page - you can always delete the test photo afterward.

---
<name ="code-reviews"></a>
## Show Code!

![baby](https://media.giphy.com/media/Eri9d5pto0X60/giphy.gif)

---
<name ="bonus"></a>
## Bonus

Every time we refresh the page, we need to reauthorize the app. Try to use local storage to store the access token. That way, we can check local storage for the token when the page loads. If we find the token, we can skip the sign in! Otherwise, business as usual!


---
<a name = "conclusion"></a>
## Conclusion (5 min)

Review class objectives and the following questions:

- What is the OAuth flow?
- Why do some third-party APIs require authentication?
- What does it mean to store data locally?
- What are the two main types of local storage and how do they differ?
- What is the purpose of JSONP?
- Go ahead and refactor your code as much as possible. Make it DRY!
- Experiment with sessionStorage. See if you can get the app to work on a session basis.

### Before Next Class
|   |   |
|---|---|
| **UPCOMING PROJECTS**  | [Project 2: Feedr](../../projects/unit2) |
