import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Movies extends React.Component {


  render() {
    return (
      <>
      {this.props.movieTitles.map((film, idx) => (
          <ListGroup key={idx}>
            <ListGroup.Item>{film.title}</ListGroup.Item>
            <ListGroup.Item>{film.overview}</ListGroup.Item>
          </ListGroup>
        ))
     } </> )
     
  };
}

{/* // {this.props.movieTitles.data.map((film, idx) => { return <ul key={idx}><li>Title: {film.title}</li><li>{film.poster_path}</li></ul> })} */ }

export default Movies;