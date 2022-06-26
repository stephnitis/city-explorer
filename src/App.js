import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './App.css';
import Movies from './components/Movies';
import Weather from './components/Weather.js';
import { Container } from 'react-bootstrap';


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
      mapImg: '',
      // datetime: '',
      // description: '',
      showWeather: false,
      weather: [],
      movieTitles: [],
    }
  }

  handleCityInput = (event) => {
    this.setState({
      searchQuery: event.target.value
    });
  }

  handleExplore = async (event) => {
    event.preventDefault();
    try {
      let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.searchQuery}&format=json`;
      let cityInput = await axios.get(url);


      let mapImg = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${cityInput.data[0].lat},${cityInput.data[0].lon}&zoom=13`;

      let weatherURL = `${process.env.REACT_APP_SERVER}/weather?lat=${cityInput.data[0].lat}&lon=${cityInput.data[0].lon}`;

      let weather = await axios.get(weatherURL);

      let movieURL = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.searchQuery}`;
      let movieTitles = await axios.get(movieURL);
      console.log('movie titles', movieTitles);

      this.setState({
        cityInput: cityInput.data[0],
        displayName: cityInput.data[0].display_name,
        lat: cityInput.data[0].lat,
        lon: cityInput.data[0].lon,
        mapImg: mapImg,
        weather: weather.data,
        date: weather.data[0].datetime,
        forecast: weather.data[0].description,
        showWeather: true,
        movieTitles: movieTitles.data,
      });

    } catch (error) {
      console.log('error', error)
      this.setState({
        error: true,
        errorMsg: `Error: ${error.message}. Please Refresh & Try Again.`
      })
    }
    // this.handleGetWeather();
  }


  // handleGetWeather = async () => {
  //   let url = `http://localhost:3001/weatherData?searchQuery=${this.state.searchQuery}`

  //   try{
  //     let weatherData = await axios.get(url);
  //     console.log('weather:', weatherData.data);
  //     this.setState({
  //       datetime: weatherData.data[0].datetime,
  //       description: weatherData.data[1].description,
  //     })
  //   } catch (error) {
  //     console.log(error);
  //     this.setState({
  //       error: true,
  //       errorMsg: `Error: ${error.message}. No access to this data.`      
  //     })  
  //   }
  // }


  render() {

    return (
      <>
        <div class="font-effect-neon">

          <h1>City Explorer</h1></div>

        <Container className="d-flex align-items-center justify-content-center text-center">

          <Form
            onSubmit={this.handleExplore}>
            <Form.Control
              className='mb-3 mt-3'
              box-sizing='border-box'
              type="text"
              onInput={this.handleCityInput}
              placeholder="Enter City Name" />
            <Button className='mb-3' variant="outline-dark" type="submit">Explore!</Button>
          </Form>

        </Container>
        <Weather
          date={this.state.date}
        <h1>City Explorer</h1>
        <Form onSubmit={this.handleExplore}>
          <Form.Label>Pick a City</Form.Label>
          <Form.Control type="text" onInput={this.handleCityInput} />
          <Button type="submit">Explore!</Button>
        </Form>
        <Weather
          date={this.state.date}
          description={this.state.description}
          forecast={this.state.forecast}
          error={this.state.error}
          errorMsg={this.state.errorMsg}
          lat={this.state.lat}
          lon={this.state.lon}
          mapImg={this.state.mapImg}
          displayName={this.state.displayName}

        />

        <Movies
          movieTitles={this.state.movieTitles}
        />
      </>
    );
  }
}


export default App;

