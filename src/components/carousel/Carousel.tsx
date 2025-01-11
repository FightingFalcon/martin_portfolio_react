import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
  children: React.ReactNode;
  slidesToShow?: number; 
}

export default function Carousel({ children, slidesToShow }: CarouselProps) {
  const childCount = React.Children.count(children); 
  const settings = {
    dots: true,
    infinite: childCount > 1, 
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: Math.min(slidesToShow || 3, childCount), // Limit slidesToShow to child count
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full">
      <Slider {...settings} className="custom-slider">
        {children}
      </Slider>
    </div>
  );
}
