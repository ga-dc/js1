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
