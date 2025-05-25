import React, { useState } from "react";
import EventCard from "../components/EventCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const categories = ["All", "Tech", "Finance", "Marketing", "Competitions"];

const events = [
  {
    title: "Ideathon",
    description: "Ideathon is to gather participants to collaboratively identify real-world problems and brainstorm innovative...",
    date: "31 Jan 2025",
    location: "NITK",
    image: "/images/Ideathon.jpg",
    category: "Tech",
  },
  {
    title: "ACE The CASE",
    description: "To provide participants with a platform to analyze and solve real-world case studies related to business...",
    date: "29 Jan 2025",
    location: "NITK",
    image: "/images/Finance.jpg",
    category: "Finance",
  },
  {
    title: "E-Pitch",
    description: "To encourage creative problem-solving and entrepreneurship by challenging participants to come up with viable...",
    date: "28 Jan 2025",
    location: "NITK",
    image: "/images/E-Pitch.jpeg",
    category: "Marketing",
  },
  {
    title: "Hack-to Future",
    description: "To encourage creative problem-solving and entrepreneurship by challenging participants to come up with viable...",
    date: "28 Jan 2025",
    location: "NITK",
    image: "/images/HTF.jpg",
    category: "Competitions",
  },
  {
    title: "Ideathon",
    description: "Ideathon is to gather participants to collaboratively identify real-world problems and brainstorm innovative...",
    date: "31 Jan 2025",
    location: "NITK",
    image: "/images/Ideathon.jpg",
    category: "Tech",
  },
  {
    title: "ACE The CASE",
    description: "To provide participants with a platform to analyze and solve real-world case studies related to business...",
    date: "29 Jan 2025",
    location: "NITK",
    image: "/images/Finance.jpg",
    category: "Finance",
  },
  {
    title: "E-Pitch",
    description: "To encourage creative problem-solving and entrepreneurship by challenging participants to come up with viable...",
    date: "28 Jan 2025",
    location: "NITK",
    image: "/images/E-Pitch.jpeg",
    category: "Marketing",
  },
  {
    title: "CTF",
    description: "To encourage creative problem-solving and entrepreneurship by challenging participants to come up with viable...",
    date: "28 Jan 2025",
    location: "NITK",
    image: "/images/CTF.jpg",
    category: "Competitions",
  },
];

const EventsPage = () => {
  const [filter, setFilter] = useState("All");

  const filteredEvents = filter === "All" ? events : events.filter(event => event.category === filter);

  return (
    <div className="bg-black min-h-screen w-full py-12 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <Navbar />
      <h1 className="text-white text-4xl sm:text-5xl font-bold text-center mb-8">Events</h1>

     {/* Filter bar */}
<div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-12">
  {categories.map((cat) => (
    <button
      key={cat}
      onClick={() => setFilter(cat)}
      className={`px-5 py-2 rounded-md font-semibold text-sm sm:text-base
        ${
          filter === cat
            ? "bg-amber-600 text-white"
            : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
        }`}
    >
      {cat}
    </button>
  ))}
</div>


      {/* Grid or Fallback Message */}
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 min-h-[40vh]">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => <EventCard key={index} {...event} />)
          ) : (
            <div className="col-span-full w-full flex justify-center items-center text-white text-xl">
              No events found for "{filter}"
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default EventsPage;








