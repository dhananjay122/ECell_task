import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const EventCard = ({ title, description, date, location, image }) => {
  return (
    <div className="bg-gray-900 text-white rounded-3xl overflow-hidden shadow-xl border-2 border-black hover:border-amber-500 transition-all hover:-translate-y-1 hover:scale-105 duration-300 flex flex-col justify-between h-full">
      
      {/* Image Banner */}
      <div className="w-full h-48 sm:h-56 md:h-64 lg:h-48 xl:h-56">
        <img
          src={image}
          alt={`${title} banner`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 p-5">
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>

          <div className="flex items-center text-sm text-gray-400 gap-2 mb-1">
            <FaLocationDot className="text-orange-400" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-400 gap-2 mb-4">
            <FaRegCalendarAlt className="text-orange-400" />
            <span>{date}</span>
          </div>

          <p className="text-gray-300 text-sm line-clamp-3">{description}</p>
        </div>

        {/* Register Button */}
        <div className="mt-6">
          <button className="w-full sm:w-auto bg-[#FF5722] text-white hover:bg-[#E64A19] px-6 py-2 rounded-full flex items-center justify-center gap-2 text-sm font-semibold transition mx-auto">
            Register <FiArrowUpRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;













