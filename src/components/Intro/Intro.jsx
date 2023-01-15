/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy2 from '../../img/boy2.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png' 
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { motion } from "framer-motion";
import { useContext } from "react";
import { themeContext } from '../../context';
import { Link } from 'react-scroll';
 



  
  
export default function Intro() {
  const theme= useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='intro' id='Navbar'>
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode ? "white" : ''}}>Hay! I Am</span>
                <span> Chris DoN</span>
                <span>I am a Frontend 
                and Backend Web Developer 
                with a high level of 
                Experience, and good work</span>
            </div>
            <Link spy={true} to="Contact" smooth={true} className='i-button button'>Hire Me</Link>
            <div className="i-icons">
                <img src={Github} alt="github" />
                <img src={Linkedin} alt="linked" />
                <img src={Instagram} alt="instagram" />
                
            </div>
        </div>
 {/* right image side */}
     <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy2} alt="" />
        <motion.img
             animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
            transition={{
              duration: 5, type: 'spring', repeat: Infinity, repeatDelay: 6,ease: [0.5, 0.71, 1, 1.5],}}
                whileInView={{left: '-24%'}}
                initial={{left: '-36%'}}
                viewport={{ once: true }}
        src={glassesimoji} 
        alt="" />
 

        <motion.div
              animate={{ x: [50, 150, 10], opacity: 1, scale: 1 }}
            transition={{
              duration: 5, type: 'spring', repeat: Infinity, repeatDelay: 6, ease: [0.5, 0.4, 0, 0.4]}}
                whileInView={{left: '74%', top:'-4'}}
                initial={{left: '68%'}}
                whileTap={{ scale: 0.9 }} 
             style={{left:'20rem', top:'-4'}}
             className='floating-div'
             >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>

        
        <motion.div 
        
        animate={{ x: [-150, 150, -50], opacity: 0.5, scale: 1 }}
            transition={{
              duration: 2, type: 'spring', repeat: Infinity, repeatDelay: 6, ease: [0.5, 0.4, 0, 0.4]}}
                whileInView={{left: '0'}}
                initial={{left: '0', top:'18rem' }}
                whileTap={{ scale: 0.9 }}
        style={{top: '18rem', left: '0'}}
        className='floating-div'
        >
          <FloatingDiv  image={thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>

        <div className="blur" style={{ background: "rgba(123, 38, 243, 0.535)" }}></div>
        <div
          className="blur"
          style={{
            background: "#f7b1f1e7",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  )
}

