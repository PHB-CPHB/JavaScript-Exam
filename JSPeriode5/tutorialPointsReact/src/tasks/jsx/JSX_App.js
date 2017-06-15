import React from "react"

export default class JSX_App extends React.Component {
   render() {
     var myStyle = {
         fontSize: 100,
         color: '#FF0000'
      }
      var i = 1;
      return (
         <div>
           <a href="https://www.tutorialspoint.com/reactjs/reactjs_jsx.htm" target="_blank">
           Add Code for the "ReactJS - JSX" step
           </a>
           <h1>Header</h1>
            <h2>Content</h2>
            <p>This is the content!!!</p>
            <p data-myattribute="somevalue">Content from attribute</p>
            <p>{1+1}</p>
            <p>{i == 1 ? 'True!' : 'False'}</p>
            <p style = {myStyle}>I am red</p>
            {//End of the line Comment...
            /*Multi line comment...*/}
         </div>
      );
   }
}
