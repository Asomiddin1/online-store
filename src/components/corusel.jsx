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
      <div className="w-full">
       
        <Slider {...settings}>
          <div className="">
         <img className="w-full" src={require('./images/TKekmDopC1.jpg')} alt="" />
          </div>
          <div>
          <img className="w-full"  src={require('./images/iw7naDSX74.jpg')} alt="" />
          </div>
          <div>
          <img className="w-full"  src={require('./images/xH7GoX9z5U.jpg')} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}