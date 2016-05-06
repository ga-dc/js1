# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Deploying Your App 

<a href='https://vimeo.com/165443421'>
  <img src='https://dl.dropbox.com/s/rhaz8izly3spri9/Screenshot%202016-05-05%2011.48.42.png?dl=0'>
</a>

## Introduction

So far everything we have developed has been developed _locally_, meaning what we've been building exists solely on our machines. Though we ultimately want to share our beautiful programs with the world, it is important to first develop our ideas in a local environment. Why do you think that is? For one, developing locally requires a lot less. For example, we don't even need an internet connection to be able to see our programs render! Also, why would we want to push brand spanking new code live to a production environment for all the world to see? Undoubtedly, we're going to want to make some changes and we don't need our users seeing every iteration of our thought process in their browsers. Yet, possibly the biggest reason programmers develop locally is for the mere fact that we can better control the environment we are working in. That is to say, it's easier to determine what allows the program to work as well as what is causing it issues. Once you _deploy_ your code into the world, your program enters a _production_ environment where more outside variables are bound to exist, variables we must account for in order to have a successful deployment. However, don't let the production world intimidate you, today's lesson seeks to take your skills to the next level as we learn to deploy and deploy well. By the end of this lesson you will be able to successfully push your code for the world to see and further, you'll understand the mechanics of how deployment and hosting work.

---

<a name = "introduction1"></a>
## Deployment Introduction

> Deployment encompasses all the processes involved in getting new software or hardware up and running properly in its environment, including installation, configuration, running, testing, and making necessary changes. Citation: [whatis.techtarget.com](whatis.techtarget.com)

In the development process we eventually get to a point where we wish to share our program with the world. But how exactly do we go about sharing? As you probably already know, in order to make our applications accessible to any computer in the world we must put it online, the internet must _host_ our code. The process of serving our application to the internet for it to host is known as _deployment_. But before we get into the technicalities of deployment, we must first understand our hosting options so we know where to deploy to.

Over the time of this course we have come to learn how to build two different types of programs: static sites and applications. Every time we coded a program that consisted solely of HTML, CSS and JS we created a static web page. These _static sites_ are purely _front-end_ applications in the sense that their data is static, it's served once and never dynamically updated. Then, when we introduced CRUD to our programs we started to build full-stack _web applications_. In computing, a web app is defined as a client-server (front-end; back-end) software application where the client runs in the browser. In respect to what we've been building, the HTML, CSS and JS are considered the client, and Firebase would be considered the server-side.

The reason we need to differentiate between these types of programs, static sites and applications, is because there are a plethora of hosting options out there who are all best suited to host one of these types of programs, but not both. We will cover a host provider for each type.

---

<a name = "demo1"></a>
## Deploy with GitHub Pages - Demo

When it comes to hosting a simple static site, such as a portfolio site, GitHub Pages is an excellent option. When you originally created your GitHub account in the beginning of the course, GitHub provided you with some free hosting benefits. With your GitHub account, you are allowed to host one site per each organization you have with GitHub Pages for free!

> Note: Be sure to mention here that students **should never push API keys/secrets or other sensitive information up to GitHub**, as that information will likely be public and searchable. **Apps that require the use of API keys should be hosted using Heroku or another service that does not publicly expose your code**. Students using APIs that require authentication should use their API keys for local testing and in production but should never save these keys in their code if they intend to push it up to GitHub.

The following steps which will show you how to host a static site via GitHub Pages. After the demo, you will then go ahead and use these steps to host your very first site!

The first step is to create a new repository in [GitHub](https://github.com/)

![](https://s3.amazonaws.com/f.cl.ly/items/0i070B2z0g281N1O121N/Image%202016-01-05%20at%207.59.14%20PM.png?v=f87cabf8)

Unlike other GitHub repos you may have made before, the repository name is not arbitrary and must follow a certain structure, `<username>.github.io`. If the first part of the repository doesn’t exactly match your username, it won’t work, so make sure to get it right.

Next, clone your repository. In your terminal, go to the folder path where you want to store your project, and clone the new repository:

`git clone https://github.com/username/username.github.io`

If you see the following warning, don't worry about it:

![](https://s3.amazonaws.com/f.cl.ly/items/0E2E1n21450j3W3X473K/Image%202016-01-05%20at%208.17.48%20PM.png?v=5debf067)

Our repository is currently empty but we'll now fill it up with code for our site.

Change directory into the repo's folder:

`cd username.github.io`

and add a view, `index.html`:

`touch index.html`

I'll go ahead and give `index.html` a simple `h1`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
  <h1>Hello World!</h1>
</body>
</html>
```

Now that the site is at a point where we can see something let's "push to production" and have GitHub Pages host our view. Since GitHub knows we want our code hosted based off the repository name we provided, all we have to do to deploy is push our code to GitHub like we normally would and GitHub Pages will take care of the rest. Do you remember the three main steps in using git to push code from local (our machine) to remote (GitHub)?

1. Add modified files and prepare for staging: `git add -A`
2. Stage your newly modified code and log it with a message: `git commit -m 'first commit'`
3. Push your code to your remote repository in GitHub: `git push origin master`

**Note:** When you push for the first time you need to add the option `-u` (upstream) to set the initial direction of your push. The first push will look as follows, `git push -u origin master`.

**Tip:** To better remember the three commands, `add`, `commit` and `push`, it may help you to remember this acronym for `ACP`, "always creating programs".

And that's it! The code has been deployed and if you visit the site, whose name is the same as the repository name, in this case, asaldivar.github.io, you can see the code hosted!

![](https://s3.amazonaws.com/f.cl.ly/items/0d402V2b441K3O3u0v0E/Image%202016-01-05%20at%209.53.44%20PM.png?v=01751fc6)

<a name = "demo2"></a>
## How Is This Working?!

So now that you know how to deploy a simple site to a hosting service, you may be asking yourself, how exactly does the hosting work? I pushed my code somewhere into the wild world of the "interwebs" but how is it existing in the beyond? In one word, servers.

> A server is a computer program or a machine that waits for requests from other machines or software (clients) and responds to them. The purpose of a server is to share data or hardware and software resources among clients. This architecture is called the client–server model. - wikipedia

In terms of web applications, the main purpose of a server is to listen to requests coming from clients (i.e. browsers) and upon each request the server responds with the appropriate resources to fulfill the request. This could be the server redirecting to a whole new page and/or just providing some more data to the user interface. When we pushed our code up to GitHub for GitHub Pages to host we essentially told GitHub Pages that we'd like to utilize their server to deliver our resources (HTML, CSS and JS). More specifically, we told GitHub Pages that whenever someone comes to `username.github.io` serve all the code from `username/username.github.io`.

This brings us to our next point. What if we built out a full-stack application that already has a server? In our last lesson we utilized the BEaaS, Firebase, to build an application. What does BEaaS stand for again? _ǝɔᴉʌɹǝs ɐ sɐ puǝ-ʞɔɐq_ With Firebase, we were given a back-end and with that, a server. Can you see where we're going with this? If we have an application that already has its own server, would it still be appropriate to use a hosting service, like GitHub Pages, that provides our program with a server? The answer is no. Let us now look into another hosting option that is better suited for full-stack applications, not static sites.

## Further Resources

- https://pages.github.com/
- https://help.github.com/categories/github-pages-basics/
- https://help.github.com/articles/using-a-custom-domain-with-github-pages/
