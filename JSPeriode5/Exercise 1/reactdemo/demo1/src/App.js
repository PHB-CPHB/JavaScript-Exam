import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      show: true, 
      data:[
      {
               "id":1,
               "name":"Kasper Vetter",
               "age":"24"
            },

            {
               "id":2,
               "name":"Phillip H. Brink",
               "age":"24"
            },

            {
               "id":3,
               "name":"Mikkel Ziemer",
               "age":"24"
            }
            ]
      };
    setInterval(()=>{
      this.setState({show: !this.state.show});
    }, 1000);
  }
  render() {
    const txt = this.state.show ? this.props.name: "Phillip H. Brink";
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to react test site</h2>
        </div>
        <div className="App-intro">
          <h2>Hello {txt}</h2>
          <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
               </tbody>
            </table>
        </div>
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
