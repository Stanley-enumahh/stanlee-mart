import Navbar from "../components/Navbar";
import { Footer } from "../components/footer";
import Review from "../reviews/review";
import Hero from "../components/hero";
import Phones from "../components/Phones";
import Fashion from "../components/fashion";
import { Link } from "react-scroll";
import { IoArrowUp } from "react-icons/io5";
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { MdOutlineCancel } from "react-icons/md";
import PhoneDetails from "./PhoneDetails";
import { PhoneData } from "./products";

export default function Homepage(props) {
  const handleSetActive = (to) => {};

  return (
    <div className=" overflow-hidden w-full flex flex-col justify-center items-center relative">
      <Navbar />
      <Hero />
      <Phones />
      <Fashion />
      <Review />
      <Footer />
      <Link
        className="fixed bottom-6 p-2 bg-blue-600 text-white rounded-sm shadow right-5 animate-pulse"
        activeClass="active"
        to="top"
        spy={true}
        smooth={true}
        offset={-140}
        duration={500}
        onSetActive={handleSetActive}
      >
        <IoArrowUp />
      </Link>
    </div>
  );
}
