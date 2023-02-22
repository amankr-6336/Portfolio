import React from "react";
import ep from '../../asset/ep.png'
import sp from '../../asset/p2.png';
import np from '../../asset/np.png';
import n from '../../asset/nikep.png';
import v from '../../asset/vlogp.png';
import ap from '../../asset/ap.png'

import "./Project.scss";

function Project() {
  return (
    <div className="project">
      <div className="topi">
        <h3 id="heading">Project</h3>

        <div className="line">
          <div className="blueline"></div>
          <div className="orangeline"></div>
        </div>
      </div>
      <div className="innerbox">
        <div className="projectbox">
          <div className="projectimage">
            <img src={ep} alt="" />
          </div>
          <div className="projectname">
            <h4>E-commerce Website</h4>
          </div>
          <div className="projectbutton">
            <button id="link">Github</button>
            <button id="onlink">Demo</button>
          </div>
        </div>
        <div className="projectbox">
          <div className="projectimage">
            <img src={sp} alt="" />
          </div>
          <div className="projectname">
            <h4>Social media app</h4>
          </div>
          <div className="projectbutton">
            <button id="link">Github</button>
            <button id="onlink">Demo</button>
          </div>
        </div>
        <div className="projectbox">
          <div className="projectimage">
            <img src={np} alt="" />
          </div>
          <div className="projectname">
            <h4>Note Taking app</h4>
          </div>
          <div className="projectbutton">
            <button id="link">Github</button>
            <button id="onlink">Demo</button>
          </div>
        </div>
        <div className="projectbox">
          <div className="projectimage">
            <img src={n} alt="" />
          </div>
          <div className="projectname">
            <h4>Nike clone</h4>
          </div>
          <div className="projectbutton">
            <button id="link">Github</button>
            <button id="onlink">Demo</button>
          </div>
        </div>
        <div className="projectbox">
          <div className="projectimage">
            <img src={v} alt="" />
          </div>
          <div className="projectname">
            <h4>Vlog website</h4>
          </div>
          <div className="projectbutton">
            <button id="link">Github</button>
            <button id="onlink">Demo</button>
          </div>
        </div>
       
        <div className="projectbox">
          <div className="projectimage">
            <img src={ap} alt="" />
          </div>
          <div className="projectname">
            <h4>Travel app</h4>
          </div>
          <div className="projectbutton">
            <button id="link">Github</button>
            <button id="onlink">Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
