# Period-1 Vanilla JavaScript, es2015 ->, Node.js and Babel + Webpack
## Note: This description is too big for a single exam-question. It will be divided up into several questions for the exam
### Explain and Reflect:

####	Explain differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.

- Java is an OOP programming language while Java Script is a scripting language.
Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which may contain data, in the form of fields, often known as attributes; and code, in the form of procedures, often known as methods.

A scripting or script language is a programming language that supports scripts; programs written for a special run-time environment that automate the execution of tasks that could alternatively be executed one-by-one by a human operator.

- Java creates applications that run in a virtual machine or browser while JavaScript code is run on a browser only.
Because of this, it would be mostly handy to use an IDE for OOP programming, while a simple editor like VSCode is best for the scripting programming.

- Java is a statically typed language; JavaScript is dynamic.
- Java is class-based; JavaScript is prototype-based.
- Java constructors are special functions that can only be called at object creation; JavaScript "constructors" are just standard functions
Both of the languages have their constructors with a capital letter.

- Java requires all non-block statements to end with a semicolon; JavaScript inserts semicolons at the ends of certain lines.
- Java uses block-based scoping; JavaScript uses function-based scoping like callbacks.
- Java has an implicit this scope for non-static methods, and implicit class scope; JavaScript has implicit global scope.

####	Explain the two strategies for improving JavaScript: ES6 (es2005) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node, in (many different) Browsers

##### JavaScript: ES6(es2015) + ES7:

- The natural evolution of JavaScript, bringing features like arrow functions, Classes and Inheritance, promises, Generators and much more.

- Can be used in "all" browsers using a polyfil or a transpiler

- Can be used with NodeJS (almost) out of the box with LTS v6.x(Long Term Support stream), otherwise via a transpiler (Babel)

- Babel is a essentially an ECMAScript 6 to ECMAScript 5 compiler. It allows you to use ES6 features in your projects and then compiles ES5 for you to use in production.

- Available out of the box with newer versions of ReactJS
##### Typescript:

- A free open source language, developed and maintained by Microsoft. It is a strict superset of JavaScript, and adds optional static typing and many of the features from es2015 and es2016

- Can (obviously) be used in all browsers when compiled into ES5

- Can be used with NodeJS with a typescript compiler, which would be node.js or git.

- Angular 2 is designed to be written with TypeScript (but can also be used with ES 5 and es 2015)

####	Explain generally about node.js, and when it “makes sense” and npm, and how it “fits” into the node echo system.

##### Node.js:

Node.js is an event based, asynchronous I/O server side platform that runs on Google's V8 JavaScript Engine for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

###### What it's NOT

- Node.js is not a JavaScript framework.
- Node.js' V8 wrappers are not made in JavaScript but C.
- Node.js is not multi-threaded. It runs in a single thread with callback concept.

###### What it IS:

- Node.js is a server side platform which can execute JavaScript.
- Node.js is an open source platform to make real time network applications
- Node.js provides asynchronous, event driven I/O APIs.
- Node.js runs a single threaded event based loop, so all executions become non-blocking.

###### Pros & Cons

###### Pros:

- Asynchronous event driven I/O helps concurrent request handling.
- Provides the possibility to use the same language on both the server and client side.
- Allows you to use NPM - the Node Package Manager.
- Has an activate and vibrant community, with lots of free-to-use open source modules.

###### Cons:

- Dealing with relational databases are a pain.
- Nested callbacks can create confusion.
- Requires understanding of somewhat advanced JavaScript.
- Not suited for CPU-intensive tasks.
###### NPM

NPM is a package manager for Node.js with hundreds of thousands of packages, which you can include in your Node.js based projects. Using NPM can really speed up the process when building applications in Node.js. NPM allows Node.js to be lightweight, because you only include the features that you need, thus avoiding a bloated server side platform.

####	Explain about the Event Loop in Node.js

- When you read from a file, the calling thread blocks
- When you read from a network stream, the calling thread blocks
- Basically, when you do any IO, the calling thread block until the IO operation is done
- Threads were necessary to solve these blocking problems, with all the problems that comes with threads
- Node is using non-threaded, event driven model to create a non-blocking API as visualized in this figure 
![alt text](http://github.com/philliphb/JavaScript-Exam/JSPeriode1/EventLoop.png)
In computer science, the event loop, message dispatcher, message loop, message pump, or run loop is a programming construct that waits for and dispatches events or messages in a program. It works by making a request to some internal or external "event provider" (that generally blocks the request until an event has arrived), and then it calls the relevant event handler ("dispatches the event")

####	Explain (some) of the purposes with the tools Babel and WebPack, using a simple proof of concept example

- Babel is essentially an ECMAScript 6 to ECMAScript 5 compiler. It allows you to use ES6 features in your projects and then compiles ES5 for you to use in production.

- Webpack is a bundler for modules. The main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset. good Webpack notes

- Bundles ES Modules, CommonJS and AMD modules (even combined).

- Can create a single bundle or multiple chunks that are asynchronously loaded at runtime (to reduce initial loading time).

- Dependencies are resolved during compilation, reducing the runtime size.

- Loaders can preprocess files while compiling, e.g. TypeScript to JavaScript, Handlebars strings to compiled functions, images to Base64, etc.

- Highly modular plugin system to do whatever else your application requires.

####### Exampel

- index.html
show our html code with javascript support.

- main.js
our javascript code.

- Webpack.config.js
This file exports our project's webpack configuration object.

- main.css
this makes the title red.

- bundle.js
After running this command(Webpack -p), all our bundles will be minified, as you can see.

####	Explain the purpose of “use strict” and also Linters, exemplified with ESLint 

Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a "strict" operating context. This strict context prevents certain actions from being taken and throws more exceptions. Strict mode helps out in a couple ways:

- It catches some common coding bloopers, throwing exceptions.
- It prevents, or throws errors, when relatively "unsafe" actions are taken (such as gaining access - to the global object).
- It disables features that are confusing or poorly thought out.


### Explain using sufficient code examples the following features in JavaScript. 

####	Variable/function-Hoisting
At runtime the compiler will move variable declarations and function declarations to the top of the document.
- Example 1:
The javascript engine will automatically hoist the function declaration to the top:
´´´javascript
foo(); 
function foo(){} 
´´´
This is what it is going to look like at runtime:
- Example 2:
Only the declaration is hoisted, and not the assignment:
This is what it is going to look like at runtime:
####	this in JavaScript and how it differs from what we know from Java/.net.
####	Function Closures and the JavaScript Module Pattern
####	Immediately-Invoked Function Expressions (IIFE)
####	JavaScripts Prototype
####	User defined Callback Functions
####	E.
####	Provide examples of user defined reusable modules implemented in Node.js
### es2005 -->
#### Provide examples and explain the es2005 features: let, arrow functions, this, rest parameters, de-structuring assignments, maps/sets etc.
####	Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS.
####	Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.
####	Provide examples with es6, running in a browser, using Babel and Webpack
