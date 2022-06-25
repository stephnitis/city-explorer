// import React from 'react';
// import axios from 'axios';
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'

// class Map extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       mapUrl: '',
//       errorMessage: ''
//       // displayMap: 'false'
//     }
//   }

//   findMap = async () => {
//     // event.preventDefault();

//     let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.lat},${this.props.lon}&zoom=10`;
//     await axios.get(mapUrl);

//     this.setState({
//       mapUrl: mapUrl,
//       // displayMap: 'true'

//     });
//   }

//   render() {
//     this.findMap();
//     return (
//       <>
//       <h1>City Explorer</h1>
//         <Form onSubmit={this.props.handleExplore}>
//           <Form.Label>Pick a City</Form.Label>
//           <Form.Control type="text" onInput={this.props.handleCityInput} />
//           <Button type="submit" onClick={this.findMap}>Explore!</Button>
//         </Form>

//         <img className="img-fluid"
//           src={this.state.mapUrl}
//           alt={this.props.displayName}
//         />
//       </>
//     )
//   }
// }


// export default Map;