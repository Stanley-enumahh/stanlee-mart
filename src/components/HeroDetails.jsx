export default function HeroDetails(props) {
  const { header, img, text, text2 } = props.data;

  return (
    <div className="flex items-center justify-center text-white w-[100%] h-full">
      <div className="md:mt-0 mt-6 flex md:flex-row flex-col-reverse justify-between items-center md:w-full w-[90%] h-full">
        <div className="md:pl-10">
          <p>{text}</p>
          <h1 className="md:text-5xl text-3xl md:font-normal font-bold">
            {header}
          </h1>
          <p>{text2}</p>
        </div>
        <div>
          <img
            className="object-cover md:w-[70%] w-[55%] drop-shadow-2xl"
            src={img}
            alt={header}
          />
        </div>
      </div>
    </div>
  );
}
