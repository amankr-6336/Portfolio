import React from 'react';
import {AiFillGithub} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {RxTwitterLogo} from 'react-icons/rx';
import {BsInstagram} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs'
import './Footer.scss'



function Footer() {
  return (
    <div className="footer">
        <div className="footerinner">
            <div className="footername"><h4>Aman Kumar</h4></div>
            <div className="footericon">
                    <a href="https://github.com/amankr-6336?tab=repositories"> <AiFillGithub/></a>
                    <a href="https://www.linkedin.com/in/aman-kumar-269275170/"> <AiFillLinkedin/> </a>
                    <a href="https://twitter.com/"> <RxTwitterLogo/></a>
                    <a href="https://www.instagram.com/"> <BsInstagram/></a>
                    <a href="https://www.facebook.com/"> <BsFacebook/></a>
            </div>
            
        </div>
    </div>
  )
}

export default Footer