import React, {useCallback, useEffect, useRef} from 'react';
import { MapOptions, GoogleApiWrapper } from 'google-maps-react';

import "../asset/css/menu.css";


export default function Map () {

    const mapRef = useRef(null);

    const initMap = useCallback(() => {
        new window.google.maps.Map(mapRef.current, {
          center: { lat: 37.380314706090175, lng: 126.66573855414347},
          zoom: 15,
        });
      }, [mapRef]);

      useEffect(() => {
        initMap();
      }, [initMap]);






    return (
        <div className="map_wrap">
            <div
            className="map"
            ref={mapRef}
            ></div>
        </div>
    )
};