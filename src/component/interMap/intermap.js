import React from 'react';
import GoogleMapReact from 'google-map-react';
import './intermap';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
class Intermap extends React.Component {
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
  
 
  render () {
    return (
            <div className="intemap" style={{ height: '100vh', width: '50%',margin:"75px auto",textAlign:"center"}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAo85F_x6NKrX-_nUOPSiYhi_Kbqa6NiBk" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
export default Intermap