import React from 'react'
import './FloatingDiv.css'

export default function FloatingDiv({image, txt1, txt2}) {
    

  return (
    <div className='floatingDiv'>
        <img src={image} alt="" />
        <span>
            {txt1}
            <br />
            {txt2}
        </span>
    </div>
  )
}

// import { useContext } from "react";
// import { themeContext } from '../../context';
//   const theme= useContext(themeContext);
//   const darkMode = theme.state.darkMode;

// style={{color: darkMode ? "white" : ''}}

// initial={{left: '-36%'}}
// whileInView={{left: '-24%'}}
// transition={transition}

// animate={{ x: [150, 50, 400], opacity: 3}}
// whileInView={{left: '-14rem'}}
// initial={{left:'25%'}}
// transition={transition}

