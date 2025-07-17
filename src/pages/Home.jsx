import React from "react";
import Hero from "../components/Hero";
import AboutUsHome from "../components/AboutUsHome";
import HiringCta from "../components/HiringCta";
import BlogsHome from "../components/BlogsHome";
import InstaHome from "../components/InstaHome";
import ContactUsHome from "../components/ContactUsHome";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <AboutUsHome />
      <HiringCta />
      <BlogsHome />
      <ContactUsHome />
    </div>
  );
};

export default Home;
