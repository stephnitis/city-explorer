import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

handleSubmit = (event) => {
  event.preventDefault();

}

render () {

  return (
    <>
    <h1>City Explorer</h1>
    <form onSubmit={this.handleSubmit}>
      <button type="submit">Explore!</button>
    </form>
    </>
  );

}

}


export default App;
