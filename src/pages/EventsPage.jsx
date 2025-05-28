import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
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
  const filterRef = useRef(null);
  const cardsRef = useRef([]);
  
    useEffect(() => {
  gsap.fromTo(
    headingRef.current,
    { y: -30, opacity: 0, scale: 0.95 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power3.out",
    }
  );
}, []);
  useEffect(() => {
    gsap.fromTo(
      filterRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }
  }, [filter]);
  


  const filteredEvents =
    filter === "All"
      ? events
      : events.filter((event) => event.category === filter);
  const headingRef = useRef(null);

  return (
    <div className="bg-black min-h-screen h-full w-full py-12 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
     <h1
       ref={headingRef}
       className="text-white text-4xl sm:text-5xl font-bold text-center mb-8 drop-shadow-[0_0_10px_rgba(128,0,255,0.6)]"
       style={{
         textShadow:
           "0 0 8px rgba(128,0,255,0.7), 0 0 15px rgba(75,0,130,0.6), 0 0 20px rgba(128,0,255,0.5)",
        }}
      >
      Events
      </h1>



      {/* Filter bar */}
      <div
        className="flex flex-wrap justify-center gap-x-7 gap-y-5 mb-12"
        ref={filterRef}
      >
        {categories.map((cat) => (
         <button
           key={cat}
           onClick={() => setFilter(cat)}
           className={`px-5 py-2 rounded-md font-semibold text-sm sm:text-base
             ${
               filter === cat
                 ? "bg-indigo-700 text-white"
                 : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
             }`}
           style={{
             boxShadow: "0 0 8px 2px rgba(0, 0, 128, 0.6), 0 0 12px 4px rgba(0, 255, 255, 0.5)"
           }}
          >
            {cat}
          </button>



        ))}
      </div>

      
  {/* Grid or Fallback Message */}
<div className="w-full">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 min-h-[40vh]">
    {filteredEvents.length > 0 ? (
      filteredEvents.map((event, index) => (
        <div key={index} ref={(el) => (cardsRef.current[index] = el)}>
          <EventCard {...event} />
        </div>
      ))
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









