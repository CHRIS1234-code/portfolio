import React from 'react'
import './Testimonials.css'
import profilepic1 from '../../img/profile1.jpg';
import profilepic2 from '../../img/profile2.jpg';
import profilepic3 from '../../img/profile3.jpg';
import profilepic4 from '../../img/profile4.jpg'


import 'swiper/css/pagination';
import 'swiper/css';


import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Testimonials() {

    const clients = [
            {
                img: profilepic1,
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Augue neque gravida in fermentum et sollicitudin. Enim sit amet venenatis urna."       
            },
            {
                img: profilepic2,
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Augue neque gravida in fermentum et sollicitudin. Enim sit amet venenatis urna."
            },
            {
                img: profilepic3,
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Augue neque gravida in fermentum et sollicitudin. Enim sit amet venenatis urna."
            },
            {
                img: profilepic4,
                review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Augue neque gravida in fermentum et sollicitudin. Enim sit amet venenatis urna."
            }
        ]
            

  return (
    <div className='t-wrapper' id='Testimonial'>
    <div className="t-heading">
        <span>Clients Always Get   </span>
        <span> Awesome Works  </span>
        <span>From me...</span>
        <div className="blur t-blur1" style={{background: 'var(--purple)'}}></div>
        <div className="blur t-blur2" style={{background: 'var(--blue)'}}></div>
    </div>
    {/* slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        speed={4000}
        loop={true}
        touchRatio={1.5}
        navigation={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className='slider'
        >
            {clients.map((client, index) =>{
                return(
                    <SwiperSlide key={index}>
                    <div className="testimonial">
                        <img src={client.img} alt="" />
                        <span>{client.review}</span>
                    </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}
