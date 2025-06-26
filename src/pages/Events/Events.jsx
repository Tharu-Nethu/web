import React from 'react';
import './Events.css';
import Header2 from '../../components/Header/Header2';
import Footer from '../../components/Footer/Footer';
import EventsNavigator from './EventsNavigator';
import { useNavigate } from 'react-router-dom';



const Events = () => {

    const navigate = useNavigate();
    const handleSeeMore = () => {
    navigate("/eminence");
  };
  return (
    
    <div>
      <Header2/>
      {/* Background Section */}
      <div className="background-section">
      <div className='award-box-container'>
      <div className="award-box">
          <h2>IEEE Sri Lanka Section Best Affinity Group Project Award 2024 (Student Affinity Group Category) for Eminence 4.0</h2>
        </div>
        </div>
      </div>

      <div className="title">
        <h2>Explore Opportunities, Experience Growth</h2>
      </div>

      {/* Text Boxes Section */}
      <div className="text-boxes">
        <div className="textBox box1">
          <h2>Our Upcoming Events</h2>
         
        </div>

        <div className="textBox box2">
          <h2>DesignHer</h2>
          <h3 onClick={handleSeeMore}>See More</h3>
        </div>

        <div className="textBox box2">
          <h2>Eminence 5.0</h2>
          <h3>See More</h3>
        </div>

        <div className="textBox box1">
          <h2>Past Events</h2>
        </div>
      </div>
      <EventsNavigator/>
 
      <Footer /> 
 
    </div>
  );
};

export default Events;