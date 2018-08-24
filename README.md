# Nodejs-and-Ruby-starter


# Node JS API

### Introduction
This repository consists of basic example of building an API with nodeJS.

### Getting started

Clone this repository using git clone.

    git clone

Install  nodeJS here is the download link
<a href = "https://nodejs.org/en/"> NodeJS download link  </a>.

### Running the program
This will start the server. In my cases server name is localhost: 3000.

    node server.js

Note:
I am using postman to test my requests.
<a href = "https://www.getpostman.com"> Postman download link  </a>.

### Installing Dependencies:

I used homebrew package manager for mac to install npm on my computer.

    $  brew install npm


To run the program first install npm in the directory you created the project in.

      $  npm install


To double check that the computer has npm installed run

    $  npm -v

If you already don't have npm on your computer you can download it by running the following command. Having nodeJS is a prequest to this.

#### Initializing dependencies 

    $ npm init
    
#### Installing express

We will be using express framework for our API. to download express run the following in the terminal.

    $ npm install --save express



#### Installing nodemon(Optional)

 It will watch the files in the directory it was started in, and if it detects any changes, it will automatically restart your Node application .This will allow us not to run node server.js
  every time we want to reload.

    $ npm install --save-dev nodemon


#### Installing body parser

body parser is another package that we will need to use to handle user input.


    npm install --save body-parser
