import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "./hero-section.css";
import LoginPopup from "../../pages/login-page/LoginPage";


const images = [
  "./images/marine.png",
  "./images/com.png",
  "./images/civil.png",
  "./images/elec.png",
  "./images/mechanical.png"
];

const sentences = [
  "Sailing Beyond Limits, Anchored in Strength.",
  "Coding the Future, Shaping Possibilities.",
  "Building Dreams, Strengthening Foundations.",
  "Empowering the World with Every Spark.",
  "Fueling Innovation, Driving Change."
];
const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${images[index]})` }}
    >
      <Container>
        <Row>
          <Col lg="8" md="6" >
          <div className="hero__content">
      <div className="heading">
        <span className="heading-small">Inspiring Excellence with<br /></span>
        <span className="heading-large">Women in Engineering Affinity Group<br /></span>
        <span className="heading-medium">University of Ruhuna</span>
      </div>
    </div>
           <div className="mt-5">
          {/*  <Button type="Open" >
           Submissions 📝 
                </Button> */}
           <LoginPopup/>
           </div>
          </Col>
          <div className="hero-text-section">
          <div className="text-box">
          {sentences[index]}
          </div>
    </div>

         
          <Col lg="6" md="6"></Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
