import React from "react"
import ReactDOM from 'react-dom';

export default class RefsApp extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
         data: ''
      }

      this.updateState = this.updateState.bind(this);
      this.clearInput = this.clearInput.bind(this);
   };

   updateState(e) {
      this.setState({data: e.target.value});
   }

   clearInput() {
      this.setState({data: ''});
      ReactDOM.findDOMNode(this.refs.myInput).focus();
   }
   render() {
      return (
         <div>
           <a href="https://www.tutorialspoint.com/reactjs/reactjs_refs.htm" target="_blank">
           Add Code for the "Refs" step
           </a>
           <div>
            <input value={this.state.data} onChange={this.updateState}
               ref="myInput"></input>
            <button onClick={this.clearInput}>CLEAR</button>
            <h4>{this.state.data}</h4>
         </div>
         </div>
      )
   }
}
