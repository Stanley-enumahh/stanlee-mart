import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FashionDetails from "./fashionDetails";
import PhoneDetails from "./PhoneDetails";
import { PhoneData } from "./products";

export default function Fashion() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      id="fashion"
      className=" w-[90%] m-auto h-[350px] md:mt-10 mt-10 mb-14"
    >
      <h1 className="mb-6 pb-2 font-bold md:text-lg text-sm border-b-2 border-blue-300 w-fit">
        Grab the best deal on{" "}
        <span className="text-blue-500">smart gadgets</span>
      </h1>
      <div className="w-full h-full">
        <Slider {...settings}>
          {PhoneData.map((PhoneData, index) => {
            if (PhoneData.category == "fashion") {
              return (
                <FashionDetails
                  name={PhoneData.name}
                  img={PhoneData.img}
                  price={PhoneData.price}
                  category={PhoneData.category}
                  itemId={PhoneData.id}
                  key={index}
                />
              );
            } else {
              return null;
            }
          })}
        </Slider>
      </div>
    </div>
  );
}
