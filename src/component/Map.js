import React, {useCallback, useEffect, useRef, useState} from 'react';
import GoogleMapReact from 'google-map-react';


import "../asset/css/menu.css";

const MyMarker = ({ text, setHoverSwitch, hoverSwitch, $hover, id}) => <div className={!hoverSwitch ? "circle" : "circle_hover"} onMouseEnter={()=>{setHoverSwitch(true)}} onMouseLeave={()=>{setHoverSwitch(false)}} ><span className="circleText">{text}</span></div>;

export default function Map () {


  const [hoverSwitch,setHoverSwitch] = useState({
  
  });
  const [locateInfo,setLocateInfo] = useState({
    lat : "",
    lng : ""
  })

  const [defaultProps, setDefaultProps] = useState({
    center: {
      lat: 37.382095,
      lng: 126.656179
    },
    zoom: 15
  })

  const points = [
    { id: 1, title: "아이티 타워", lat: 37.380314706090175, lng:126.66573855414347, checked: false},
    { id: 2, title: "테크노 어린이공원", lat: 37.385404, lng:126.650899, checked: false},
    { id: 3, title: "캠퍼스 타운역", lat: 37.387748, lng:126.662186, checked: false}
  ]
  
  


    return (
      <div className="container">
        <div className="map_wrap">
          <GoogleMapReact
            bootstrapURLKeys={{ 
              key: "AIzaSyC-6dS3FLPVZy7S6qd4sbgHChZ-V89ttpY",
              language:"ko",
              region:"KO" 
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
          {
            points.map((obj, index)=>(
              <MyMarker key={obj.id} lat={obj.lat} lng={obj.lng} text={obj.id} setHoverSwitch={setHoverSwitch} hoverSwitch={hoverSwitch} id={obj.id} />
            ))
          }
          </GoogleMapReact>
        </div>
        <div className="map_side">
          {
            points.map((obj, index)=>{
              return (
                <div className={obj.checked ? "map_content_hover" : "map_content"} onMouseOver={()=>{}} onMouseLeave={()=>{setHoverSwitch(false)}} key={obj.id} data-value={obj.id} >
                  <h2>{obj.title}</h2>
                </div>
              )
            })
          }
        </div>
    </div>    
    )
};