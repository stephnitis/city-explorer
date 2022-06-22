import React from 'react';
import Alert from 'react-bootstrap/Alert'
import ListGroup from 'react-bootstrap/ListGroup';


class Weather extends React.Component {

  render () {
    return(
      <>
      {this.props.error === true
          ? <Alert>{this.props.errorMsg}</Alert>
          : 
        <>
      <ListGroup variant="success"> 
          <ListGroup.Item>Date: {this.props.datetime}
          </ListGroup.Item>
          <ListGroup.Item>Forecast: {this.props.description}
          </ListGroup.Item>
        </ListGroup>
        </>}
      </>
    )
  }

}

export default Weather;

