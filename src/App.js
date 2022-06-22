import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Alert from 'react-bootstrap/Alert'
import ListGroup from 'react-bootstrap/ListGroup';
import './App.css';
// import Container from 'react-bootstrap/Container';
// import Map from './Map.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      cityInput: {},
      displayName: '',
      error: false,
      errorMsg: '',
      lat: '',
      lon: '',
      mapImg: ''
    }
  }

  handleCityInput = (event) => {
    this.setState({
      searchQuery: event.target.value
    });
  }

  handleExplore = async (event) => {
    event.preventDefault();
    try{
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.searchQuery}&format=json`;
    let cityInput = await axios.get(url);
    console.log(cityInput.data)
    let mapImg = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${cityInput.data[0].lat},${cityInput.data[0].lon}&zoom=13`;
    this.setState({
      cityInput: cityInput.data[0],
      displayName: cityInput.data[0].display_name,
      lat: cityInput.data[0].lat,
      lon: cityInput.data[0].lon,
      mapImg: mapImg,
    });
    } catch (error) {
      console.log('error', error)
      this.setState({
        error: true,
        errorMsg: `Error: ${error.message}. Please Refresh & Try Again.`      
      })
    } 
    this.handleGetWeather();
  }

  handleGetWeather = async () => {
    let url = `http://localhost:3001/weatherData?searchQuery=${this.state.searchQuery}`
    
    try{
      let weatherData = await axios.get(url);
      console.log(weatherData.data);
    } catch (error) {
      console.log(error);
  
    }
  }

  render() {
    // console.log('cityInput:', this.state.cityInput);

    return (
      <>
      <h1>City Explorer</h1>
        <Form onSubmit={this.handleExplore}>
          <Form.Label>Pick a City</Form.Label>
          <Form.Control type="text" onInput={this.handleCityInput} />
          <Button type="submit">Explore!</Button>
        </Form>
        {this.state.error === true
          ? <Alert>{this.state.errorMsg}</Alert>
          : 
        <> 
        <ListGroup variant="success"> 
          <ListGroup.Item>City: {this.state.displayName}
          </ListGroup.Item>
          <ListGroup.Item>Latitude: {this.state.lat}
          </ListGroup.Item>
          <ListGroup.Item>Longitude: {this.state.lon}          
          </ListGroup.Item>
        </ListGroup>
        <Image 
        src={this.state.mapImg}
        alt={this.state.displayName}>
        </Image>
     </>}
      </>

    );

  }
}


export default App;

