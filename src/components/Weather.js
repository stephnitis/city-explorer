import React from 'react';
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container';
import { Card } from 'react-bootstrap';
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
            <Container
              className="d-flex align-items-center justify-content-center text-center">
                
              <Card
                className='mb-3 bg-transparent text-dark'
                border="light"
                style={{ width: '40rem' }}
                variant="top">
                <Card.Body>
                  <Card.Header className='mb-3 bg-white'>{this.props.displayName}
                  </Card.Header>
                  <Card.Img
                    className='fluid p-3'
                    src={this.props.mapImg}
                    alt={this.props.displayName}
                  />
                  <Card.Text>Latitude: {this.props.lat}
                  </Card.Text>
                  <Card.Text>Longitude: {this.props.lon}
                  </Card.Text>
                  <Card.Text>Date: {this.props.date}
                  </Card.Text>
                  <Card.Text>Forecast: {this.props.forecast}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Container>
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

