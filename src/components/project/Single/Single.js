import React from 'react'
import './Single.scss'
import p from '../../../asset/p2.png'

function Single() {
  return (
    <div className="projectbox">
        <div className="projectimage">
           <img src={p} alt="" />
        </div>
        <div className="projectname"><h4>E-commerce Website</h4></div>
        <div className="projectbutton">
            <button id='link'>Github</button>
            <button id='onlink'>Demo</button>
        </div>
    </div>
  )
}

export default Single