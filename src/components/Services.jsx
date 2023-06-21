import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
const Services = () => {
  return (
    <div>
      <Carousel
      infiniteLoop
      autoPlay
      // showArrows={False}
      // showIndicators={False}
      >
    

        <div>
          <img src={img1} alt="" />
          <p>full stack</p>
        </div>
        <div>
          <img src={img2} alt="" />
          <p>peer-to-peer</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Services
