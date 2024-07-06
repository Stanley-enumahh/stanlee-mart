import newsletterpix from "../assets/Mobile login-cuate.png";
import { ImRadioChecked } from "react-icons/im";

export default function Newsletter() {
  return (
    <div
      className="md:w-[80%] w-[90%] mb-12  md:h-[500px] h-fit overflow-hidden flex 
     justify-center items-center flex-col"
    >
      <div className="mb-6">
        <h1 className="font-bold text-lg">Our Newsletter</h1>
      </div>
      <div
        className="flex md:flex-row flex-col
     justify-betwwen items-center w-full justify-center"
      >
        <div className="flex flex-col md:w-[60%] w-full text-black gap-6 md:ml-8">
          <h1 className="md:text-3xl text-2xl leading-12">
            Hot off the press, <br /> into your inbox <br /> every week
          </h1>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="enter your email"
              className="md:px-4 px-2 md:w-[260px] w-fit shadow-sm text-black border outline-none md:text-lg text-xs"
            />
            <button className="bg-red-500 px-4 md:py-3 py-1 hover:bg-[#e25d66] transition-all duration-150 shadow-md rounded text-white">
              subscribe
            </button>
          </form>
          <div className="flex flex-col gap-3">
            <span className="md:text-sm text-xs flex flex-row gap-2 items-center">
              <ImRadioChecked className="text-slate-400" />
              The freshest new relaeases monthly
            </span>
            <span className="md:text-sm text-xs flex flex-row gap-2 items-center">
              <ImRadioChecked className="text-slate-400" />
              The insider interviews with authors
            </span>
            <span className="md:text-sm text-xs flex flex-row gap-2 items-center">
              <ImRadioChecked className="text-slate-400" />
              Reviews, giveaways and many more for bookworms
            </span>
          </div>
        </div>

        <div className="flex flex-col md:w-[50%] w-full  items-center">
          <div className="">
            <img
              className="w-[350px] drop-shadow-lg"
              src={newsletterpix}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
