import React from "react"

export default class FormssApp extends React.Component {
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
           <a href="https://www.tutorialspoint.com/reactjs/reactjs_forms.htm" target="_blank">
           Add Code for the "Forms " step
           </a>
           <div>
           <input type = "text" value = {this.state.data}
               onChange = {this.updateState} />
            <h4>{this.state.data}</h4>
            </div>
         </div>
      )
   }
}
