import React from 'react';
import axios from 'axios';
// import Container from 'react-bootstrap/Container';
import './App.css';
import Map from './Map.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
      mapImg: '',
      lat: '',
      lon: '',
      displayName: '',
    }
  }

  handleCityInput = (event) => {
    this.setState({
      searchQuery: event.target.value
    });
  }



  handleExplore = async (event) => {
    event.preventDefault();

    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.searchQuery}&format=json`;

    let cityInput = await axios.get(url);
    console.log(cityInput.data)

    this.setState({
      location: cityInput.data[0],
      lon: cityInput.data[0].lon,
      lat: cityInput.data[0].lat,
      displayName: cityInput.data[0].display_name
    });
  }

  render() {
    console.log('location:', this.state.location);

    return (
      <>
        <Map
          handleCityInput={this.handleCityInput}
          handleExplore={this.handleExplore}
          searchQuery={this.state.searchQuery}
          lat={this.state.lat}
          lon={this.state.lon}
          displayName={this.state.displayName}
        />
      </>

    );

  }
}


export default App;
