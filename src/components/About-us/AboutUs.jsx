import React from "react";
import "./about.css";
import { Container} from "reactstrap";

const AboutUs = () => {
  return (
    <section  id="about">
      <Container className="about__content">
       
            <div>
              <h2 classname='about-heading' >WIE: Where Empowerment Meets Engineering</h2>
              <p className="aboutpara">
              Institute of Electrical and Electronic Engineers, Women in Engineering (IEEE WIE) Student
              Branch Affinity Group of the University of Ruhuna was established to empower women engineers’
              involvement in technical fields. It was formed on 11 th November 2018, having fulfilled the
              requirements of the Member and Geographic Activities Board Operations Manual of IEEE. Being
              the seventh WIE Affinity Group in Sri Lanka, IEEE WIE Ruhuna strives for the promotion and
              betterment of women engineers and increasing the interest, awareness, and involvement of young
              females in technical disciplines, especially in the field of Engineering. The group mainly comprises
              undergraduate students of the Faculty of Engineering. The present counsellor of the affinity group is
              the Head of the department, Electrical and Information Engineering. 
              </p>
              <div className="text-boxx">
              <h2>💻 The Next Big Challenge is Here! <br></br>
              {/* <img src="DesignHerlogo.png" alt="custom-icon" className="custom-image2" /> 
              <img src="EMINENCElogo.png" alt="custom-icon" className="custom-image2" /> */}
              </h2>
          </div>
            </div>
           
        
      </Container>
    </section>
  );
};

export default AboutUs;
