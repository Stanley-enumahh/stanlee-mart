import React from "react";
import HeroImage1 from "../assets/HPNG2-800x800-removebg-preview.png";
import HeroImage2 from "../assets/winter jacket.png";
import HeroImage3 from "../assets/ei_1719148941458-removebg-preview.png";
import HeroDetails from "./HeroDetails";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div
      id="top"
      className="banner relative overflow-hidden w-[90%] rounded-md m-auto h-[350px] bg-[#084c61] md:mt-28 mt-20 shadow-lg"
    >
      <div className="w-full h-full">
        <Slider {...settings}>
          {HeroData.map((HeroData, index) => {
            return <HeroDetails data={HeroData} key={index} />;
          })}
        </Slider>
      </div>
    </div>
  );
}
const HeroData = [
  {
    img: HeroImage1,
    text: "Best deal online on smart devices",
    header: "SMART DEVICES",
    text2: "up to 70% off",
    id: 1,
  },
  {
    img: HeroImage2,
    text: "Best deal online on clothings",
    header: "SLICK WEARS",
    text2: "up to 90% off",
    id: 1,
  },
  {
    img: HeroImage3,
    text: "Best deal online on smart watches",
    header: "SMART WEARABLE WATCH",
    text2: "up to 80% off",
    id: 1,
  },
];
