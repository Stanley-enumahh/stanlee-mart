import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedinIn, FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <div
      id="footer"
      className="flex flex-col w-full items-center p-12 bg-[#34435e] justify-center text-white"
    >
      <div className=" text-sm md:w-[80%] w-[90%]  md:py-8 py-5 flex flex-row justify-between">
        <p className="md:text-sm text-xs">
          Stay connected with us on social media
        </p>
        <ul className="flex flex-row gap-4">
          <li>
            <Link>
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link>
              <FaLinkedinIn />
            </Link>
          </li>
          <li>
            <Link>
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link>
              <FaTwitter />
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex md:flex-row flex-col md:gap-0 gap-2 md:w-[80%] w-[90%] justify-between text-white">
        <h1 className=" md:text-lg text-sm font-bold">
          Subscribe to our newsletter
        </h1>
        <form>
          <input
            type="email"
            placeholder="enter your email"
            className="md:px-4 px-2 md:w-[260px] w-fit shadow-sm text-black border outline-none  md:text-sm text-xs py-1"
          />
          <button className="bg-red-500 md:px-4 px-3 py-1 hover:bg-[#e25d66] transition-all duration-150 shadow-md md:text-sm text-xs ml-2 text-white md:ml-1">
            subscribe
          </button>
        </form>
      </div>

      <div className="grid md:grid-cols-3 grid-row-3 md:w-[80%] w-[90%] text-sm mb-10 md:gap-10 gap-5 md:mt-4 mt-2">
        <div className="flex flex-col gap-4">
          <h1 className="border-b border-blue-400 py-2 font-bold">S-MART</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nulla
            molestiae quidem repellat inventore.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="border-b border-blue-400 py-2 font-bold">
            QUICK ACCESS
          </h1>
          <ul className="flex flex-col gap-2">
            <li>
              <Link>Your account</Link>
            </li>
            <li>
              <Link>Shipping rate</Link>
            </li>
            <li>
              <Link>Become an affiliate</Link>
            </li>
            <li>
              <Link>Help</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="border-b border-blue-400 py-2 font-bold">REACH US</h1>
          <ul className="flex flex-col gap-2">
            <li>
              <Link className="flex flex-row gap-2 items-center">
                <FaPhone /> +234 813 012 7556
              </Link>
            </li>
            <li>
              <Link className="flex flex-row gap-2 items-center">
                <MdEmail /> enumah44@gamil.com
              </Link>
            </li>
            <li>
              <Link className="flex flex-row gap-2 items-center">
                <FaLocationDot />
                Help
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
