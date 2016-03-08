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

    ### Helpful Debugging Tips

    __Error installing due to permissions__

    It is common when you are installing things on the terminal to run into permissions issues. In order to install command line utilities, you will need to be signed into a user account on your computer that has administrator-level rights. If you have trouble with this, please ask a member of the instructional team for help.

    __Google is your friend__

    Even experienced programmers Google error messages. If you have an error, there is a very high likelihood that someone else had the error as well. Copy and paste the error message you received into Google. A good reference site is StackOverflow. Make sure to remove any reference to your computer since that will be unique to you. Try to hone in on just the error message itself.


  >__Common Issues and Fixes:__

  >The following remedies are recommended in order to help resolve common issues that might arise during the installation of command line utilities:

  >* Some students with Macs may experience an issue where the outdated version of Git that was installed with Xcode is given precedence in the terminal. These students will need to adjust their shell path by following the instructions under "Trumping Xcode's Older Git" [in this article](http://coolestguidesontheplanet.com/install-update-latest-version-git-mac-osx-10-9-mavericks/).

  >* Students with Macs running OS 10.11 and later may need to [disable the System Integrity Protection](http://osxdaily.com/2015/10/05/disable-rootless-system-integrity-protection-mac-os-x/) on their machine before installing certain command line utilities.

  >* Students who run into an EACCES error, should change directory permissions to install Node and npm without having to use sudo:
  `sudo chown -R $(whoami) /usr/local/lib/node_modules`

  >* Students who have previously installed Homebrew on their machines will likely want to run `brew update` in order to update Homebrew to the latest version.

  >* Students who need to update their installations of npm can run `npm install -g npm`.

  >* Students with an existing, outdated installation of Node should be able to update their install by following the directions above (i.e. using the package installer).
