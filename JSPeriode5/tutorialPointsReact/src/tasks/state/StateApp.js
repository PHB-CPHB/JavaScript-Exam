import React from "react"

export default class StateApp extends React.Component {
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
           <a href="https://www.tutorialspoint.com/reactjs/reactjs_state.htm" target="_blank">
           Add Code for the "State" step
           </a>
           <h1>{this.state.header}</h1>
            <h2>{this.state.content}</h2>
         </div>
      )
   }
}
