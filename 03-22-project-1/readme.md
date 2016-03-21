# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Unit Project #1: Slackbot

### Overview

We've been using Slack to communicate with each other for the first couple weeks of the class. Now it is time to build our very own Slackbot to add a fun interactive component to the chat room. A Slackbot is an integration into slack that can either respond to specific phrases that are mentioned in Slack or they can post things from outside of slack into a channel or private conversation. There are now entire startups built on top of Slackbots. For example, people have built Slackbots that let you hail an Uber from them or schedule meetings with different members of your team (where it searches your Google Calendar). One of the most popular Slackbot's lets people post random gifs based on phrases into a channel from Giphy.

For our first project, we are going to keep things simple. We will build a Slackbot on top of the popular Github bot called [Hubot](https://github.com/slackhq/hubot-slack). Hubot is a robot that was created by GitHub, that automates their company chat. Hubot can deploy their site, be a source of fun comments and also can automate a lot of their daily tasks. It is powerful, but it is also built in a way that we can build whatever we want on top of it.

Hubot scripts are generally written in CoffeeScript, which is a JavaScript scripting language. They also take vanilla JavaScript, which is what we will be using. Your bot can respond to whatever you like, but should do at least 3 different things.

>Instructors will need to configure Hubot integrations and generate API tokens for your students to use. [Click here](https://my.slack.com/services/new/hubot) to configure a new Hubot. Once your Hubot has been configured, edit that configuration in order to access its API token.

Hubot has a few basic functions:

__Respond__

Using the Respond command, will search through a series of text that you give it and if it sees the text in the Slack channel, this function will execute. You can then use the Send command to post a message to the channel.

__Send__

Send lets you send a message to the Slack channel. We usually use this hand-in-hand with respond. For example, when someone says something (i.e. 'Hi') on the channel, we respond by sending "Howdy". Of course, it will only send or respond based on the commands and words you teach it (by adding it to your code).

__Reply__

Reply lets you reply to a certain user or to the person who sent the original message. This includes the @ in front of the user's name so they get alerted.

__Random__

Hubot also has a random script which is pretty nifty so we don't need to write custom JavaScript for that. It will return a random result based on what you give it. Check out the starter code for some examples.

---

### Technical Requirements

Your app must:

* Have a message post to Slack based on user input
* Do at least 3 different things.
* One of the commands must **utilize the list of people in the class to send a direct message or reply**.
* Leverage [Hubot](https://github.com/slackhq/hubot-slack)
* Use at least 1 conditional to change the outcome of a Slackbot.

#### Bonus

* Leverage a for loop to iterate over a collection
* Introduce a random component
* Include an image in the response in addition to text

---

### Necessary Deliverables

* A **working Slackbot, built by you**, that can be run locally.
* A **new git repository hosted on Github**, where codebase is maintained.
* **A ``readme.md`` file** with explanations of what your bot does, what commands it responds to, the approach taken, installation instructions, unsolved problems, etc.
* A 5-10 minute **presentation** including 3 technical hurdles, 2 new things you learned, Q&A.
---

### Suggested Ways to Get Started

* Review existing Slackbots and Hubots for inspiration.
* Begin by writing down what your different commands will be and expected outcomes before writing any code.
* Write pseudocode before writing any code.
* Get Hubot working out of the box before writing any custom code.
* Test small pieces of functionality frequently to make sure everything is working.
* Use tools such as Stack Overflow, Google and documentation resources to solve problems.

---

### Potential Project Ideas

##### Class today
Ask your bot whether we have class today or not. Use JavaScript to check today's date and then respond back with whether we have class or not.

##### Random quote
Use an array to store a number of your favorite quotes. When you ping your bot, have it return a random quote from your list.

---

### Useful Resources

Key Resources
* [Hubot Slack](https://github.com/slackhq/hubot-slack)
* [Slack API Documentation](https://api.slack.com/bot-users)

Examples
* [Hubot Ship It](https://github.com/hubot-scripts/hubot-shipit)
* [Slackbot Community](https://api.slack.com/community)
* [Hubot scripts](https://github.com/github/hubot-scripts)

Advanced Reading
* [Great in-depth tutorial on writing a Slackbot](http://www.michikono.com/2015/07/10/in-depth-tutorial-on-writing-a-slackbot/)
* [Hubot scripts explained](http://theprogrammingbutler.com/blog/archives/2011/10/28/hubot-scripts-explained/)
* [Create your own chatbot with Hubot & Coffeescript](http://www.slideshare.net/rscaduto/hubot-talk)
* [Getting Started with Slackbots](http://www.sitepoint.com/getting-started-slack-bots/)

---

### Project Feedback + Evaluation

Students will create a new repository on GitHub called "my-first-slackbot" and push their code to this new repository when they are ready to submit.

The instructional team will grade each technical requirement and provide a numeric grade on a scale.

* __Technical Requirements__: Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

* __Creativity__: Did you added a personal spin or creative element into your project submission? Did you deliver something of value to the end user (not just a hello world response)?

* __Code Quality__: Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors have in class?

* __Total__: Your instructors will give you a total score on your project between:

    Score | Expectations
    ----- | ------------
    **0** | _Does not meet expectations._
    **1** | _Meets expectactions, good job!_
    **2** | _Exceeds expectations, you wonderful creature, you!_

This will serve as a helpful overall gauge of whether you met the project goals, but __the more important scores are the individual ones__ above, which can help you identify where to focus your efforts for the next project!
