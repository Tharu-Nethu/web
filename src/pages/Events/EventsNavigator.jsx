import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../components/firebase";
import "./EventsNavigator.css";

const EventsNavigator = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "events"));
        const eventsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setEvents(eventsData);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };

    fetchEvents();
  }, []);

  if (events.length === 0) return <p>Loading events...</p>;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="events-container">
      <Slider {...sliderSettings}>
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <div className="event-year">{event.Year}</div>
            <img
              src={`/images/events/${event.Name.replace(/\s+/g, "_").toLowerCase()}.png`}
              alt={event.Name}
              className="event-image"
            />
            <div className="event-info">
              <h2 className="event-title">{event.Name}</h2>
              <p className="event-description" dangerouslySetInnerHTML={{__html:event.Description}}></p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const CustomNextArrow = (props) => (
  <div
    {...props}
    className="custom-arrow next-arrow left-14 transform  cursor-pointer text-gray-700 hover:text-gray-900 z-10"
  >
  ▸
  </div>
);

const CustomPrevArrow = (props) => (
  <div
    {...props}
    className="custom-arrow prev-arrow left-2  transform  cursor-pointer text-gray-700 hover:text-gray-900 z-10"
  >
   ◂
  </div>
);

export default EventsNavigator;