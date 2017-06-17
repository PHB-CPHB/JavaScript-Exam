/**
 * JavaScript vs TypeScript
 */

// JavaScript
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = () => {
        return "Hello, " + this.greeting;
    };
    return Greeter;
})();
// TypeScript (Not allowed in .js needs to be .ts)
/*
class Greeter {
    greeting: string;
    constructor (message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
*/


/**
 * Variable/function-Hoisting
 */

foo(); 
function foo(){} 

// Result
/*
 function foo()\{}
foo();
*/

/**
 * Closures and the JavaScript Module Pattern
 */
// Closures
 var scope = "I am global";
    function getScope() {
        var scope = "I am local";
        return scope;
    }
    console.log(getScope()); // I am local
    console.log(scope); // I am global

// Moduel Pattern
        function Greetings(name) {

        return {
            greet: function() {
                return "Hi " + name;
            }
        }
    }

    console.log(Greetings("Kasper").greet()); // Hi Kasper


/**
 * Immediately-Invoked Function Expressions (IIFE)
 */

var v, getValue;

v = 1;
getValue = (function (x) {
    return function () {return x;};
})(v);
v = 2;

getValue(); // 1

/**
 * JavaScripts Prototype
 */

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  var Kasper = new Person("Kasper", "Vetter", 24);

  Person.prototype.nationality = "Danish";

  var Phillip = new Person("Phillip", "Brink", "25");

  Phillip.nationality; // "Danish"
  Kasper.nationality; // "Danish"

/**
 * User defined Callback Functions
 */
// Return everything over 4
 var numbers = [0,1,2,3,4,5,6,7,8,9];
  
  // This will produce an array with [5,6,7,8,9]
  var filtered = numbers.filter(function (number) {
      if (number > 4)
        return number;
  });

// Add 1 to each number
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  
  // This will produce an array with [1,2,3,4,5,6,7,8,9,10]
  var filtered = numbers.map(function (number) {
      return number++;
  });

/**
 * Defined reusable modules
 */

 function Person(name, age) {
        var name = name;
        var age = age;

        return {
            setName: function(value) {
                name = value;
            },
            setAge: function(value) {
                age = value;
            },
            getInfo: function() {
                return {
                    name: name,
                    age: age
                }
            }
        };
    }

    module.exports = Person;


// reuse the Person
var Person = require('exams.js'); // Needs to be in another file.
    var Kasper = Person("Kasper", 24);
    console.log(Kasper.getInfo()); // {name: "Kasper", age: 24} 

/**
 * Let
 */

function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}

/**
 * Arrow function
 */

var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

var materialsLength1 = materials.map(function(material) { 
  return material.length;
});

var materialsLength2 = materials.map((material) => {
  return material.length;
});

var materialsLength3 = materials.map(material => material.length);

console.log(materialsLength1) // [8, 6, 7, 9] All 3 returns the same

/**
 * this
 */

console.log(this.document === document); // true

// In web browsers, the window object is also the global object:
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37

// set the f1 function to refer to this
function f1() {
  return this;
}
// In a browser:
f1() === window; // the window is the global object in browsers

// In Node:
f1() === global;

// Trying to set the f2 to refer to this but use strict wont allow it
function f2() {
  'use strict'; // see strict mode
  return this;
}

f2() === undefined;

/**
 * Rest Parameters
 */

function fun1(...theArgs) {
  console.log(theArgs.length);
}

function fun2(n, ...kasper) {
    console.log(n, kasper.length)
}
fun1();  // 0
fun1(5); // 1
fun1(5, 6, 7); // 3
fun2("Kasper",3,3,3,3,3) // Kasper 5

/**
 * Destructuring assignment
 */

var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```
Example, destructuring of data from an array:
```javascript
var foo = ['one', 'two', 'three'];

var [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"

/**
 * Map
 */

// Map
var myMap = new Map();

// Variables
var keyString = 'a string',
    keyObj = {},
    keyFunc = function() {};

// setting the values
myMap.set(keyString, "Kasper");
myMap.set(keyObj, 'Mikkel');
myMap.set(keyFunc, 'Phillip');

myMap.size; // 3

// getting the values
myMap.get(keyString);    // "Kasper"
myMap.get(keyObj);       // "Mikkel"
myMap.get(keyFunc);      // "Phillip"

myMap.get('a string');   // "Kasper" - because keyString === 'a string'
myMap.get({});           // undefined, because keyObj !== {}
myMap.get(function() {}) // undefined, because keyFunc !== function () {}

/**
 * Import and Export
 */

// Export
//------ lib.js ------
    export const sqrt = Math.sqrt;
    export function square(x) {
        return x * x;
    }
    export function diag(x, y) {
        return sqrt(square(x) + square(y));
    }

// Import
//------ main.js ------
    import { square, diag } from 'lib';
    console.log(square(11)); // 121
    console.log(diag(4, 3)); // 5

/**
 *  ES6 inheritance
 */

class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y) // "this" refers to the class 
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
}

// Class inheritance
class Rectangle extends Shape {
    constructor (id, x, y, width, height) {
        super(id, x, y)
        this.width  = width
        this.height = height
    }
}
class Circle extends Shape {
    constructor (id, x, y, radius) {
        super(id, x, y)
        this.radius = radius
    }
}
