import React, { Component } from 'react'
import NewCustomerForm from './components/NewCustomerForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
			  <NewCustomerForm name={'jose'}/>
      </div>
    );
  }
}

export default App
