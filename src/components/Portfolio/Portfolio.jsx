import React from 'react'
import './Portfolio.css'
import Sidebar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import musicApp from '../../img/musicapp.png'
import 'swiper/css';
import { useContext } from "react";
import { themeContext } from '../../context';


import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Portfolio() {
    const theme= useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='portfolio' id='Portfolio'>
        {/* heading */}
        <span style={{color: darkMode ? "white" : ''}}>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        speed={2000}
        loop={true}
        touchRatio={1.5}
        navigation={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className='portfolio-slider r-slider'
        >
            <SwiperSlide>
                <img src={Sidebar} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={musicApp} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={HOC} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

// import { useContext } from "react";
// import { themeContext } from '../../context';
//   const theme= useContext(themeContext);
//   const darkMode = theme.state.darkMode;

// style={{color: darkMode ? "white" : ''}}
