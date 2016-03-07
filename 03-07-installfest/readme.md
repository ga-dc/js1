# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) InstallFest

### Learning Objectives

* Get to know your classmates, instructors, and staff members.
* Explain the structure of the course and tools that will be used.
* Discuss the benchmarks for assessments in terms of class participation, homework and unit projects.
* Install and configure Node.js, npm, Git and other command line tools.
* Identify common issues that might arise and solutions that will be used during the course.
* Practice programmatic thinking by writing pseudocode.

### Preparation

*Before this lesson, students should already be able to:*

- Create a basic website using HTML and CSS

> Note: We won't be covering HTML & CSS in this course. If students need review material, they can check out [Dash](https://dash.generalassemb.ly/projects) to get up to speed.

---

### Welcome to JavaScript Development! (15 min)

In this course we'll be learning the fundamental concepts of JavaScript in order to become better programmers and web developers.

#### Introductions

Give a brief introduction:

- why JS interests you
- what you hope to get out of the class
- experience (if any) with web development

----

### Structure & Benchmarks (10 min)

This course has 20 classes. We'll be starting off by learning the fundamentals of JavaScript including programming concepts such as data types, variables and loops. Basically, core concepts of programming. Then we'll move into object-oriented programming and learn how to pass around information and functionality within our programs. From there, we'll learn how we use JavaScript to manipulate websites and applications.

In addition to in-class participation, students are expected to complete three projects at the end of Units 1, 2 and 4.

| Class | Title |  | Class | Title |
| --- | :---: | --- |  --- | :---: |
| Lesson 0 | Installfest and Git(Hub) || Lesson 10 | Advanced APIs|
| Lesson 1 | JS on the Command Line || Lesson 11 | Lab Time |
| Lesson 2 | Data Types || **Project 2**  | Feedr - Your Personalized Feed Reader |
| Lesson 3| Collections and Loops || Lesson 12 | Prototypal Inheritance |
| Lesson 4 | Functions and Scope || Lesson 13 | Closures and This |
| **Project 1** | Slackbot ||Lesson 14| Intro to Crud and Firebase |
| Lesson 5 | Objects and JSON ||Lesson 15| Deploying Your App |
| Lesson 6 | Intro to DOM & jQuery || Lesson 16 |  Instructor Student Choice |
| Lesson 7 | DOM & jQuery Continued || Lesson 17 | Lab Time |
| Lesson 8 | AJAX and APIs ||Lesson 18 | Lab Time |
| Lesson 9| Asynchronous JS and Callbacks ||**Project 3** | Your Single Page App |
| | || Lesson 19 | Final Project Presentations |


---

### Set Up Slack (15 minutes)

We'll be using Slack to communicate in class. Follow the instructions below to sign up for slack.

