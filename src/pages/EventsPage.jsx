import React, { useState } from "react";
import EventCard from "../components/EventCard";

const categories = ["All", "Tech", "Finance", "Marketing", "Competitions"];

const events = [
  {
    title: "Ideathon",
    description: "Collaborate to identify real-world problems and brainstorm innovative solutions with like-minded individuals.",
    date: "31 Jan 2025",
    location: "NITK",
    image: "/images/Ideathon.jpg",
    category: "Tech",
  },
  {
    title: "CodeSprint",
    description: "A fast-paced coding competition that challenges your algorithmic and problem-solving skills under pressure.",
    date: "30 Jan 2025",
    location: "NITK",
    image: "/images/CodeSprint.jpg",
    category: "Tech",
  },
  {
    title: "TechTalks",
    description: "Industry professionals share insights on emerging technologies, career guidance, and innovation trends.",
    date: "29 Jan 2025",
    location: "NITK",
    image: "/images/TechTalks.jpeg",
    category: "Tech",
  },
  {
    title: "ACE The CASE",
    description: "Analyze and solve real-world case studies to test your strategic thinking and business acumen.",
    date: "29 Jan 2025",
    location: "NITK",
    image: "/images/Finance.jpg",
    category: "Finance",
  },
  {
    title: "FinQuest",
    description: "A quiz-based finance challenge designed to test your knowledge of markets, economics, and investment trends.",
    date: "30 Jan 2025",
    location: "NITK",
    image: "/images/FinQuest.png",
    category: "Finance",
  },
  {
    title: "Market Mania",
    description: "Simulate stock market trading and compete to build the highest portfolio in this exciting finance game.",
    date: "31 Jan 2025",
    location: "NITK",
    image: "/images/MarketMania.jpeg",
    category: "Finance",
  },
  {
    title: "E-Pitch",
    description: "Pitch your startup idea to judges and investors, competing for feedback, mentorship, and potential funding.",
    date: "28 Jan 2025",
    location: "NITK",
    image: "/images/E-Pitch.jpeg",
    category: "Marketing",
  },
  {
    title: "Brand War",
    description: "Battle it out in a creative branding competition where teams reimagine and market a fictional product.",
    date: "30 Jan 2025",
    location: "NITK",
    image: "/images/BrandWar.jpeg",
    category: "Marketing",
  },
  {
    title: "Ad-Mad Show",
    description: "Unleash your creativity in a quirky ad-making competition with limited resources and unlimited ideas.",
    date: "31 Jan 2025",
    location: "NITK",
    image: "/images/AdMad.jpeg",
    category: "Marketing",
  },
  {
    title: "Hack-to-Future",
    description: "A 24-hour hackathon to develop prototypes that solve futuristic societal or environmental challenges.",
    date: "28 Jan 2025",
    location: "NITK",
    image: "/images/HTF.jpg",
    category: "Competitions",
  },
  {
    title: "CTF (Capture The Flag)",
    description: "A cybersecurity challenge where participants solve puzzles and find 'flags' to score points and climb the leaderboard.",
    date: "28 Jan 2025",
    location: "NITK",
    image: "/images/CTF.jpg",
    category: "Competitions",
  },
  {
    title: "RoboRace",
    description: "Build and race your autonomous or manually controlled robots through a challenging obstacle course.",
    date: "31 Jan 2025",
    location: "NITK",
    image: "/images/RoboRace.webp",
    category: "Competitions",
  },
];


const EventsPage = () => {
  const [filter, setFilter] = useState("All");

  const filteredEvents = filter === "All" ? events : events.filter(event => event.category === filter);

  return (
    <div className="bg-black min-h-screen h-full w-full py-12 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
      
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
      
    </div>
    
  );
};

export default EventsPage;








