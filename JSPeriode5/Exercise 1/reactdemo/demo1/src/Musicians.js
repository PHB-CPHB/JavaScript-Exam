import React from "react";
import './App.css';

export default class Musicians extends React.Component{

    constructor(props){
        super(props);
        this.state = {filterVal : 1}
        this.myChange = this.myChange.bind(this);
    }

    myChange = (evt)=>{
        const val = evt.target.value;
        this.setState({filterVal: val});
    };
    render(){
        let data = this.props.data;
        const rows = data.filter(musicians=> musicians.stars >= this.state.filterVal).map( (musicians) =>
                <tr key={musicians.id}>
                  <td>{musicians.id}</td>
                  <td>{musicians.name}</td>
                  <td>{musicians.stars}</td>
                </tr>
            )

        return (
            <div>
            <h1 className="App-header">Musicians</h1><br/>
            <input onChange={this.myChange}/><br/>
            <table className="table">
                {rows}
            </table>
            </div>
        )
    }
}
