import React from 'react'
import './Introduction.scss'
import{AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import{RxTwitterLogo} from 'react-icons/rx'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import './Introduction.scss'
import html from '../../asset/html.png'
import css from '../../asset/css.png'
import js from '../../asset/js.png'
import react from '../../asset/react.png'
import user from '../../asset/p1.jpg'
import TypeWriter from './TypeWriter'


function Introduction() {
  return (
    <div className="introduction">
        <div className="container">
            <div className="left">
                <div className="socialmedia">
                    <a href="https://github.com/amankr-6336?tab=repositories" > <AiFillGithub/></a>
                    <a href="https://www.linkedin.com/in/aman-kumar-269275170/"> <AiFillLinkedin/> </a>
                    <a href="https://twitter.com/"> <RxTwitterLogo/></a>
                    <a href="https://www.instagram.com/"> <BsInstagram/></a>
                    <a href="https://www.facebook.com/"> <BsFacebook/></a>
                </div>
                <div className="name">
                  <h2>Hello, &nbsp;</h2>
                  <h2>I'M &nbsp;</h2>
                  <h2 id='name'>Aman kumar</h2>
                </div>
                <div className="profession">
                    <TypeWriter/>
                </div>
                <div className="resume">
                  <button ><a href="./1.pdf" download >Resume</a></button>
                </div>
            </div>
            <div className="right-mini">
            <div className="right">
                
                <div className="picpart">
                   <div className="orange-part">

                   </div>
                   <div className="blue-part">

                   </div>
               
                  <div className="blue">
                    <img src={user} alt="" />
                  </div>
                </div>
               <div className="mainrotate">
               <div className="rotate">
                <div className="orangerotate">
                <span id='one'><img src={html} alt="" /></span>
                <span id='two'><img src={css} alt="" /></span>
                <span id='three'><img src={js} alt="" /></span>
                <span id='four'><img src={react} alt="" /></span>
                </div>
                <div className="blue-rotate">

                </div>
             
              
               </div>
               </div> 


               </div>
               </div>
            </div>
        </div>
   
  )
}

export default Introduction