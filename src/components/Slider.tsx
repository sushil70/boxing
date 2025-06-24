"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextImage } from "./ui/Image";

type CarouselProps = {
  images: string[];
};

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {images.map((src, index) => (
        <div key={index}>
          <NextImage
            src={src}
            className="relative w-full h-[800px]"
            alt={`${index}`}
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
