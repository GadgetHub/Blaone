import React,{useState} from "react";
import Banimg from "../assets/tv.png";
import Headset from "../assets/headset.png";
import Laptop from "../assets/laptop.png";
import Iphone from "../assets/unsplash.png";

import { FaRegSquare } from "react-icons/fa";



const slides = [
  {
    
    url: Banimg,
  },
  {
    url: Headset,
  },
  {
    url: Laptop,
  },
  {
    url: Iphone,
  },
];


const Banner = () => {

  const [CurrentSlide, SetCurrentSlide] = useState(0)

  const SwitchSlide = (index) => {
    SetCurrentSlide(index)
  }

  return (
    <div className="w-full bg-[#F2F6FC]">
      <div className="max-w-7xl w-full font-Gordita m-auto grid md:grid-cols-2 md:gap-10">
        <div className="sm:pt-20 sm:pb-14">
          <h1 className="uppercase font-bold sm:text-5xl leading-[1.2] tracking-wide pt-8">
            Best Price <br /> Easy-to-Use Platform
          </h1>
          <p className="capitalize text-sm sm:w-2/4 sm:pr-12 my-4 font-light sm:leading-5 tracking-wide">
            Shop hundreds of revolutionizing used gadgets from different
            manufacturers as leading brand for up to 70 % saving guaranteed
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:pt-6">
            <button
              className="text-xl  hover:bg-black hover:border-black bg-[#0043C6] text-blue-100 px-32 border-2 border-[#0043C6]  py-3 rounded-lg tracking-wide font-bold"
              type="submit"
            >
              SELL
            </button>
            <button
              className="text-xl hover:bg-blue-100 border-2 border-[#0043C6]  text-[#0043C6] sm:ml-8 px-32  py-3 rounded-lg tracking-wide font-bold"
              type="submit"
            >
              BUY
            </button>
          </div>
        </div>
        <div className="pl-20 flex  flex-col items-center">
          <img src={`${slides[CurrentSlide].url}`} alt="" className=" w-2/3 " />
          <div className="flex  justify-center gap-2 items-center">
            {slides.map((slide, slideIndex) => (
              <FaRegSquare
                className={slideIndex == CurrentSlide ? "text-blue-800 bg-blue-800" : "text-gray-300 bg-gray-300"}
                onClick={() => SwitchSlide(slideIndex)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner