import React from 'react';
// import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion'
import { Card } from 'react-bootstrap';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import Container from 'react-bootstrap/Container';

class Movies extends React.Component {




  render() {
    return (
      <><Container className="lign-items-center">
        {this.props.movieTitles.map((film, idx) => (

          <Accordion
            defaultActiveKey={idx}>
            <AccordionHeader eventKey={idx}>{film.title}</AccordionHeader>
            <AccordionBody>
              <Card.Body>{film.overview}</Card.Body>
            </AccordionBody>
          </Accordion>
        ))
        } </Container></>)

  };
}

export default Movies;