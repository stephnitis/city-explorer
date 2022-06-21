import React from 'react';
import axios from 'axios';

class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mapUrl: '',
    }
  }

  findMap = async () => {
    // event.preventDefault();
    
    let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.lat},${this.props.lon}&zoom=10`;
    await axios.get(mapUrl);
    
    this.setState({
      mapUrl: mapUrl
    
    });    
  }


  render() {
  this.findMap();
    return(
      <>
     <img className="img-fluid" 
            src={this.state.mapUrl}
            alt={this.props.displayName}
         />
      </>
    )
  }
}


export default Map;