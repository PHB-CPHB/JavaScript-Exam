import React from "react"

export default class KeysApp extends React.Component {
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
            }
         ]
      }

   }
   render() {
      return (
         <div>
           <a href="https://www.tutorialspoint.com/reactjs/reactjs_keys.htm" target="_blank">
           Add Code for the "Keys" step
           </a>
           <div>
               {this.state.data.map((dynamicComponent, i) => <Content
                  key = {i} componentData = {dynamicComponent}/>)}
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
