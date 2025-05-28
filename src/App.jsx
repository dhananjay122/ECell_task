import React from "react";
import EventsPage from "./pages/EventsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black min-h-screen h-full w-full py-12 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <Navbar />
      <EventsPage /> 
      <Footer />
    </div>
  );
}



export default App;


