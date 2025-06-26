import React from "react";
import "./committee-members.css";

const CommitteeMembers = () => {
  

  const members = [
    { name: "Sahaswari Senanayaka", position: "Secretary", photo: "./images/committee/Secretary.jpg" },
    { name: "Samodyani Kaluarachchi ", position: "Vice Chair", photo: "./images/committee/Vicechair.jpg" },
    { name: "Sachinthani Hansika", position: "Treasurer", photo: "./images/committee/Treasurer.jpg" },
    { name: "Tharunethu Wanniarachchi", position: "Webmaster", photo: "./images/committee/Webmaster.jpg" },
    { name: "Irushi Kumarathissa ", position: "Program & Event Organizer", photo: "./images/committee/Peo.jpg" },
    { name: "Subhani Uduwawala", position: "Publicity & Public Visibility Comittee Lead", photo: "./images/committee/Editor.jpg" },
    { name: "Isuri Gunaratne", position: "Editor", photo: "./images/committee/incharger1.jpg" },
    { name: "Punsara Sewwandi", position: "Public Relations and External Affairs commtitee Lead", photo: "./images/committee/Pr.jpg" },
  ];

  return (
    <div className="committee-page">
      <h2 className="committee-title">The Team Behind the Vision</h2>
     
     <div className = 'committee-container'>
      <div className="inchargers-row">
        <div className="member-card">
          <img src="./images/committee/incharger1.jpg" alt="In-Charger 1" className="member-photo"/>
          <h3 className="member-name">Dr. Nadeesha Sandamali</h3>
          <p className="member-position">Advisor</p>
        </div>
        <div className="member-card">
          <img src="./images/committee/Chair.jpg" alt="Chair" className="member-photo"/>
          <h3 className="member-name">Shakya Rupasinghe</h3>
          <p className="member-position">Chair</p>
        </div>
      </div>
       

      <div className="members-container">
      <div className="members-grid">
        {members.map((member, index) => (
          <div className="member-card" key={index}>
            <img src={member.photo} alt={member.name} className="member-photo" />
            <h3 className="member-name">{member.name}</h3>
            <p className="member-position">{member.position}</p>
          </div>
        ))}
      </div>
      </div>
      </div>
    </div>
  );
};

export default CommitteeMembers;
