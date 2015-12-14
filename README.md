# Web Engineering 2015-2016 /Node.js
[![Build Status](https://travis-ci.org/SirBargus/Laboratory-4-WebSockets.svg?branch=node)](https://travis-ci.org/SirBargus/Laboratory-4-WebSockets.svg?branch=node)

A simple transformation of Laboratory-4 into Node.js with a simple html + javascript frontend.

## What is ...?
### Node.js
[Node.js](https://nodejs.org/en/) is an open-source, cross-platform runtime environment for developing server-side web applications. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. 
### Node Twitter
Node twitter is a simple framework for use api twitter in node apps.

## Install Node.js and NPM
### Ubuntu

On the latest version of Ubuntu, you can simply:

```
$> sudo apt-get install nodejs nodejs-dev npm
```

On earlier versions, you might need to update your repository:

```
$> sudo apt-get install python-software-properties
$> sudo add-apt-repository ppa:chris-lea/node.js
$> sudo apt-get update
$> sudo apt-get install nodejs nodejs-dev npm
```

### OS X
As simple as:

```
$> brew install node npm
```

### Windows
Since Windows package managers are less common, I recommend just downloading the [Windows binary](https://nodejs.org/download/).


### Other Linux distributions or more info
Just see [this](https://github.com/nodejs/node-v0.x-archive/wiki/Installing-Node.js-via-package-manager).

## How to run?
### Add your keys
Change the file config.json with your api keys.

### Install dependencies
To install dependencies with npm:

```
$> npm install
```

### Run server

To run application:

```
$> node app.js
```
Your app should now be running on ```http://localhost:8080```

## The app's structure
This is a very simple app, so you should be able to understand it with the code and it's comment. This is a little explination about the app's structure:

```
package.json (NPM configuration)
app.js (Prepare the server and lunch it)
rout.js (Server logic)
conf.json (App's config.)
public
	|-index.html (Frontend: HTML + Angularjs)
```
## Want to learn more?
If you want to know more about Node.js check this:

1. [Planet Node.js](http://www.planetnodejs.com)
2. [Node.js](https://nodejs.org/en/)
3. [reddit/r/node](https://www.reddit.com/r/node/)