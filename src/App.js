import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
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
      lat: cityInput.data[0].lat
    });
  }





  render() {
    console.log('location:', this.state.location);
    console.log('lon', typeof(this.state.lon));
    console.log('lat', this.state.lat);
    console.log('mapImg', this.state.mapImg);
    
    return (
      <>
        <h1>City Explorer</h1>
        <Form onSubmit={this.handleExplore}>
          <Form.Label>Pick a City</Form.Label>
          <Form.Control type="text" onInput={this.handleCityInput}/>
          <Button type="submit">Explore!</Button>
        </Form>
        <Map
        lat={this.state.lat}
        lon={this.state.lon}
        searchQuery={this.state.searchQuery}
        />
      </>
      
    );

  }
}


export default App;
