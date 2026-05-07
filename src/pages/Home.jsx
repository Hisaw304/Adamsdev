import React from "react";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import WhatIDo from "../components/WhatIDo";
import Testimonials from "../components/Testimonials";
import FaQuestions from "../components/FaQuestions";
import Contact from "../components/Contact";
import TechStack from "../components/TechStack";
import WorkExperience from "../components/WorkExperience";
import WhyChooseMe from "../components/WhyChooseMe";

const Home = () => {
  return (
    <div>
      <Hero />
      <Portfolio />
      <WhatIDo />
      <WhyChooseMe />
      <TechStack />
      <WorkExperience />
      <Testimonials />
      <FaQuestions />
      <Contact />
    </div>
  );
};

export default Home;
