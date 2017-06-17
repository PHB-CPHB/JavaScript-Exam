# Period-2 Node.js, Express + JavaScript Backend Testing

## Explain and Reflect
### Why would you consider a Scripting Language as JavaScript as your Backend Platform.
- JavaScript is one of the most common used language for front-end development. Therefor is it easier for the developer to learn node.js, because its build in the same language.
- It's easy and fast to build and setup a working network application with node.js.
- Not a lot of code is required for an application to run.

### Explain Pros & Cons in using Node.js + Express to implement your Backend compared to a strategy using for example Java/JAX-RS/Tomcat

- Pros
    - You can make a good and responsive network application.
    - node.js can handle more request simultaneously as long as it is IO request.
    - It's easy to set up a REST-API.
    - It is very simple to implement server middleware, that will be executed between all requests.

- Cons
    - Java is good at handling CPU heavy tasks, Node.JS + Express is not.
    - Java as oppposed to Node.JS + Express is a strictly typed language which provides a certain security.

### Node.js uses a Single Threaded Non-blocking strategy to handle asynchronous task. Explain strategies to implement a Node.js based server architecture that still could take advantage of a multi-core Server.

- Solution 1 (built it)
    - Node.js does not come with the ability to handle more threads but with a libary this can be possible.

- Solution 2 (Multiple servers)
    - For scaling throughout on a webservice, you should run multiple Node.js servers on one or more machine/es, one per core and split request traffic between them. This provides excellent CPU-affinity and will scale throughout nearly linearly with core count. You could also put a load balancer in front of it. The load balancer will balance the load of incoming requests, thus achieving a multicore solution

### Explain, using relevant examples, concepts related to the testing a REST-API using Node/JavaScript + relevant packages
For the tests I have used chai and mocha.
- [Test](https://github.com/philliphb/JavaScript-Exam/JSPeriode2/JSTesting/test/calculator.js)

### Explain, using relevant examples, the Express concept; middleware.
Middleware functions are functions that you bind to the express instance and works as a way to configure/add functionality between requests:

- **Application level middleware**: Mount to all requests or specific endpoints to define routes.
- **Router-level middleware**: Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of express.Router().
- **Error-handling middleware**: Define error-handling middleware functions in the same way as other middleware functions, except with four arguments instead of three, specifically with the signature (err, req, res, next)):
- **Third-party middleware**: Add functionality.

Middleware is executed sequentially. Therefore the order of the middleware is important. If we for example wanted to use the bodyParser to retrieve the body of our request as JSON, we would need to put it before we use it.


```javascript
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

app.use(bodyParser.json());

router.post('/', function (req, res) {
    res.send(req.body);
});
```

### Explain, using relevant examples, how to implement sessions, and the legal implications of doing this.

```javascript
var session = require('express-session');
```

We enable the session with the following middleware:
```javascript
app.use(session({
    secret: '50ac41d0f8eff5655213',
    saveUninitialized: false,
    resave: true
}));
```

To retrieve the session, we can do the following on the `req` object, and also add properties to it:
```javascript
    var session = req.session;
    session.username = "Kasper";
```

A cookie consent has to be implemented on the site, if the cookie is used to track user behaviour.

### Compare the express strategy toward (server side) templating with the one you used with Java on second semester.
Node.JS and Express uses templating engines like Handlebars, Jade and EJS. Java uses templating engines like JSP. Java was never made to be suitable for web applications, and JSP is often seen as a makeshift solution.

**MVC**:
- Java: Model --> Controller --> Servlet --> JSP

- Express.js: Model --> Controller/Router --> Handlebars/Jade/EJS

Node.js + Express.js Example (Passing variables to a view in Express):
```javascript
router.get('/dashboard', isLoggedIn, function (req, res) {
    res.render('dashboard', {
        title: 'Dashboard',
        subtitle: 'Hello dashboard'
    });
});
```
Reciving
```html
<h1>{{title}}</h1>
<h2>{{subtitle}}</h2>
```

Java + JSP example (Passing variables to a view in Java)
```java
protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        RequestDispatcher rd = null;
        HttpSession session = request.getSession();
        session.setMaxInactiveInterval(30 * 60);

        session.setAttribute("title", "Dashboard");
        session.setAttribute("subtitle", "Hello dashboard");
        rd = request.getRequestDispatcher("dashboard.jsp");
        rd.forward(request, response);

}
```
Reciving
```jsp
<h1><%= session.getAttribute("title"); %></h1>
<h2><%= session.getAttribute("subtitle"); %></h2>
```

### Explain, using a relevant examples, your strategy for implementing a REST-API with Node/Express and show how you can "test" all the four CRUD operations programmatically using for example the Request package.
I first implemented a router.get api for a joke here:
MISSING PICTURE
- [api.js]()

Aswell as two GET requests and a POST request in the index.js:
MISSING PICTURE
- [Index.js]()

And handled it in App.js:
MISSING PICTURE
- [App.js]()


### Explain, using relevant examples, about testing JavaScript code, relevant packages (Mocha etc.) and how to test asynchronous code.
- Mocha: Mocha is a test framework running on Node.js and can be used to test synchronous and asynchronous functions. 
    -Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.
    - -> "describe" + "it".

- Chai: Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.
    - -> "should" + "expect" + "assert". 
    - request: Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.
```
//var expect = require("chai").expect;
const {expect} = require("chai"); //es6 way of doing it

describe("Testing async behaviour", function () {
    var foo = false;
    before(function (done) { //done callback
        setTimeout(function () {
            foo = true
            done(); // test fails without this
        }, 1000);
    });

    it("should pass (with done called)", function () {
        expect(foo).to.equal(true);
    })
})
```

Testing the indexOf method on an array with 3 values:
```javascript
var assert = require('chai').assert;
describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});
```

Working with hooks:

With its default “BDD”-style interface, Mocha provides the hooks before(), after(), beforeEach(), and afterEach(). These should be used to set up preconditions and clean up after your tests.
```javascript
describe('hooks', function() {

  before(function() {
    // runs before all tests in this block
  });

  after(function() {
    // runs after all tests in this block
  });

  beforeEach(function() {
    // runs before each test in this block
  });

  afterEach(function() {
    // runs after each test in this block
  });

  // test cases
});
```

### Explain, using relevant examples, different ways to mock out databases, HTTP-request etc.
I have used this mock test to test a GET method using chai but also using Nock.

Nock is a Node module for mocking HTTP requests. With Nock you can mock a HTTP request and make it always return a specific result.
MISSING PICTURE
- [Mock Test]()
