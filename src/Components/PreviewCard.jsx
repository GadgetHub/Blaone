import React from 'react'

import { RiHeartFill } from "react-icons/ri"
import {
  MdOutlineStarPurple500,
  MdOutlineStarOutline,
  MdLocationOn,
} from "react-icons/md";


const PreviewCard = ({ product }) => {
    const { title, price, location, image, isSaved } = product;
    const Maxlength = 40;
    const Dots = `${title >= Maxlength ? "...." : ""} `;
    const TruncatedTitle = title.slice(0, Maxlength) + Dots

   
  return (
    <div className="bg-[#FFFFFF] max-w-[20rem] rounded-xl shadow-md transition Hover:duration-300 ease-in-out cursor-pointer hover:shadow-2xl">
      <div className="flex flex-col pt-4 ml-6 pb-6">
        <div className="flex justify-between pr-3 ml-2">
          <img src={image} className="object-fit" alt="" />
          <RiHeartFill
            onClick={() => Saved()}
            className={`${
              isSaved
                ? "text-[#EB3223] cursor-pointer"
                : "text-gray-300 cursor-pointer"
            }`}
            size={35}
          />
        </div>
        <div className=" pt-4">
          <h1 className="font-sans font-bold text-gray-900">
            {TruncatedTitle}
          </h1>
          <h1 className="font-sans font-bold text-[#FF6700]">₦ {price}</h1>
        </div>
        <div className="flex justify-between my-2 pr-8">
          <div className="flex items-center">
            <MdOutlineStarPurple500 size={20} className="text-[#F6BA2A]" />
            <MdOutlineStarPurple500 size={20} className="text-[#F6BA2A]" />
            <MdOutlineStarPurple500 size={20} className="text-[#F6BA2A]" />
            <MdOutlineStarOutline size={20} className="text-[#F6BA2A]" />
            <MdOutlineStarOutline size={20} className="text-[#F6BA2A]" />
            <MdOutlineStarOutline size={20} className="text-[#F6BA2A]" />
          </div>
          <span className="font-sans font-semibold text-gray-900">(24)</span>

          <p className="text-gray-500 capitalize font-sans  font-light tracking-wider">
            used
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <MdLocationOn size={25} className="text-gray-400 " />
          <p className="text-gray-500 capitalize font-sans text-lg font-extralight tracking-wider">
            {location},Nigeria
          </p>
        </div>
        <div className="pt-4 mx-10">
          <button
            className="text-base capitalize hover:bg-black hover:border-black bg-[#0043C6] text-blue-100 px-8 py-2.5 rounded-md tracking-wide font-medium"
            type="submit"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreviewCard