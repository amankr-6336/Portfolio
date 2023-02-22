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
                    <a href=""> <AiFillGithub/></a>
                    <a href=""> <AiFillLinkedin/> </a>
                    <a href=""> <RxTwitterLogo/></a>
                    <a href=""> <BsInstagram/></a>
                    <a href=""> <BsFacebook/></a>
            </div>
            
        </div>
    </div>
  )
}

export default Footer