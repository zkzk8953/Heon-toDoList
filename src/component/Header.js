
import React, { useEffect, useState } from 'react';
import "../asset/css/header.css";
import { Link } from 'react-router-dom'

function Header(props){
    const [headerEvent, setEvent] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }


    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    },[]);

    return (
        <div className={scrollPosition < 100 ? "header_wrap" : "header_wrap_fix"} >
            <h1><Link to="/"> 성헌's App </Link></h1>
            <button className="menu_btn" onClick={props.onToggle}></button>
        </div>
    )
};


export default Header;