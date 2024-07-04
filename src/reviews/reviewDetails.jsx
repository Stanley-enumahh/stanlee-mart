import React from "react";

export default function ReviewDetails(props) {
  const { img, name, occupation, testimonial, id } = props.data;

  return (
    <div className="rounded shadow-lg md:p-3 p-2 relative flex flex-col w-full justify-center items-center text-center text-sm bg-white md:h-[200px] h-fit md:gap-8 gap-5">
      <div className="flex flex-col  justify-center items-center">
        <div className="md:w-[80px] w-[60px] md:top-[-45px] top-[-23px] absolute bg-[#ebebeb] md:h-[80px] h-[60px] rounded-full border-2 border-green-300 flex items-center justify-center overflow-hidden">
          <img className=" w-full h-full object-cover " src={img} alt={name} />
        </div>
        <p className="mt-8 text-xs md:text-sm">{testimonial}</p>
      </div>

      <div className=" leading-6">
        <h1 className="font-bold">{name}</h1>
        <p>{occupation}</p>
      </div>
    </div>
  );
}
