import React, {useCallback, useEffect, useRef} from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from "../asset/images/marker.png";
import "../asset/css/menu.css";

const AnyReactComponent = ({ text }) => <div style={{"fontSize":"1.5em","fontWeight":"bold"}}>{text}</div>;

export default function Map () {

  const defaultProps = {
    center: {
      lat: 37.380314706090175,
      lng: 126.66573855414347
    },
    zoom: 15
  };

    return (
        <div className="map_wrap">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyC-6dS3FLPVZy7S6qd4sbgHChZ-V89ttpY" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent 
              lat={37.380314706090175}
              lng={126.66573855414347}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
    )
};