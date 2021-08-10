
import {useState} from 'react';
import { Link } from 'react-router-dom';
import "../asset/css/menu.css";



function Menu(props){
    const 쉽게가자 = ()=> {
        return props.스위치 === false 
        ? "menu_wrap_active" 
        : "menu_wrap" 
    }



    return (
        <>
        <div className={쉽게가자()} >
            <div className={props.스위치 === false ? "menu_fact_close" : "menu_fact" }>
                <button onClick={props.onToggle}>❌</button>
                <div className="link_wrap">
                    <Link to="/product" onClick={props.onToggle}>클론코딩</Link>
                    <Link to="/map" onClick={props.onToggle}>맵</Link>
                </div>
            </div>
        </div>
        </>
    )
}



export default Menu;