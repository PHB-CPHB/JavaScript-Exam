import React from "react"

export default class PropsOverview extends React.Component {
   render() {
      return (
         <div>
           <a href="https://www.tutorialspoint.com/reactjs/reactjs_props_overview.htm" target="_blank">
           Add Code for the "Props Overview" step
           </a>
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
