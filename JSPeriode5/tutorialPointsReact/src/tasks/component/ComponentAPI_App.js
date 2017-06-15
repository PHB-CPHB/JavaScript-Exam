import React from "react"

export default class ComponentAPI_App extends React.Component {
  constructor() {
     super();

     this.state = {
        data: []
     }

     this.setStateHandler = this.setStateHandler.bind(this);
     {//this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
     }
  };

  setStateHandler() {
     var item = "setState..."
     var myArray = this.state.data;
     myArray.push(item)
     this.setState({data: myArray})
  };
   render() {
      return (
         <div>
           <a href="https://www.tutorialspoint.com/reactjs/reactjs_component_api.htm"
           target="_blank">
           Add Code for the "ReactJS - Component API" step
           </a>
           <div>
           <button onClick = {this.setStateHandler}>SET STATE</button>
            <h4>State Array: {this.state.data}</h4>
            </div>
            {/*<button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
            <h4>Random number: {Math.random()}</h4>*/}
         </div>
      )
   }
}