* Visit the following [site](https://slack.com/downloads) to download the application.
* Sign up using your email and join your class Slack channel.
* Upload a profile picture to Slack.

---

### Brew, Git, Node and Atom (45 min)

We'll need to install a couple of tools that will be used through out the course. The instructions will vary depending on whether you have a Mac, Windows or Linux machine.

#### [Mac OS X](./brew-git-node-atom/readme.md#mac-os-x)

#### [Windows](./brew-git-node-atom/readme.md#windows)

#### [Linux (Ubuntu)](./brew-git-node-atom/readme.md#linux-ubuntu)

Once complete, please raise your hand and ask a member of the instructional team to verify that the installation was successful.

## Break (15 mins)

## Introduction to Git (40 min)

### What is Git?

**So what is Git, and why does it help us?**
Above all else, Git is a fast version control system, that allows you to efficiently handle projects large and small.

Here are some problems we face as developers, and how git solves them:

**Reverting to past versions**

Git allows us to make save points at any time. These save points are called
'commits'. Once a save point is made, it's permanent, and allows us to go back
to that save point at any time.
<!-- From there, we can see what the code looked like at that point, or even start building off that version. -->

**Keeping track of what each version 'meant'**

Every commit has a description (commit message), which allows us to describe
what changes were made between the current and previous commit. This is usually a description of what features
were added or what bugs were fixed.

Additionally, git supports tagging, which allows us to mark a specific commit
as a specific version of our code (e.g. '2.4.5').

**Comparing changes to past versions**

It's often important to see content of the actual changes that were made. This
can be useful when:
* tracking down when and how a bug was introduced
* understanding the changes a team member made so you can stay up-to-date with progress
* reviewing code as a team for correctness or quality/style

Git allows us to easily see these changes (called a `diff`) for any given commit.

**Fearlessness in making changes**

In developing software, we often want to experiment in adding a feature or
refactoring (rewriting) existing code. Because git makes it easy to go back to a
known good state, we can experiment without worrying that we'll be unable to
undo the experimental work.

#### Three components of a git repository

![](https://raw.githubusercontent.com/ga-wdi-lessons/git-intro/master/git-local.jpg)

1. The working directory
  - `git init` creates a git repo inside current working directory
  - `git init nameofrepo` creates a new folder and a git repo inside that
  - `git status`
2. The staging area
  - `git add .` adds changes from the working directory to the staging area
  - `git add <filename>` adds changes to filenames specified from the working directory to the staging area
3. The repo or commit
  - `git commit -m "commit message"` adds changes in staging area to the repository
  - `git log` shows

#### You do: Create a local git repository (5 mins)

1. Initialize a new git repository named github.io && `cd github.io`
  - `cd` allows you to change directories on the command line
2. Create a file or make changes to existing file
3. Stage your changes
4. Commit your changes
5. View list of changes
6. Repeat 2-5 at least two more times

### Intro to GitHub

GitHub is a social network that allows developers to host remote repositories. A remote repository is
a publicly (sometimes privately) accessible copy of a local repository.

#### Key Terms

![](https://raw.githubusercontent.com/ga-wdi-lessons/git-intro/master/git06.jpg)

* **remote** - another repository that can be syncronized with a remote
* **upstream** - the name for a remote read-only repository
* **origin** - the name for a remote read-and-write repository
* **github** - a service that hosts git remote repositories, and provides a web app to interact / collaborate on them
* **fork** - make a copy of a remote repo on github.
* **clone**  - download an entire remote repository, to be used as a local repository
* **fetch**  - downloading the set of changes (commits) from a remote repository
* **merge**  - taking two histories (commits),
* **pull**   - fetching changes and merging them into the current branch
* **push**   - sending changes to a remote repository and merging them into the specified branch
* **pull request** - ask the upstream maintainer to pull in changes from origin.
* **merge conflict** - when two commits conflict, and thus can't be merged automatically.

#### We do: Connect local repo to github


**Step 1: Creating and setting up a GitHub account**

1. Sign up for an account on GitHub.com.
2. Use [the following guide](https://help.github.com/articles/set-up-git/) to connect Git on your local machine to your GitHub account. You will need to either [save your GitHub password in Git](https://help.github.com/articles/caching-your-github-password-in-git/) or [generate SSH keys](https://help.github.com/articles/generating-ssh-keys/).
3. When you're done and have successfully tested your connection with GitHub, raise your hand to let the instructional team know.

**Step 2: Creating and pushing to your first repository**

1. Create a new repository on GitHub.com titled "username.github.io" (where "username" is your GitHub username)
2. ```cd``` into your ```~/Sites``` folder
3. Add the github repository as a remote and name it origin
  - `git remote add origin git@github.com:username/username.github.io`
8. Push your changes to GitHub and verify that the changes were received in the web interface
  - `git push origin master`
9. Try visiting https://username.github.io/ (where "username" is your actual GitHub username)

---

#### Extra Practice: [Haiku](https://github.com/ga-wdi-exercises/haiku)

---

## Garnet

Garnet is an application we use to track student attendance and progress. Please join
this class by clicking this link: https://garnet.wdidc.org/github/authorize?invite_code=d3a4640111f44b2dbd0b9811c417ac65

## Exit Ticket

Before you leave, please take ~3 minutes to complete [this exit ticket](https://docs.google.com/forms/d/1LNeV7Vf043jg_4A1cBlHvFQkT_GiQAsl2a14jJjgYO0/viewform?c=0&w=1).

This helps us help you! We'll review responses for each exit ticket before the next lesson.

## Conclusion (10 min)

* How was this installation process different than using a GUI? Why did we do it this way?
* What questions do you have about the course or the specific tools we installed today?
* What are the main components of a git repository and how do they relate?

## Further Resources

* [Try git](try.github.com)
* [Interactive Git Cheetsheet](http://ndpsoftware.com/git-cheatsheet.html)
* [Syncing with Git](https://www.atlassian.com/git/tutorials/syncing/)
* [Github Guides](https://guides.github.com)
* [Github Training](https://training.github.com/kit/)
* [Git Immersion - Interactive Course](http://gitimmersion.com/lab_05.html)
* [Pro Git](http://git-scm.com/book/en/v2) - An in-depth free PDF book for those wanting to understand git deeper
* [GitUp - Interactive Commit Visualizer](http://gitup.co)
* [Practice with Git](https://github.com/grayghostvisuals/practice-git)
