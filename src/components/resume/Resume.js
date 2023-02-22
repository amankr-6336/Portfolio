import React from "react";
import "./Resume.scss";
import { FaGraduationCap } from "react-icons/fa";
import { BsLaptop } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { FaHistory } from "react-icons/fa";
import {FaDotCircle} from 'react-icons/fa'


function Resume() {
  
//   const [style, setstyle] = useState("false");
//   const [style1, setstyle1] = useState("false");
//   const [style2, setstyle2] = useState("false");
//   const [style3, setstyle3] = useState("false");

 

  function handlescrolleducation(){
   var access=document.getElementById("education");
   access.scrollIntoView({behavior: 'smooth'},true);
  }

  function handlescrollskill(){
   
   var access=document.getElementById("skill");
   access.scrollIntoView({behavior: 'smooth'},true);
  }

  function handlescrollproject(){
   // setstyle2(!style2);
   var access=document.getElementById("project");
   access.scrollIntoView({behavior: 'smooth'},true);
  }
  
  function handlescrollwork(){
   // setstyle3(!style3);
   var access=document.getElementById("work");
   access.scrollIntoView({behavior: 'smooth'},true);
  }

  return (
    <div className="resumebox">
      <div className="topi">
        <h3 id="heading">Resume</h3>
      
        <div className="line">
          <div className="blueline"></div>
          <div className="orangeline"></div>
        </div>
      </div>
      <div className="innerbox">
        <div className="leftbox">
          <div className="division division2" onClick={handlescrolleducation}>
            <div className="top">
              <div className="toggle"></div>
            </div>
            <div className="middle">
              <FaGraduationCap />
              <h4>Education</h4>
            </div>
            <div className="bottom">
              <div className="btoggle"></div>
            </div>
          </div>
          <div className="division" onClick={handlescrollskill}>
            <div className="top">
              <div className="toggle"></div>
            </div>
            <div className="middle">
              <BsLaptop />
              <h4>Programming Skills</h4>
            </div>
            <div className="bottom">
              <div className="btoggle"></div>
            </div>
          </div>
          <div className="division" onClick={handlescrollproject}>
            <div className="top">
              <div className="toggle"></div>
            </div>
            <div className="middle">
              <GoGraph />
              <h4>Project</h4>
            </div>
            <div className="bottom">
              <div className="btoggle"></div>
            </div>
          </div>
          <div className= "division" onClick={handlescrollwork}>
            <div className="top">
              <div className="toggle"></div>
            </div>
            <div className="middle">
              <FaHistory />
              <h4>Work history</h4>
            </div>
            <div className="bottom">
              <div className="btoggle"></div>
            </div>
          </div>
        </div>
        <div className="rightbox">

          <div className="rightinbox">
           <div id="education">
            <div className="edu">
              <div className="leftside">
                <FaDotCircle id="circle"/>
                <h4>MERN stack Developer</h4>
              
              </div>
              <div className="rightside">
                <h4>2022-2023</h4>
              </div>
             
            </div>

            <div className="edu">
              <div className="leftside">
              <FaDotCircle id="circle"/>
                <h4>Web development</h4>
              </div>
              <div className="rightside">
                <h4>2021-2020</h4>
              </div>
            </div>

            <div className="edu">
              <div className="leftside">
              <FaDotCircle id="circle"/>
                <h4>btech </h4>
              </div>
              <div className="rightside">
                <h4>2017-2021</h4>
              </div>
            </div>

            <div className="edu">
              <div className="leftside">
              <FaDotCircle id="circle"/>
                <h4>intermediate</h4>
              </div>
              <div className="rightside">
                <h4>2014-2015</h4>
              </div>
            </div>
            </div>

            <div id="difference1"></div>
            
            <div id="skill">
            <div className="skill" >
               <div className="top-skill">
               <FaDotCircle id="circle"/>
                  <h4>Reactjs</h4>
               </div>
               <div className="bar">
                  <div id="react" className="range"></div>
               </div>
            </div>

            <div className="skill">
               <div className="top-skill">
               <FaDotCircle id="circle"/>
                  <h4>JavaScript</h4>
               </div>
               <div className="bar">
                  <div id="js" className="range"></div>
               </div>
            </div>

            <div className="skill">
               <div className="top-skill">
               <FaDotCircle id="circle"/>
                  <h4>CSS</h4>
               </div>
               <div className="bar">
                  <div id="css" className="range"></div>
               </div>
            </div>
            
            <div className="skill">
               <div className="top-skill">
               <FaDotCircle id="circle"/>
                  <h4>Nodejs</h4>
               </div>
               <div className="bar">
                  <div id="Node" className="range"></div>
               </div>
            </div>
            <div className="skill">
               <div className="top-skill">
               <FaDotCircle id="circle"/>
                  <h4>C++</h4>
               </div>
               <div className="bar">
                  <div id="c" className="range"></div>
               </div>
            </div>
            </div>


            <div id="difference2"></div>
            
            <div id="project">
            <div className="edu">
              <div className="leftside">
              <FaDotCircle id="circle"/>
                <h4> full stack E-commerce website</h4>
              </div>
              <div className="rightside">
                <h4>2023-2023</h4>
              </div>
            </div>

            <div className="edu">
              <div className="leftside">
              <FaDotCircle id="circle"/>
                <h4>Social Media</h4>
              </div>
              <div className="rightside">
                <h4>2022-2023</h4>
              </div>
            </div>

            <div className="edu">
              <div className="leftside">
              <FaDotCircle id="circle"/>
                <h4>Personal Portfolio</h4>
              </div>
              <div className="rightside">
                <h4>2023-2023</h4>
              </div>
            </div>

            <div className="edu">
              <div className="leftside">
              <FaDotCircle id="circle"/>
                <h4>Note taking app</h4>
              </div>
              <div className="rightside">
                <h4>2022-2022</h4>
              </div>
            </div>

            <div className="edu">
              <div className="leftside">
              <FaDotCircle id="circle"/>
                <h4>Nike clone</h4>
              </div>
              <div className="rightside">
                <h4>2022-2022</h4>
              </div>
            </div>
            </div>


            <div id="difference3">
               
            </div>
            
            <div id="work">
            <div className="edu">
              <div className="leftside">
              <FaDotCircle id="circle"/>
                <h4>Infosys</h4>
              </div>
              <div className="rightside">
                <h4>2022-present</h4>
              </div>
            </div>
            </div>

            <div id="difference4">
             
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
