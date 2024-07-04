import React from "react";
import { ReviewData } from "./reviewsData";
import ReviewDetails from "./reviewDetails";

export default function Review() {
  return (
    <div className="flex md:mb-6 w-full md:h-[400px] h-fit justify-center">
      <div className=" flex flex-col md:w-[80%] w-[100%] h-full border-2 items-center overflow-hidden bg-[#ebebeb] rounded p-4 gap-6 justify-between">
        <div className="flex flex-col text-center ">
          <h1 className="font-bold">Client reviews</h1>
          <p className="text-xs">see what your customers has to say about us</p>
        </div>

        <div className="flex md:flex-row flex-col md:h-[70%] h-[680px] w-full md:gap-5 gap-14 justify-center items-center border-3 border-black ">
          {ReviewData.map((ReviewData, index) => {
            return <ReviewDetails data={ReviewData} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
