# JSPeriode5 - React

>## Describe the term Single Page Application (SPA) and why it’s relevant for modern web-applications.
#### SPA Term:
A single-page application (SPA) is a web application or web site that fits on a single web page with the goal of providing a user experience similar to that of a desktop application. In an SPA, either all necessary code – HTML, JavaScript, and CSS – is retrieved with a single page load, or the appropriate resources are dynamically loaded and added to the page as necessary, usually in response to user actions. The page does not reload at any point in the process, nor does control transfer to another page, although the location hash or the HTML5 History API can be used to provide the perception and navigability of separate logical pages in the application. Interaction with the single page application often involves dynamic communication with the web server behind the scenes.

#### SPA Relevance:
- SPA is fast, as most resources (HTML+CSS+Scripts) are only loaded once throughout the lifespan of application. Only data is transmitted back and forth.

- The development is simplified and streamlined. There is no need to write code to render pages on the server. It is much easier to get started because you can usually kick off development from a file http://file://URI, without using any server at all.

- SPAs are easy to debug with Chrome, as you can monitor network operations, investigate page elements and data associated with it.

- It’s easier to make a mobile application because the developer can reuse the same backend code for web application and native mobile application.

- SPA can cache any local storage effectively. An application sends only one request, store all data, then it can use this data and works even offline.

A major architectural advantage of a SPA in many cases is the huge reduction in the "chattiness" of your app. If you design it properly to handle most processing on the client (the whole point, after all), then the number of requests to the server is dramatically reduced. In fact, a SPA makes it possible to do entirely offline processing, which is huge in some situations.

Performance is certainly better with client-side rendering if you do it right, but this is not the most compelling reason to build a SPA. (Network speeds are improving, after all.) Don't make the case for SPA on this basis alone.

Flexibility in your UI design is perhaps the other major advantage.

---

>## Describe fundamental differences between the SPA-framework/libraries AngularJS and React
### AngularJS vs React
The main differences between AngularJS (the framework) and React (the library) are in the following aspects: componentization, data binding, performance, dependency resolution, directives, and templating.

### Componentization
#### AngularJS
AngularJS has a very complex and fixed structure because it's based on the three layers — Model, View, and Controller — typical of single-page applications. An object $scope in AngularJS is responsible for the Model part, which is initialized by the Controller and then transformed into HTML to create the View for the user. AngularJS provides many standard services, factories, controllers, directives, and other components that will take some time for a JavaScript developer to master initially.

#### React
Components are the heart and soul of React. They let you split the UI into independent, reusable pieces, and think about each piece in isolation.

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.

Facebook, the creator of React, chose an architecture different from that of AngularJS and similar MVC frameworks. In short, there is no “correct" structure for applications built with React.

React is a large JavaScript library that helps us update the View for the user. But React still doesn't let us create applications on its own. The library lacks the model and controller layers. To fill in the gap, Facebook introduced Flux, which has numerous variants nowadays, to control the application workflow.

React provides a very simple and efficient way to build component trees. It boasts a functional programming style where component definitions are declarative. Composing your app from React components is like composing a JavaScript program from functions.

### Data Binding
#### AngularJS
AngularJS connects Document Object Model (DOM) values to Model data through the Controller using two-way data binding. In short, if the user interacts with an <input> field and provides a new value to the app, then not only the View is updated, but the Model as well. Two-way data binding is beneficial for AngularJS as it helps us write less boilerplate code to create interactions between components (the View and the Model) in our application. We don't have to invent a method to track changes in the app and change our JavaScript code accordingly.

The drawback of Angular's two-way data binding approach is its negative impact on performance. AngularJS automatically creates a watcher for each binding. During development, we may come to a point when an app is packed with too many watchers for bound elements.

#### React
But what are the advantages of React over AngularJS with regards to data binding? React uses one-way data binding, meaning we are able to direct the flow of data only in one direction. Because of this, it’s always clear where the data was changed.

