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
| Lesson 0 | Installfest || Lesson 10 | Advanced APIs|
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

## Introduction to Git/GitHub (40 min)

#### What is Git? What is Github?

* GitHub is a platform makes it easy to share and manage code and for multiple engineers to collaborate on the same project. It is now commonplace in any company that works with engineers.
* Stores files like Dropbox or Google Drive, but stores code.
* Stores a history of files and the changes that happens within each changed document (like Apple's Time Machine software).
* Hosts files on the web so you can share the finished product with other people.
* Git - the technology that Github is built on top of - was designed to allow for multiple engineers to work on the same project.

#### Why is GitHub Valuable? Why do developers use GitHub?

* Since GitHub stores a history of the code, it allows developers to go back in time if something breaks.
* GitHub allows multiple developers to work on the same project. Much like Dropbox or Google Drive lets multiple people collaborate on the same document, GitHub allows this for code.
* GitHub tracks changes so you can see who worked on what.
* GitHub allows for feedback to be given on the code, which hopefully, increases code quality. Much like an editor updates a Word document using Track Changes, GitHub allows a similar environment.

#### How does GitHub work in a collaborative environment?

GitHub's collaborative process can work many different ways, but this is the most common:

1. Each GitHub project is called a "repository". Engineers joining a team start by "cloning" the repository (or repo, for short).
    - "Clone" means that we are copying our GitHub repository from the cloud and saving it as a local folder on our computer.
2. The main, stable version of the codebase is on the default "branch" in GitHub which is called "master".
    - Engineers typically create new branches for certain features or portions of the code they will work on, but we won't be creating branches in this class.
3. As engineers are working on a project, they "add" and "commit" their changes. This establishes a saved version of a project and creates a history of what they are working on.  With these saved versions, engineers are able to revert to an earlier version if an issue arises that cannot be fixed.
4. If there are multiple engineers working on a project, other engineers can review the code that is committed and provide feedback.  For this class, the instructors will be reviewing and providing feedback on your code.
  - We will be working with our own default "master" branch for each of our projects.

#### Git/GitHub Vocabulary

* **git** - A version control program that saves the state of your project's files and folders; basically, it takes a "snapshot" of what all your files look like at that moment and stores a reference to that "snapshot".

* **repository** - A central location in which data - typically about a project - is stored and managed.
* **clone** - Download data from the cloud to your local machine (laptop, computer, etc.).
* **commit** - Save a version of your project to git.

![](https://raw.githubusercontent.com/ga-wdi-lessons/git-intro/master/git-local.jpg)

![](https://raw.githubusercontent.com/ga-wdi-lessons/git-intro/master/git06.jpg)

### GitHub Exercise

In this codealong, students will create their first GitHub repository and push to it.

**Step 1: Creating and setting up a GitHub account**

1. Sign up for an account on GitHub.com.
2. Use [the following guide](https://help.github.com/articles/set-up-git/) to connect Git on your local machine to your GitHub account. You will need to either [save your GitHub password in Git](https://help.github.com/articles/caching-your-github-password-in-git/) or [generate SSH keys](https://help.github.com/articles/generating-ssh-keys/).
3. When you're done and have successfully tested your connection with GitHub, raise your hand to let the instructional team know.

**Step 2: Creating and pushing to your first repository**

1. Create a new repository on GitHub.com titled "username.github.io" (where "username" is your GitHub username)
2. ```cd``` into your ```~/Sites``` folder
3. Clone the repository (hint: GitHub tells you how to do this with git clone ... on the newly created repository page) - use the SSH link.
4. ```cd``` into your ```~/Sites/username.github.io``` folder
5. Create a simple webpage, named index.html in your ```~/Sites/username.github.io``` folder
6. Add all files in the ```~/Sites/username.github.io``` folder to the Git stage
  - `git add .`
7. Commit your changes in Git with the message "Initial commit"
  - `git commit -m "Initial commit"`
8. Push your changes to GitHub and verify that the changes were received in the web interface
  - `git push origin master`
9. Try visiting https://username.github.io/ (where "username" is your actual GitHub username)

---


### Helpful Debugging Tips

__Error installing due to permissions__

It is common when you are installing things on the terminal to run into permissions issues. In order to install command line utilities, you will need to be signed into a user account on your computer that has administrator-level rights. If you have trouble with this, please ask a member of the instructional team for help.

__Google is your friend__

Even experienced programmers Google error messages. If you have an error, there is a very high likelihood that someone else had the error as well. Copy and paste the error message you received into Google. A good reference site is StackOverflow. Make sure to remove any reference to your computer since that will be unique to you. Try to hone in on just the error message itself.


>__Common Issues and Fixes:__

>The following remedies are recommended in order to help resolve common issues that might arise during the installation of command line utilities:

>* Some students with Macs may experience an issue where the outdated version of Git that was installed with Xcode is given precedence in the terminal. These students will need to adjust their shell path by following the instructions under "Trumping Xcode's Older Git" [in this article](http://coolestguidesontheplanet.com/install-update-latest-version-git-mac-osx-10-9-mavericks/).

>* Students with Macs running OS 10.11 and later may need to [disable the System Integrity Protection](http://osxdaily.com/2015/10/05/disable-rootless-system-integrity-protection-mac-os-x/) on their machine before installing certain command line utilities.

>* Students who run into an EACCES error, should [follow the instructions in this guide](http://www.wenincode.com/installing-node-jsnpm-without-sudo/) to install Node and npm without having to use sudo.

>* Students who have previously installed Homebrew on their machines will likely want to run `brew update` in order to update Homebrew to the latest version.

>* Students who need to update their installations of npm can run `npm install -g npm`.

>* Students with an existing, outdated installation of Node should be able to update their install by following the directions above (i.e. using the package installer).

---

## Garnet

Garnet is an application we use to track student attendance and progress. Please join
this class by clicking this link: https://garnet.wdidc.org/github/authorize?invite_code=d3a4640111f44b2dbd0b9811c417ac65

Then, visit https://garnet.wdidc.org/ , click "JS DC 1", then click "Check In"


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
