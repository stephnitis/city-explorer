import React from 'react';
import Alert from 'react-bootstrap/Alert'
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';


class Weather extends React.Component {


  render() {
    return (
      <>
      {this.props.error === true
          ? <Alert>{this.props.errorMsg}</Alert>
          :
          <>
            <ListGroup variant="success">
              <ListGroup.Item>City: {this.props.displayName}
              </ListGroup.Item>
              <ListGroup.Item>Latitude: {this.props.lat}
              </ListGroup.Item>
              <ListGroup.Item>Longitude: {this.props.lon}
              </ListGroup.Item>
              <ListGroup.Item>Date: {this.props.date}
              </ListGroup.Item>
              <ListGroup.Item>Forecast: {this.props.forecast}
              </ListGroup.Item>
            </ListGroup>
            <Image
              src={this.props.mapImg}
              alt={this.props.displayName}>
            </Image>
          </>}
      </>
      
    )
  }

}


// class Weather extends React.Component {

//   render () {
//     return(
//       <>
//       {this.props.error === true
//           ? <Alert>{this.props.errorMsg}</Alert>
//           : 
//         <>
//       <ListGroup variant="success"> 
//           <ListGroup.Item>Date: {this.props.datetime}
//           </ListGroup.Item>
//           <ListGroup.Item>Forecast: {this.props.description}
//           </ListGroup.Item>
//         </ListGroup>
//         </>}
//       </>
//     )
//   }

// }

export default Weather;

