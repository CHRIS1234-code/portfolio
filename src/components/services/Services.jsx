import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png'
import Card from '../Card/Card';
import resume from './resume.pdf'
import { useContext } from "react";
import { themeContext } from '../../context';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';



export default function Services() {
    const theme= useContext(themeContext);
  const darkMode = theme.state.darkMode;




  return (
    <div className='services' id='Services'>
        {/* left */}
        <div className="amazing">
          <span style={{color: darkMode ? "white" : ''}}>My Amazing</span>
          <span>Skills</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod
          <br /> 
           tempor incididunt ut labore et dolore magna aliqua
          </span>
          <a href={resume} download>
          <button className='button s-button'>Download CV</button>
          </a>
          <div className='blur s-blur1' style={{background: 'gray'}}></div>
        </div>
        {/* right */}
        <div className="cards">
         <motion.div 
          initial={{ left: "20rem" }}
          whileInView={{ left: "14rem" }}
         transition={{duration: 1, type: 'tween'}}
         >
          <Card 
          emoji={HeartEmoji}
          heading={'Design'}
          details={'Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd'}
          />
         </motion.div>
          {/* second card */}
         <motion.div 
          whileInView={{right: '-2rem', top: '30rem'}}
          initial={{right:'10rem'}}
          transition={{duration: 2, type: 'spring'}}
         style={{left: '-5rem', top: '10rem'}}>
          <Card 
          emoji={Glasses}
          heading={'Developer'}
          details={'Html , Css, Javascript, React, Next, Node, Express, MongoBD, Python'}
          />
         </motion.div>
         {/* 3rd card */}
         <motion.div 
          whileInView={{right: '-25rem'}}
          initial={{right:'100rem'}}
          transition={{duration: 2, type: 'spring'}}
          style={{left: '15rem', top: '19rem'}}>
          <Card 
          emoji={Humble}
          heading={'UI/UX'}
          details={'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod'}
          />
         </motion.div>
         <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>
        </div>
    </div>
  )
}


