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
<a name="opening"></a>
### Welcome to JavaScript Development! (15 min)

In this course we'll be learning the fundamental concepts of JavaScript in order to become better programmers and web developers. For this class, we'll be learning both functional and object-oriented programming. Understanding the core differences between these two different programming paradigms will help you learn the concepts in this class and ultimately, become a more efficient programmer.

* Object oriented programming is an attempt to structure imperative code. It makes models of the various concepts in the problem area and applies them. These models ("objects") are given functionality ("methods") that allow them to perform various actions, and each object can also hold information. The fundamental unit in OOP is the object, which can itself contain further objects, a bit like a Russian Matryoshka doll. The idea is to make it easier for human programmers to visualize the program by tying the program to concrete things, which lets you group things logically. **The fundamental thing to remember is that in object-oriented programming, _everything_ is an object and every object has methods that allow you to access its functionality.**

* Functional programming treats the problem area as a chain of equations ("functions") which are strung together, a progression of definitions which lead to the answer. The information begins as a number of axioms and culminates in the answer (think of it as a logical argument that ends in what you see on the screen). Functional programming borrows many concepts from formal mathematics, and as in mathematics (and unlike Imperative programming or OOP), it usually does not save data between steps. **The fundamental unit in functional programming is the function, which can perform operations as well as produce further functions.**

