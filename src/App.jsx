import React from "react";
import Hero from "./components/Hero";
import VideoComponent from "./components/Video";
import CoursesOverview from "./components/CoursesOverview";
import Testimonials from "./components/Testimonials";



const App = () => {
  return (
    <div>
      <Hero />
      <CoursesOverview />
      <Testimonials />
      <VideoComponent />
    </div>
  );
};

export default App;