![alt text](https://rubygarage.org/uploads/article_image/file/122/reactjs-vs-angularjs-data-flow.jpg)

In order to implement a unidirectional data flow in React, Facebook created its own application architecture called Flux. Flux controls the flow of data to React components through one control point – the dispatcher. Flux's dispatcher receives an object (they call it an action) and transfers it to an appropriate store, which then updates itself. Once the update is finished, the View changes accordingly and sends a new action to the dispatcher. It's only possible to transfer an action to the store when it’s fully updated. With this concept, Flux improves the effectiveness of the code base. Based on our own experience we can say that Flux is great when you work with dynamically updated data.

The one-way data flow in React keeps complexity under control. It's much easier to debug self-contained components of large React applications than it is with similarly large AngularJS applications.

### Performance
#### AngularJS
There are two things to take into consideration when we talk about Angular's performance. Angular 1.x and higher relies on two-way data binding. This concept is based on “dirty checking," a mechanism that can make our AngularJS application laggy.

When we bind values in HTML with our model, AngularJS creates a watcher for each binding to track changes in the DOM. Once the View updates (becomes “dirty"), AngularJS compares the new value with the initial (bound) value and runs the $digest loop. The $digest loop then checks not only values that have actually changed, but also all others values that are tracked through watchers. This is why performance will decrease a lot if your application has too many watchers. This drawback is even more painful when several values (Views) are dependent on each other. Once AngularJS sees that the change of a value was triggered by another change of a different value, then it stops the current $digest cycle and runs it all over again.

#### React
The creators of React introduced the concept of the virtual Document Object Model, which is regarded as one of the greatest advantages of React in comparison with mature frameworks, including AngularJS. How does the virtual DOM work? When our HTML document is loaded, React creates a lightweight DOM tree from JavaScript objects and saves it on the server. When the user, for instance, enters new data in the <input> field in the browser, React creates a new virtual DOM and then compares it with the previously saved DOM. The library finds dissimilarities between two object models in such a way and rebuilds the virtual DOM once again, but with new changed HTML. All this work is done on the server, which reduces load on the browser.

Now, instead of sending completely new HTML to the browser, React sends the HTML only for the changed element. This approach is much more efficient than what AngularJS offers.

### Resolving Dependencies
#### AngularJS
AngularJS uses a basic Object Oriented Programming (OOP) pattern called dependency injection, meaning we write dependencies in a separate file. It’s inconvenient to create a dependency directly in an object. In AngularJS, dependency injection is inherent to any standard functions that we declare for an AngularJS factory or service. We only pass dependencies as parameters in any order in our functions. This is where vanilla JavaScript is different from AngularJS, as the order of arguments in standard JS is strict.
```javascript
angular.module('todomvc')
// Angular injects four dependencies in the TodoCtrl function – $scope, $routeParams, $filter, and store;
.controller('TodoCtrl', function TodoCtrl($scope, $routeParams, $filter, store) {
  'use strict';
  var todos = $scope.todos = store.todos;
  $scope.newTodo = '';
  $scope.editedTodo = null;
});
```
AngularJS automatically finds appropriate objects that are injected as the $routeParams, $filter, store, and $scope parameters. There are two functions that make dependency injection possible in the AngularJS framework: $inject and $provide.

#### React
The difference between React and AngularJS with regards to dependency injection is that React doesn’t offer any concept of a built-in container for dependency injection. But this doesn't mean we have to think of a method to inject dependencies in our React project. You can use several instruments to inject dependencies automatically in a React application. Such instruments include Browserify, RequireJS, EcmaScript 6 modules which we can use via Babel and so on. The only challenge is to pick a tool to use.

### Directives and Templates
#### AngularJS
Directives in AngularJS are a way to organize our work/code around the DOM. If working with AngularJS, we access the DOM only through directives. For example, AngularJS has many standard directives, such as ng-bind or ng-app, but we can create own directives as well. And we should. This is a powerful way to work with the DOM. On the other hand, the syntax for making private AngularJS directives is rather difficult to understand.

We make our own directives in AngularJS to insert data into templates. The template must have an element with our directive written as an attribute. It's as simple as that. But AngularJS directives, if defined fully, are sophisticated. The object with settings, which we return in the directive, contains around ten properties. Such properties as templateUrl or template are easy to understand. But it’s not so clear how (and why) to define priority, terminal, scope, and other properties. Mastering the syntax of AngularJS directives may be a real challenge.

In summary, in order to bind DOM elements with AngularJS applications, we use directives, both standard and specific.

#### React
React doesn’t offer division into templates and directives or template logic. The template logic should be written in the template itself. To see what this looks like, open an example from GitHub. You will notice that React's component app.TodoItem is created with a standard React.createClass() method. We pass an object with properties to this function. Such properties as componentDidUpdate, shouldComponentUpdate, handleKeyDown, or handleSubmit represent the logic – what will happen with our template. In the end of the component, we usually define the render property, which is a template to be rendered in the browser. Everything is located in one place, and the JSX syntax in the template is easy to understand even if you don’t know how to write in JSX. It's clear what is going to happen with our template, how it should be rendered and what information will be presented for it by properties.

Such an approach of defining template and logic in one place is better as we spend less time initially on understanding what is happening.

### Summarization
To sum up, both AngularJS and React are great for writing single-page applications. But they are completely different instruments. Some programmers may say that React is better than AngularJS or vice versa. What’s really best for a given project, however, depends on how you use these instruments.

Working with React may seem a bit easier starting out, because you write old-school JavaScript and build your HTML around it. But there are many additional tools you'll have to grasp, such as Flux. In turn, AngularJS implements a different approach organized around HTML. That's why we may see unusual syntax and solutions that seem questionable at first sight.

---

>## Describe the overall principles used in React to create a SPA
### SPA Explanation and creation principles
A single-page application (SPA) is a web application that fits on a single web page with the goal of providing a user experience similar to that of a desktop application. 
In an SPA, either all necessary code – HTML, JavaScript, and CSS – is retrieved with a single page load, or the appropriate resources are dynamically loaded and added to the page as necessary, usually in response to user actions.

The page does not reload at any point in the process, nor does control transfer to another page, although the location hash or the HTML5 History API can be used to provide the perception and navigability of separate logical pages in the application

The task of navigating via URL's in a SPA is called Routing and is typically being handled by a specific Router Package There are several router-libraries out there, but the most commonly used is react-router

So when you create a react SPA it really boils down to the react-router and the components being routed to.

---

>## Explain, using an example, the fundamental building blocks in React Applications like:
### JSX
React uses JSX for templating instead of regular JavaScript. It is not necessary to use it, but there are some pros that comes with it.

JSX is faster because it performs optimization while compiling code to JavaScript.
It is also type-safe and most of the errors can be caught during compilation.
JSX makes it easier and faster to write templates if you are familiar with HTML.

#### JSX Example:
```javascript
import React from "react"

export default class JSX_App extends React.Component {
   render() {
     var i = 1;

     var styler = {
       fontSize: 100,
       color: '#32CD32'
     }

      return (
         <div>
           <a href="https://www.tutorialspoint.com/reactjs/reactjs_jsx.htm" target="_blank">JSX tutorial</a>
           <h1 style = {styler}>Header</h1>
           <h2>Content</h2>
           <p data-myattribute = "something">This is the content!</p>
           
           <h2>{1+1}</h2>

           <h2>{i == 1 ? 'True!' : 'False'}</h2>
           
           {/*End of the line Comment...*/}
           {/*Multi line comment...*/}
         </div>
      );
   }
}
```
In this example we see Nested elements(the h1 tag inside the div tag, which is the wrapper), Attributes(data-myattribute in the p tag), Javascript expressions(the {1+1} and the conditional (ternary) expression inside the h2 tag {i == 1 ? 'True!' : 'False'}), Styling which is seen with the Styler code above the return statement and comments(buttom place in the code just above the closing tag for div).

### Rendering Elements
Elements are the smallest building blocks of React apps.

An element describes what you want to see on the screen:

Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.

#### Rendering example:
```javascript
class RouterComponent extends React.Component{
  render(){
    return (
      <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Info}/>
            <Route path="jsx" component={JSX_App} />
            <Route path="components" component={ComponentsApp} />
            <Route path="state" component={StateApp} />
            <Route path="propsoverview" component={PropsOverview} />
            <Route path="propsvalidation" component={PropsValidation} />
            <Route path="componentapi" component={ComponentAPI_App} />
            <Route path="componentlifecycle" component={ComponentLifecycleAPP} />
            <Route path="forms" component={FormsApp} />
            <Route path="events" component={EventApp} />
            <Route path="refs" component={RefsApp} />
            <Route path="keys" component={KeysApp} />         
            <Route path="more" component={More} />         
            <Route path="*" component={Info} />         
          </Route>
        </Router>
    )
  }
}

ReactDOM.render(<RouterComponent/>, document.getElementById('root'));
```
We call this a "root" DOM node because everything inside it will be managed by React DOM.

Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.

To render this React element into a root DOM node, we pass the <RouterComponent/> into ReactDOM.render();

the ReactDOM.render(); is actually the only piece of code we need in the index.js. We can take the RouterComponent component into it's own component file.

### Components and Props
#### Components
the first component in the example below is ComponentsApp, which is stateless. This component is owner of Header and Content. We are creating Header and Content separately and just adding it inside JSX tree in our App component. Only App component needs to be exported.
##### Stateless Component example:
```javascript
import React from "react"

class ComponentsApp extends React.Component {
   render() {
      return (
         <div>
           <a href="https://www.tutorialspoint.com/reactjs/reactjs_components.htm" 
           target="_blank">Component tutorial</a>

            <Header/>
            <Content/>
         </div>
      )
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!</p>
         </div>
      );
   }
}

export default ComponentsApp;
```
This can be rendered with this code: ReactDOM.render(<ComponentsApp />, document.getElementById('app'));

##### Stateful example:
In this example the state will be set for owner component (App). The Header component is just added like in the last example since it doesn't need any state. Instead of content tag, we are creating table and tbody elements where we will dynamically insert TableRow for every object from the data array. You can see that we are using EcmaScript 2015 arrow syntax (⇒) which looks much cleaner then the old JavaScript syntax. This will help us create our elements with fewer lines of code. It is especially useful when you need to create list with a lot of items.
```javascript
class App extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
				
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
				
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ]
      }
   }
	
   render() {
      return (
         <div>
            <Headers/>
            <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
               </tbody>
            </table>
         </div>
      );
   }
}

class Headers extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}

export default App;
```
#### Props
The main difference between state and props is that props are immutable. This is why container component should define state that can be updated and changed, while the child components should only pass data from the state using props.

##### Default prop example
```javascript
import React from "react"

class PropsOverview extends React.Component {
   render() {
      return (
         <div>
           <a href="https://www.tutorialspoint.com/reactjs/reactjs_props_overview.htm" target="_blank">Props Tutorial</a>

           <h1>{this.props.headerProp}</h1>
           <h2>{this.props.contentProp}</h2>
         </div>
      )
   }
}

PropsOverview.defaultProps = {
   headerProp: "Header from props...",
   contentProp:"Content from props..."
}

export default PropsOverview;
```
##### State and Prop example:
The example below shows how to combine state and props in your app. We are setting state in our parent component and passing it down the component tree using props. Inside render function, we are setting headerProp and contentProp that are used in child components.
```javascript
class PropsOverview extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         header: "Header from props...",
         "content": "Content from props..."
      }
   }
	
   render() {
      return (
         <div>
            <a href="https://www.tutorialspoint.com/reactjs/reactjs_props_overview.htm" target="_blank">PropsOverview Tutorial</a>

            <Header headerProp = {this.state.header}/>
            <Content contentProp = {this.state.content}/>
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.headerProp}</h1>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>{this.props.contentProp}</h2>
         </div>
      );
   }
}

export default PropsOverview;
```
The only thing in this example that is different is that the source of our data is now originally coming from the state.

### State and LifeCycle
#### State
State is the place where the data comes from. You should always try to make your state as simple as possible and minimize number of stateful components. If you have, for example, ten components that need data from the state, you should create one container component that will keep the state for all of them.
##### State example:
Code sample below shows how to create stateful component using EcmaScript2016 syntax.
```javascript
import React from "react"

class StateApp extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         header: "Header from state...",
         "content": "Content from state..."
      }
   }

   render() {
      return (
         <div>
           <a href="https://www.tutorialspoint.com/reactjs/reactjs_state.htm" target="_blank">State Tutorial</a>

           <h1>{this.state.header}</h1>
           <h2>{this.state.content}</h2>
         </div>
      )
   }
}

export default StateApp;
```
#### Component life-cycle
componentWillMount is executed before rendering, on both server and client side.

componentDidMount is executed after first render only on the client side. This is where AJAX requests and DOM or state updates should occur. This method is also used for integration with other JavaScript frameworks and any functions with delayed execution like setTimeout or setInterval. We are using it to update the state so we can trigger the other lifecycle methods.

componentWillReceiveProps is invoked as soon as the props are updated before another render is called. We triggered it from setNewNumber when we updated the state.

shouldComponentUpdate should return true or false value. This will determine if component will be updated or not. This is set to true by default. If you are sure that component doesn't need to render after state or props are updated, you can return false value.

componentWillUpdate is called just before rendering.

componentDidUpdate is called just after rendering.

componentWillUnmount is called after the component is unmounted from the dom. We are unmounting our component in main.js.

In our example we are setting initial state in constructor function. The setNewnumber is used to update the state. All the lifecycle methods are inside Content component.

##### Life-cycle example:
```
import React from "react"

class ComponentLifecycleAPP extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         data: 0
      }

      this.setNewNumber = this.setNewNumber.bind(this)
   };

   setNewNumber() {
      this.setState({data: this.state.data + 1})
   }
   
   render() {
      return (
         <div>
           <a href="https://www.tutorialspoint.com/reactjs/reactjs_component_life_cycle.htm" 
           target="_blank">ComponentLifecycleAPP Tutorial</a><br /><br />

           <button onClick = {this.setNewNumber}>INCREMENT</button>
           <Content myNumber = {this.state.data}></Content>
         </div>
      )
   }
}

class Content extends React.Component {

   componentWillMount() {
      console.log('Component WILL MOUNT!')
   }

   componentDidMount() {
      console.log('Component DID MOUNT!')
   }

   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   }

   shouldComponentUpdate(newProps, newState) {
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
	
   render() {
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
         </div>
      );
   }
}

export default ComponentLifecycleAPP;
```
We can render this with this code: 

ReactDOM.render(<App/>, document.getElementById('app'));

setTimeout(() => {
   ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 10000);

### Handling Events
This is a simple example where we only use one component. We are just adding onClick event that will trigger updateState function once the button is clicked.
#### Event handling example:
```javascript
import React from "react"

class EventApp extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         data: 'Initial data...'
      }

      this.updateState = this.updateState.bind(this);

   };

   updateState() {
      this.setState({data: 'Data updated...'})
   }
   
   render() {
      return (
         <div>
           <a href="https://www.tutorialspoint.com/reactjs/reactjs_events.htm" target="_blank">Events Tutorial</a><br /><br />
           
           <button onClick = {this.updateState}>CLICK</button>
           <h4>{this.state.data}</h4>
         </div>
      )
   }
}

export default EventApp;
```

### List and Keys
#### Lists
A good solution would be flexible to the amount of items in a list and would render with its own containing element in a repeating fashion. Notice how the following render function is able to accomodate arrays of all sizes. This is due to rendering in a list of React Elements created from the list of numbers coming in from the props.
##### List example
```javascript
var ProperListRender = React.createClass({
    render: function() {
      return (
        <ul>
          {this.props.list.map(function(listValue){
            return <li>{listValue}</li>;
          })}
        </ul>
      )
    }
  });
  React.render(<ProperListRender list={[1,2,3,4,5]} />, document.getElementById('proper-list-render1'));
  React.render(<ProperListRender list={[1,2,3,4,5,6,7,8,9,10]} />, document.getElementById('proper-list-render2'));
```
The solution you get is enough to accomodate as many or as little list items that comes from the props field.
#### Keys
React keys are useful when working with dynamically created components or when your lists are altered by users. Setting the key value will keep your components uniquely identified after the change.
##### Key example:
Let's dynamically create Content elements with unique index (i). The map function will create three elements from our data array. Since key value needs to be unique for every element, we will assign i as a key for each created element.
```javascript
import React from "react"

class KeysApp extends React.Component {
  constructor() {
    super();

    this.state = {
      data:
      [
        {
          component: 'First...',
          id: 1
        },

        {
          component: 'Second...',
          id: 2
        },

        {
          component: 'Third...',
          id: 3
        },

        {
          component: 'Fourth...',
          id: 4
        }
      ]
    }

  }

  render() {
    return (
      <div>
        <a href="https://www.tutorialspoint.com/reactjs/reactjs_keys.htm" target="_blank">Keys Tutorial</a><br /><br />

        <div>
          {this.state.data.map((dynamicComponent, i) => <Content
            key={i} componentData={dynamicComponent} />)}
        </div>
      </div>
    )
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.componentData.component}</div>
        <div>{this.props.componentData.id}</div>
      </div>
    );
  }
}

export default KeysApp;
```

### Working with Forms
In example below we are setting input form with value = {this.state.data}. This allow us to update state whenever input value changes. We are using onChange event that will watch input changes and update state accordingly.
#### Form example:
```javascript
import React from "react"

class FormsApp extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         data: 'Initial data...'
      }

      this.updateState = this.updateState.bind(this);

   };

   updateState(e) {
      this.setState({data: e.target.value});
   }

   render() {
      return (
         <div>
           <a href="https://www.tutorialspoint.com/reactjs/reactjs_forms.htm" target="_blank">Forms Tutorial</a><br /><br />
           
           <input type = "text" value = {this.state.data} 
               onChange = {this.updateState} />
           <h4>{this.state.data}</h4>
         </div>
      )
   }
}

export default FormsApp;
```

### Lifting State Up
#### Lifted state example:
```javascript
TBD
```

---

>## Describe tools like Babel, WebPack and create-react-app and how they fit in to the React-world
### Babel
Babel is a essentially an ECMAScript 6 to ECMAScript 5 compiler. It allows you to use ES6 features in your projects and then compiles ES5 for you to use in production.

Babel uses configurable plugins which are applied to the source code and converted to application code. Most of the transforms are for converting specific ES2015 and ES2016 code into ES5 code. However plugins for wrapping react components, static type checking and contracts have been written using Babel.

You can see here how for example an arrow-function from ES6 looks compared to a normal javascript function.
#### Heres an arrow-function example:
```javascript
let myFunc = () => {
    console.log("ES6 is nice!");
};
```

#### Here is a normal function example:
```javascript
var myFunc = function() {
    console.log("ES6 is nice!");
};
```
The babel team implemented various plugins to compile React's JSX to `React.createElement`. All the features used by react including Es2016, classes and others are bundled into a preset called the `babel-preset-react` which you can use in your application.

React.createElement is used like this:
- return React.createElement("label", {className: "label"},

### Webpack
With Webpack, you give a single path. The path to your entry point. This is typically index.js or main.js. Webpack will now investigate your application. It will figure out how everything is connected through require, import, etc. statements, url values in your CSS, href values in image tags, etc. It creates a complete dependency graph of all the assets your application needs to run. All of this just pointing to one single file.

An asset is a file. It being an image, css, json, js, jsx etc. And this file is a node in the dependency graph created by Webpack.

Webpack in Reactjs is used to assemble code into a single file and to provide a development server.

### create-react-app
React, use create-react-app to automate the build of your app. There is no configuration file, and react-scripts is the only extra build dependency in your package.json. Your environment will have everything you need to build a modern React app:

- React, JSX, ES6, and Flow syntax support.
- Language extras beyond ES6 like the object spread operator.
- A dev server that lints for common errors.
- Import CSS and image files directly from JavaScript.
- Autoprefixed CSS, so you don’t need -webkit or other prefixes.
- A build script to bundle JS, CSS, and images for production, with sourcemaps.

The feature set is intentionally limited. It doesn’t support advanced features such as server rendering or CSS modules. The tool is also non-configurable because it is hard to provide a cohesive experience and easy updates across a set of tools when the user can tweak anything.

---

>## Explain, using examples, about Class Components, versus pure JavaScript functions in React, and when to use them.
Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.

They are also used to make the code more readable and pretty. Instead of just placing all the code in one big file, we split them up in more components and render them individually.

When React sees an element representing a user-defined component, it passes JSX attributes to this component as a single object. We call this object "props".

Component example:
```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

Pure javascript function example:
```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Components and pure javascript functions are basically the same the difference though is that the components are classes and not functions.
And this makes you able to use local state and lifecycle hooks

Local state:
```javascript
constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
```

lifecycle method hooks:
```javascript
componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
```

So the difference is basically that if you want a lifecycle with state in your app or program you want to use class components and not pure javascript functions.

---

>## Explain the purpose of Client Side Routing in a SPA
 - So we dont have to reload to side all the time, we just updata the view.
In a web application, routing is the process of using URLs to drive the User Interface (UI). Main functions from the users view:
* Bookmarking (allows users to add, annotate, edit, and share bookmarks of web documents). Also called an internet shortcut.
* Sharing Users can share content by sending a link to a certain page.
* Navigation - loading the app first time, changing URL manually, clicking links within app, etc.


In a traditional web application, the server renders HTML one page at a time. Users navigate an application by clicking through URLs, which are sent to the server via HTTP, and the server responds appropriately via a server-side router.  
With a SPA, "ALL" Route Handling are taken care of Client-side.

---

>## Explain, using an example of your own, the basic “building blocks” in react-router
The task of navigating via URL's in a SPA is called Routing and is typically being handled by a specific Router Package, the most commonly used for React is react-router library.  
React Router:
* Keeps your UI in sync with the URL
* simple API with powerful features (lazy code loading, dynamic route matching, location transition handling). 


A route handler can do several things:
* render a React Template.
* redirect to a new route.
* handle actions that involve changing a model or transitioning to a new route.

To install react-router (in a terminal, in you project root):
```Terminal
npm install react-router@3 --save
```

The example used for this question is [here](https://github.com/KongBoje/Hand-in-5-React/tree/master/ReactExRoutBooks/rout-ex-react-front)

---

>## Explain what is required to use react-router with a create-react-app project build from scratch
![alt tag](http://slides3-plaul.rhcloud.com/reactRouting/images/router-links.PNG)
There is nothing in the code above, that takes care of the actual navigation That's the Job of the Router, the primary component of the React Router Library.

---

>## Explain, using examples, how JavaScript array methods, like filter, map and (reduce) are used to generate dynamic HTML structures (tables, ul's etc.), and explain about React Keys.

in this [musician](https://github.com/KongBoje/Hand-in-5-React/tree/master/musician-app) example app we use both the map and filter array methods.

Here the filter method uses the map method to filter out the stars which are bigger or equal to those searched for, it then filters those stars and maps them into a new array, which is then shown in a new rendered table.

the map-callback adds a unique id to each row.

##### React Keys
Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:

If you forget to add keys, React will provide a warning!

This is also seen in the musician example.

---

>## Explain Mobx and React.
Mobx - state management library for front end, typically used with React library. Mobx is automatic and a lot of the magic happens behind the scene. If you have a lot of values, you just need to note them as @observable values, so when this value updates, everything that depends on it also updates.
Basic MobX decorators like:
* @observable
* @computed
* @action - use on everything that can change
* @observer

npm install -g json-server ---------------> install at the root of the project for running the json file backend from the server, the project is in.

---

###### REMOVE THIS
## Props vs State
 - Props you cant change.
 - Props are set by the parent and is fixed throughout the lifetime of the component.
 - State is something you can store for later use.
 - State can be changed by setState, which will update the page.


 