Citation: [Quora](https://www.quora.com/What-is-the-core-difference-in-laymans-terms-between-procedural-programming-and-object-oriented-programming)

#### Introductions

Give a brief introduction:

- why JS interests you
- what you hope to get out of the class
- experience (if any) with web development

----
<a name="introduction"></a>
### Structure & Benchmarks (10 min)

This course has 20 classes. We'll be starting off by learning the fundamentals of JavaScript including programming concepts such as data types, variables and loops. Basically, core concepts of programming. Then we'll move into object-oriented programming and learn how to pass around information and functionality within our programs. From there, we'll learn how we use JavaScript to manipulate websites and applications.

In addition to in-class participation, students are expected to complete three projects at the end of Units 1, 2 and 4.

| Class | Title |  | Class | Title |
| --- | :---: | --- |  --- | :---: |
| Lesson 0 | Installfest || Lesson 10 | Advanced APIs|
| Lesson 1 | JS on the Command Line || Lesson 11 | Lab Time |
| Lesson 2 | Data Types || **Project 2**  | Feedr - Your Personalized Feed Reader |
| Lesson 3| Collections and Loops || Lesson 12 | Prototypical Inheritance |
| Lesson 4 | Functions and Scope || Lesson 13 | Closures and This |
| **Project 1** | Slackbot ||Lesson 14| Intro to Crud and Parse |
| Lesson 5 | Objects and JSON ||Lesson 15| Deploying Your App |
| Lesson 6 | Intro to DOM & jQuery || Lesson 16 |  Instructor Student Choice |
| Lesson 7 | DOM & jQuery Continued || Lesson 17 | Lab Time |
| Lesson 8 | AJAX and APIs ||Lesson 18 | Lab Time |
| Lesson 9| Asynchronous JS and Callbacks ||**Project 3** | Your Single Page App |
| | | || Lesson 19 | Final Project Presentations |


---
<a name="install1"></a>
### Set Up Slack (15 minutes)

We'll be using Slack to communicate in class. We will also use this as the primary means to take attendance. Follow the instructions below to sign up for slack.

* Visit the following [site](https://slack.com/downloads) to download the application.
* Sign up using your email and join your class Slack channel.
* Upload a profile picture to Slack.

---
<a name="install2"></a>
### Brew, Git, Node and Sublime Text (45 min)

We'll need to install a couple of tools that will be used through out the course. The instructions will vary depending on whether you have a Mac, Windows or Linux machine.

#### Mac OS X

1. __Install Brew__

    Brew is a package manager that we use to install various command line applications to your computer.

    Open your terminal (`Applications > Utilities > Terminal`), paste the following command, and then hit enter:

    ```bash
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ```

2. __Install Git__

    Git is a tool used to track the state of your code over time.
    [GitHub](https://github.com) is a company that has made a business on top of
    the Git technology. We will be using both Git and GitHub in this class to distribute
    code, submit assignments and offer feedback.

    Once brew is installed, it's easy to install command line applications. The
    following command can be entered to install Git:

    ```bash
    brew install git
    ```

3. __Configure Git__

    Please copy and paste the following two commands (separately) into your
    terminal. You'll want to replace the name and email address values with your
    own.

    ```bash
    git config --global user.name "Steve Jobs"
    git config --global user.email "steve@apple.com"
    ```

4. __Install Node__

    Next up is installing Node.js. The best way to install it is from the package installer on their [website](https://nodejs.org/en/). Follow the steps to get it set up.

5. __Make sure NPM is updated__

    Node has a handy package manager that we will use frequently in our class. It comes with Node, but NPM is updated more frequently and we want to have the right one.

    ```bash
    npm install npm -g
    ```

6. __Install Atom__

    [Atom](http://atom.io) - you are free to use any code editor that you are comfortable with. Another popular choice is  Sublime Text and can be found [here](http://www.sublimetext.com/3).

Once complete, please raise your hand and ask a member of the instructional team to verify that the installation was successful.

#### Windows

2. __Install Git__

    Git is a tool used to track the state of your code over time.
    [GitHub](https://github.com) is a company that has made a business on top of
    the Git technology. We will be using both Git and GitHub in this class to distribute
    code, submit assignments and offer feedback.

    Git can be downloaded and installed from
    [this](https://git-scm.com/download/win) URL.

3. __Configure Git__

    In order to interact with Git, you'll need to first open the Git Bash utility.
    A quick way to access this terminal is by right clicking your desktop and
    choosing "Git Bash".

    Please copy and paste the following two commands (separately) into your
    terminal. You'll want to replace the name and email address values with your
    own.

    ```bash
    git config --global user.name "Steve Jobs"
    git config --global user.email "steve@apple.com"
    ```

3. __Install Node__

    Next up is installing Node.js. The best way to install it is from the package installer on their [website](https://nodejs.org/en/). Follow the steps to get it set up.

4. __Install Atom__

    Atom can be found [here](http://atom.io), but you are free to use any code editor that you are comfortable with. Another popular choice is [Sublime Text](http://www.sublimetext.com/3).

Once complete, please raise your hand and ask a member of the instructional team to verify that the installation was successful.

#### Linux (Ubuntu)

1. __Install Git__

    Git is a tool used to track the state of your code over time.
    [GitHub](https://github.com) is a company that has made a business on top of
    the Git technology. We will be using both Git and GitHub in this class to distribute
    code, submit assignments and offer feedback.

    Git can be installed by running the following command:

    ```bash
    sudo apt-get install build-essential git-core curl
    ```

2. __Configure Git__

    Please copy and paste the following two commands (separately) into your
    terminal. You'll want to replace the name and email address values with your
    own.

    ```bash
    git config --global user.name "Steve Jobs"
    git config --global user.email "steve@apple.com"
    ```

3. __Install Node.js__

    ```bash
    curl --silent --location https://deb.nodesource.com/setup_0.12 | sudo bash -
    sudo apt-get install --yes nodejs
    apt-get install --yes build-essential
    ```

4. __Installing Atom__

    [Atom](http://atom.io).


Once complete, please raise your hand and ask a member of the instructional team to verify that the installation was successful.


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
<a name="exercise"></a>
## Thinking Like a Programmer (25 min)

Thinking computationally requires a major shift in thinking. We need to really understand how computers think and follow our instructions (code) in order to become great programmers. The first step is to write anything we want our computer to do in plain English or pseudocode.

Pseudocode is an outline of a program, written in a form that can easily be converted into real programming statements. Pseudocode cannot be compiled nor executed, and there are no real formatting or syntax rules. It is simply one step - an important one - in producing the final code. The benefit of pseudocode is that it enables the programmer to concentrate on the flow of a program without worrying about all the syntactic details of a particular programming language. In fact, you can write pseudocode without even knowing what programming language you will use for the final implementation.

Citation: [Webopedia](http://www.webopedia.com/TERM/P/pseudocode.html)

### Pseudocode Exercise

Write the pseudocode for a program for that controls a light that can change color based on user input. Imagine that we have 3 different colored buttons (red, blue and yellow) and if a user taps one of the colored buttons the light changes to the selected color. If the selected color is tapped again, the light turns off. You do not have to write any actual JavaScript for this exercise.

> The purpose of this exercise is to introduce students to what it means to program. Follow the tips below:
* Give some background on pseudocode and why we use it.
* Explain that proper pseudocode should be written as a series of steps.
* Start the exercise as a class, trying to encourage participation and kicking things off together, then break off into pairs to complete the exercise.
* Finally come together as a group and have different pairs present their pseudocode line by line. Highlight variables, conditionals, and loops.
* Ask groups to identify common patterns and problems.
* Prompt students to consider communication differences between code and people.

Check the [pseudocode.md](solution-code/pseudocode_solution.md) file in the solution code folder for examples.

---
<a name="conclusion"></a>
## Conclusion (10 min)

Make sure the lesson objectives have been met.

* How was this installation process different than using a GUI? Why did we do it this way?
* What questions do you have about the course or the specific tools we installed today?
