import React from 'react'
import './Experience.css'

import { useContext } from "react";
import { themeContext } from '../../context';

export default function Experience() {

    const theme= useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='experience' id='Experience'>
    <div className="achievement">
        <div className="circle">4+</div>
        <span style={{color: darkMode ? "white" : ''}}>Years</span>
        <span>Experience</span>
    </div>
    <div className="achievement">
        <div className="circle">10+</div>
        <span style={{color: darkMode ? "white" : ''}}>Projects</span>
        <span>Completed and Ongoing</span>
    </div>
    <div className="achievement">
        <div className="circle">5+</div>
        <span style={{color: darkMode ? "white" : ''}}>Conpanies</span>
        <span>Of work and also Looking for a job</span>
    </div>
    </div>
  )
}


