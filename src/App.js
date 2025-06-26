import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/login-page/LoginPage";
import Events from "./pages/Events/Events";
import RegistrationForm from "./pages/RegistrationForm/RegistrationForm";
import Submissions from "./pages/Submissions/Submissions";
import loaderGif from "./assests/loader.gif"; 
import "./index.css";
import Eminence from "./pages/Details/Eminence";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay for loading
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as needed
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <img src={loaderGif} alt="Loading..." className="loader-gif" />
        </div>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/events" element={<Events />} />
            <Route path="/registrations" element={<RegistrationForm />} />
            <Route path="/submissions/:email" element={<Submissions />} />
            <Route path='/eminence' element={<Eminence/>} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
