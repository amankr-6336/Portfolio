import React, { useState } from 'react'
import './Navbar.scss'

function Navbar() {

    const[menu,setmenu]=useState('false');

    function handlemenu(){
        setmenu(!menu);
    }
    
    function handlescroll(){
        window.scrollBy({
            top: 550,
            left: 0,
            behavior : "smooth"
        })
    }
    function handlescrollr(){
        window.scrollBy({
            top: 1350,
            left: 0,
            behavior : "smooth"
        })
    }
    function handlescrollp(){
        window.scrollBy({
            top: 2150,
            left: 0,
            behavior : "smooth"
        })
    }
    function handlescrollc(){
        window.scrollBy({
            top: 2450,
            left: 0,
            behavior : "smooth"
        })
    }
  return (
     <nav className='navbar'>
        <div className="containerr">
            <h1 className='webname'>Aman k</h1>
            
            <div className="content">
                <ul>
                    <li >Home</li>
                    <li onClick={handlescroll}>About</li>
                    <li onClick={handlescrollr}>Resume</li>
                    <li onClick={handlescrollp}>Projects</li>
                    <li onClick={handlescrollc}>Contact me</li>
                </ul>
            </div>
           <div className={menu? "hamburger2":"hamburger"} onClick={handlemenu}>
            <div id='one'></div>
            <div id='two'></div>
            <div id='three'></div>
            </div>

           <div className={menu? "imagine": "imagine2"}>
                 <ul>
                    <li >Home</li>
                    <li onClick={handlescroll}>About</li>
                    <li onClick={handlescrollr}>Resume</li>
                    <li onClick={handlescrollp}>Projects</li>
                    <li onClick={handlescrollc}>Contact me</li>
                </ul>
           </div>
        </div>
        
     </nav>
  )
}

export default Navbar