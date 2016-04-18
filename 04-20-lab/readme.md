# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) In-class Lab: Feedr (3:00)

>Note: This class session is intended to help students begin the [Unit 2 Feedr project](../../projects/unit2/project-02.md). Since this is a challenging project, the objective of this lesson is to ensure that all students are set up and know how to get started on the project. This likely will not require the full three hours, so feel free to use a portion of the class time to review any concepts students have struggled with or which you were unable to get to in previous lessons. Any remaining time can be used as "lab time" for students to work on their Unit 2 project.


| Timing | Type | Topic |
| --- | --- | --- |
| 120 min | [Lab](#lab) | APIs, DOM, JS Fundamentals |

## Objectives

>Instructor Note: Make sure the following objectives have been met by the end of the lab session:

* Familiarize yourself with the API documentation news sources .
* Learn how to parse through API documentation.
* Understand how to successfully retrieve information from APIs.
* Fork and clone your starter code.
* Strategize ways to hide the loader and replace the content of the `#main`
container with that of the API.
* Look up other news sources that might be useful for the project.
* Understand how to implement handlebars in the project (optional for the final product).


### Overview

<a name = "lab"></a>
For today's class you'll be getting your Feedr project set up.Our
feed reader will pull feeds from our favorite blogs. The user will be able to
filter between publications through the dropdown on the header menu.
Clicking/tapping on one of the articles will load a pop up with more
information. The user from that point will be able to either dismiss the
additional information or go to the referenced article.

This will be our first single page app. All of our application views will be
contained in the provided [index.html](../../projects/unit2/) file. Our task, after we pull from the
respective feed APIs, will be to toggle the appropriate classes and content for
the provided site architecture.

You'll give the user the ability to pull from a minimum of three news sources. You can
select the three provided news sources and/or add your own:

- [Mashable: http://mashable.com/stories.json](http://mashable.com/stories.json)
- [Reddit: https://www.reddit.com/top.json](https://www.reddit.com/top.json)
- [Digg: http://digg.com/api/news/popular.json](http://digg.com/api/news/popular.json)

Get started by opening up the [Unit 2 project starter code](../../projects/unit2/).


### Getting Started

Begin by "forking" the starter code repository. You can do so by clicking the "Fork" icon on
the top right of [this](https://github.com/generalassembly-studio/JS-Unit-2-Project-Starter-Code) page. Once
complete, clone the repository to your computer by running the following
commands:

```
cd ~/Sites/
git clone https://github.com/<your-username-here>/feedr.git
cd feedr
```

You can then open Sublime Text and point it at the `~/Sites/feedr` directory and
work on the below steps. As you accomplish a feature, be sure to commit it in
Git with the following commands:

```
git add .
git commit -m "A description of what was added"
git push -u origin master
```


## Suggested Ways to Get Started

> Below are some more specific ways for ways in which you can help students get started on the project.

  - Start by adding all the DOM functionality first.
  - Map out all of the needed fields/properties from each respective feed.
  - Start by doing a console.log of the incoming feeds to confirm you have a
    successful transaction before you start mapping anything out.
  - Make sure you have the [JSON View chrome extension](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en)
    to get a clean view of the JSON dump in your browser.
  - Think about ways to best standardize all of your incoming data.
  - Test small pieces of functionality frequently, to make sure everything is
    working.
  - Use tools such as Stack Overflow, Google and documentation resources to solve
    problems.

  ---
