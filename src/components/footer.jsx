import { Link } from "react-router-dom"
import { FaFacebookF,  FaInstagram, FaTwitter   }  from "react-icons/fa";
import { FaLinkedinIn, FaPhone, FaLocationDot  } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const Footer = () =>{
  return (
    <div className="flex flex-col w-full items-center bg-[#34435e] justify-center text-white">
          <div className="text-sm md:w-[70%] w-[90%] border- md:py-8 py-5 flex flex-row justify-between">
              <p className="md:text-sm text-xs" >Stay connected with us on social media</p>
              <ul className="flex flex-row gap-4">
                <li><Link><FaFacebookF /></Link></li>
                <li><Link><FaLinkedinIn /></Link></li>
                <li><Link><FaInstagram /></Link></li>
                <li><Link><FaTwitter /></Link></li>
              </ul>
          </div>

          <div className="grid md:grid-cols-3 grid-row-3 md:w-[70%] w-[90%] text-sm mb-10 md:gap-10 gap-5 md:mt-4 mt-2">
             <div className="flex flex-col gap-4">
              <h1 className="border-b border-blue-400 py-2 font-bold">
                S-MART
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nulla molestiae quidem repellat inventore.
              </p>
             </div>


             <div className="flex flex-col gap-4">
               <h1 className="border-b border-blue-400 py-2 font-bold">
                  QUICK ACCESS
               </h1>
              <ul className="flex flex-col gap-2">
                  <li><Link>Your account</Link></li>
                  <li><Link>Shipping rate</Link></li>
                  <li><Link>Become an affiliate</Link></li>
                  <li><Link>Help</Link></li>
              </ul>
             </div>
             <div className="flex flex-col gap-4">
              <h1 className= "border-b border-blue-400 py-2 font-bold">
                REACH US
              </h1>
              <ul className="flex flex-col gap-2">
                  <li><Link className="flex flex-row gap-2 items-center"><FaPhone /> +234 813 012 7556</Link></li>
                  <li><Link className="flex flex-row gap-2 items-center"><MdEmail /> enumah44@gamil.com</Link></li>
                  <li><Link className="flex flex-row gap-2 items-center"><FaLocationDot />Help</Link></li>
              </ul>
             </div>
          </div>
    </div>
  )
}