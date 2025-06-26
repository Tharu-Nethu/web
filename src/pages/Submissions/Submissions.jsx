import React, { useEffect } from 'react';
import './Submissions.css';
import Header2 from '../../components/Header/Header2';
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom'; 



const Submissions = () => {
    const guidelines = [
        "Ensure your work meets all provided requirements.",
        "Double-check your details before submitting.",
        "Only the Team Leader should submit on behalf of the team.",
        "Once submitted, no edits can be made — so make sure it’s perfect!",
      ];

      const { email } = useParams();
      const teamName = decodeURIComponent(email);

      useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://server.fillout.com/embed/v1/';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }, []);

  return (
    
    <div>
      
      <Header2/>
     <div className="titlee">
        <h2>Designher Competition Submission</h2>
      </div>
      <div className='team-name'>
      <h2>Welcome, {teamName}!</h2>
      </div>
       <div className='guidelines'>
        <p>
        We’re thrilled you’ve taken on the challenge. Submit your final work and let your creativity, passion. <br></br><br></br>
        ✅ Submission Guidelines:
        
        <ul className="list-disc pl-5 space-y-1">
        {guidelines.map((item, index) => (
          <li
            key={index}
            className={index === guidelines.length - 1 ? "last-guideline" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
     
      </p>

       {/*  <SubmittedFiles/>

      <UploadSubmission teamName={teamName} /> */}
        <iframe
      src={`https://forms.fillout.com/t/5JdGhVAAF9us?teamName=${encodeURIComponent(teamName)}`}
      width="100%"
      height="900px"
      style={{ border: 'none', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
      allowFullScreen
      title="Submission Form"
    />


{/* <div
        style={{ width: '100%', height: '500px' }}
        data-fillout-id="5JdGhVAAF9us"
        data-fillout-embed-type="standard"
        data-fillout-inherit-parameters="true"
        data-fillout-dynamic-resize="true"
        data-fillout-parameters={`teamName=${encodeURIComponent(teamName)}`}

      ></div>     */}  
      
      
       </div>

      <Footer /> 
 
    </div>
  );
};

export default Submissions;