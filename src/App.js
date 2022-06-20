import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

render () {

  return (
    <>
    <h1>City Explorer</h1>
    <form>
      <button>Explore!</button>
    </form>
    </>
  );

}

}


export default App;
