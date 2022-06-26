import React from 'react';
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container';
import { Card } from 'react-bootstrap';



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

