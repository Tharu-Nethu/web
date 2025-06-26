import React, { Fragment, useState, useEffect } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import AboutUs from "../components/About-us/AboutUs";
import Footer from "../components/Footer/Footer";
import CommitteeMembers from "../components/committee-members/committee-members";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <Header isScrolled={isScrolled} />
      <HeroSection />
      <AboutUs />
      <CommitteeMembers/>
      <Footer />
    </Fragment>
  );
};

export default Home;
