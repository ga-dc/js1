# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

#### Signing Up For Instagram Credentials

In the next lesson, we'll be doing an in-class exercise that uses Instagram's API. The first step in working with a third-party API that requires authentication is to register your application with the API. The purpose of this is so that the API owner, in this case Instagram, can give our app credentials to use in future requests so it can recognize who is asking for what information. Let's go ahead and get our credentials!

First and foremost, you must have an Instagram account. If you don't already have one, please sign up. Once you are signed in, visit Instagram's [developer site](https://instagram.com/developer/). Here you will see an option in the navbar to "Manage Clients". Click it. Once [here](https://instagram.com/developer/clients/manage/) register your application by clicking on the "Register a New Client" button. You should see the following:

![register client](https://s3.amazonaws.com/f.cl.ly/items/26180R00453o1D1q171i/Image%202015-11-08%20at%2012.55.00%20PM.png)

After you fill out the form you'll have:

![register client form](https://s3.amazonaws.com/f.cl.ly/items/2B2g2J1d1l200q190h44/Image%202015-11-08%20at%2012.57.36%20PM.png)

Most of the fields values should be pretty self-explanatory. However, _Website URL_ and _Valid Redirect URIs_ may not be as obvious. In both of these fields, enter in `http://localhost:3000`. Make sure you type in `http://localhost:3000` carefully, as the punctuation here matters!

The last step is to turn on implicit Oauth flow, which we'll be needing for our app. Hit the "edit" button on your newly-created application. Next, hit the "security" button. You should see the screen below. What you're looking for is the checkbox that says "Disable implicit Oauth" next to it. **If this box is checked, make sure to uncheck it**. If you neglect to uncheck this box, your app will not work!

![Implicit Oauth](../../../resources/images/implicit_oauth.png)

You're now ready to start working with the Instagram API during our next class!
