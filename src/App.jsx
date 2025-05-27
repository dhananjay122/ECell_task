import React from "react";
import EventsPage from "./pages/EventsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-4">
       <Navbar />
      <EventsPage/>
      <Footer/>
    </div>
  );
}


export default App;


