import React, { Component } from 'react'
import Profile from './Profile'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends Component {

  state={show: false, date:0 }
  handleData = () => {
  this.setState({show: !this.state.show});
};
componentDidMount () {
setInterval(() => {
  this.setState({date: this.state.date+1})
}, 1000);
}
  
  render() {
    return (
      
      <div className="App" >
        <div className="abc">
        <button onClick={this.handleData} >{this.state.show ? "Hide": "Show"} </button>
        {this.state.show? <Profile/>: null}
        <h1>{this.state.date}</h1>
      </div></div>
    );
  }
}

