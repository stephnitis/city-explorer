import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {}
    }
  }

  handleCityInput = (event) => {
    this.setState({
      city: event.target.value
    });
  }

  handleExplore = async (event) => {
    event.preventDefault();
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
    let cityInput = await axios.get(url);
    console.log(cityInput.data)
    this.setState({ location:cityInput.data[0]});
  }

render() {
  console.log(this.state.city);
  return (
    <>
      <h1>City Explorer</h1>
      <form onSubmit={this.handleExplore}>
        <label>Pick a City
          <input type="text" onInput={this.handleCityInput} />
        </label>
        <button type="submit">Explore!</button>
      </form>
    </>
  );

}
}


export default App;
