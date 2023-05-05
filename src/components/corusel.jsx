import React, { Component } from "react";
import Slider from "react-slick";



export default class LazyLoad extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2
    };
    return (
      <div className="w-full  h-full relative right-[-3px] sm:right-0">
       
        <Slider className="sm:h-full h-[240px]" {...settings}>
          <div className="">
         <img className="w-full sm:h-full h-[230px]" src={require('./images/TKekmDopC1.jpg')} alt="" />
          </div>
          <div>
          <img className="w-full sm:h-full h-[230px]"  src={require('./images/iw7naDSX74.jpg')} alt="" />
          </div>
          <div>
          <img className="w-full sm:h-full h-[230px]"  src={require('./images/xH7GoX9z5U.jpg')} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}