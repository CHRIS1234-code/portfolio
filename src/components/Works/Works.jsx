import React from 'react'
import './Works.css'
import upWork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import { useContext } from "react";
import { themeContext } from '../../context';
import { motion } from 'framer-motion';

import { Link } from 'react-scroll';




export default function Works() {
      const theme= useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='works'>
          {/* left */}
          <div className="amazing">
          <span style={{color: darkMode ? "white" : ''}}>Works For All These</span>
          <span>Brands & clients</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod
          <br /> 
           tempor incididunt ut labore et dolore magna aliqua
           <br />
           tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit
           <br />
           Lorem ipsum dolor sit amet 
          </span>
          <Link spy={true} to="Contact" smooth={true} className='button w-button'>Hire me</Link>
          
          <div className='blur s-blur1' style={{background: 'gray'}}></div>
        </div>

        {/* right */}
        <div className="w-right">
            <motion.div 
                animate={{
                    rotate: 360,
                }}
            transition={{duration: 2, type: 'spring', repeat: Infinity, repeatDelay: 3}}
            className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={upWork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div>
            </motion.div>
            {/* background circle */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle pinkCircle"></div>

        </div>
    </div>
  )
}

// import { useContext } from "react";
// import { themeContext } from '../../context';
//   const theme= useContext(themeContext);
//   const darkMode = theme.state.darkMode;

// style={{color: darkMode ? "white" : ''}}
