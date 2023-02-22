import React from "react";
import "./About.scss";
import w from '../../asset/web.png'
import {FaDotCircle} from 'react-icons/fa'

function About() {
  return (
    <section className="about">
      <div className="top">
        <h3 id="heading">About Me</h3>
        <p id="subheading">Why Choose me</p>
        <div className="line">
          <div className="blueline"></div>
          <div className="orangeline"></div>
        </div>
      </div>
      <div className="bottom">
        <div className="innerbox">
          <div className="leftbox">
            <img src={w} alt="" />
          </div>
          <div className="rightbox">
            <p className="detail">
              Front end Developer and UI & UX Developer with Letest Technology
              HTML, CSS, Javascript, React Js (React-Redux, React-Router,
              Toolkit), along with a knack of building applications with utmost
              efficiency.
            </p>

            <div className="point">
                <span><FaDotCircle  className="listdot"/><p className="p">Front End Developer</p></span>
                <span><FaDotCircle  className="listdot"/><p className="p">Intractive Webpage as per the Design</p></span>
                <span><FaDotCircle  className="listdot"/><p className="p">React all feature</p></span>
                <span><FaDotCircle  className="listdot"/><p className="p">Redux for State Management</p></span>
            </div>
            <div className="buttons">
            <button id="resume">Resume</button>
            <button id="hire">Hire Me</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
