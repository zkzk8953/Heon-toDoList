import React, {useCallback, useEffect, useRef, useState} from 'react';
import GoogleMapReact from 'google-map-react';


import "../asset/css/menu.css";



export default function Map () {


  const [hoverSwitch,setHoverSwitch] = useState(false);
  const [modalSwitch,setModalSwitch] = useState(false);

  const [center, setCenter] = useState({
      lat: 37.46412549692522,
      lng: 126.67672094214076
  })

  const [points, setPoints] = useState([]);

  let arrayLength = points.length

  const [clickIndex,setClickIndex] = useState(0);

  const [clickPoint,setClickPoint] = useState({
    id: arrayLength ,
    title : "",
    lat: "",
    lng: "",
    content: "",
    checked: false,
  })

  


  const onPlusFnc = () => {
    if(clickPoint.title === null || clickPoint.content === null){
      alert('써야지')
    }else{
      // let copy = [...points]
      // copy.push(clickPoint)
      const copy = points.concat(clickPoint)
      setPoints(copy)
      setHoverSwitch(false)
      setModalSwitch(false) 
      localStorage.setItem('location',JSON.stringify(copy))   
    }
  }

  const onRemoveFnc = (number) => {
    const filterData = points.filter( item => item.id !== number )

    setPoints(filterData)
    localStorage.setItem("location",JSON.stringify(filterData))
  }

  const onKeyPress = (e)=>{
    if(e.key =='Enter'){
        onPlusFnc();
    }
  }


  useEffect(() => {
    const comeData3 = localStorage.getItem('location'); 

    if(comeData3 !== null){
      const comeData4 = JSON.parse(comeData3)
      setPoints(comeData4)
    }
  },[])




    return (
      <div className="container">
         {
         modalSwitch 
         ? (
           <>
            <div className="modal_wrap" onClick={()=>{
             setModalSwitch(false) 
             setHoverSwitch(false)
             }} />
            <div className="modal_page">
                <input placeholder="위치명" onChange={(e)=>{setClickPoint({...clickPoint, title : e.target.value})}}/>
                <input placeholder="설명" onChange={(e)=>{
                  setClickPoint({...clickPoint, content : e.target.value, id : arrayLength === 0 ? arrayLength : points[arrayLength-1].id + 1})
                  }}  onKeyPress={onKeyPress} />
                <button onClick={onPlusFnc}>⭕</button>
           </div> 
           </>
           )
         : null
         }  
         <div className="map_wrap">
          <div className={hoverSwitch ? "plus_location_on" : "plus_location"} onClick={()=>{
            setModalSwitch(true)
          }} >추가</div>
          <GoogleMapReact
            bootstrapURLKeys={{ 
              key: "AIzaSyC-6dS3FLPVZy7S6qd4sbgHChZ-V89ttpY",
              language:"ko",
              region:"KO" 
            }}
            onClick={(e)=>{
              setClickPoint({...clickPoint, lat : e.lat, lng: e.lng});
              setHoverSwitch(true);
            }}
            center={center}
            defaultZoom={12}
          >
          
          {
            points.map((obj, index)=>(
              <MyMarker center={center} setCenter={setCenter} key={obj.id} lat={obj.lat} lng={obj.lng} text={obj.content} setHoverSwitch={setHoverSwitch} hoverSwitch={hoverSwitch} id={obj.id} obj={obj} setPoints={setPoints} points={points} index={index} />
            ))
          }
          </GoogleMapReact>
        </div>
        <div className="map_side">
          {
            points.map((obj, index)=>{
              return (
                <div className={obj.checked ? "map_content_hover" : "map_content"} onMouseEnter={()=>{
                  let copy = [...points];
                  copy[index].checked = true;
                  setPoints(copy);
                  setCenter({...center, lat: obj.lat, lng: obj.lng})
                }} onMouseLeave={()=>{
                  let copy = [...points];
                  copy[index].checked = false;
                  setPoints(copy);
                }} key={obj.id} data-value={obj.id} >
                  <h2>{obj.title}</h2>
                  <button onClick={()=>{
                    onRemoveFnc(obj.id)
                  }}>❌</button>
                </div>
              )
            })
          }
        </div>
    </div>    
    )
};





const MyMarker = ({  text, id, obj, setPoints, points, index }) => {
  return (
<div className={ obj.checked ? "circle_hover" : "circle"} onMouseEnter={()=>{
  let copy = [...points];
  copy[index].checked = true;
  setPoints(copy);
}} onMouseLeave={()=>{
  let copy = [...points];
  copy[index].checked = false;
  setPoints(copy);
}}><span className={obj.checked ? "circleText_hover" : "circleText"}>
  {obj.title}<br/>{text}
  </span></div>
  )
}


