import React from 'react'
import './Navbar.scss'

function Navbar() {
    
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
        <div className="container">
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
           <div className="hamburger">
            <span id='one'></span>
            <span id='two'></span>
            <span id='three'></span>
            </div>
        </div>
        
     </nav>
  )
}

export default Navbar