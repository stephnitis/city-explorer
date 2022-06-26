import React from 'react';
// import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion'
import { Card } from 'react-bootstrap';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
class Movies extends React.Component {

 

  render() {
    return (
      <>
      {this.props.movieTitles.map((film, idx) => (
          <Accordion defaultActiveKey={idx}>
            <Card className='w-100 p-3'>
              <Card.Header>
            <AccordionHeader eventKey={idx}>{film.title}</AccordionHeader>
              </Card.Header>        
            <AccordionBody>
              <Card.Body>{film.overview}</Card.Body>
              </AccordionBody>
           </Card>
          </Accordion>
        ))
     } </> )
     
  };
}


export default Movies;