import React, { useState } from 'react';
import './RegistrationForm.css';
import Header2 from '../../components/Header/Header2';
import { useNavigate } from 'react-router-dom';
import GoogleStyledForm from './GoogleStyledForm';
import Eminence from '../Details/Eminence';


const RegistrationForm = () => {
  const [step, setStep] = useState('start');
  const [showPDF, setShowPDF] = useState(false);

  
  const navigate = useNavigate();
  const handleSelect = (choice) => {
    if (choice === 'eminence') setStep('eminence');
    else if (choice === 'designher') setStep('designher');
    else setStep('start');
  };




  
  
  
  return (
   <div>
    <Header2/>
   <div className="registration-container">
    
   <div className="title">
        <h2>Secure Your Spot — Register Now!</h2>
      </div>
      <div className='quiz-container'>
      <p>👋 Hi there! Welcome to WIE – University of Ruhuna! <br></br>
      We’re thrilled to have you here. Are you ready to explore our exciting events and take the next step toward an amazing experience? 🚀</p>
     
      
      {step === 'start' && (
        <div className="choices">
          <p>Which competition or program would you like to register for?</p>
          <button onClick={() => handleSelect('eminence')}>Eminence 5.0</button>
          <button onClick={() => handleSelect('designher')}>Design Her</button>
        </div>
      )}
         </div>   
      {step === 'designher' && (
        <div className="choices">
          <div className='quiz-container'>
          <p>Would you like to register for:</p>  </div>
          <button onClick={() => setStep('DHWorkshop')}>Workshop</button>
          <button onClick={() => setStep('DHCompetition')}>Competition</button>
           <button onClick={() => setShowPDF(!showPDF)}>
            {showPDF ? 'Hide PDF' : 'Get more details about this event'}
          </button>
          <button onClick={() => setStep('start')}>⬅️ Back</button>
          {showPDF && (
            <div style={{ marginTop: '20px' }}>
             <Eminence/>
            </div>
          )}
        </div>
      )}

    <div className='quiz-container'>
      {step === 'eminence' && (
        <div className="choices">
          <p>Sorry, there are no registrations for this still.</p>
          <button onClick={() => navigate('/')}>Move to Home Page</button>
          <button onClick={() => setStep('start')}>Register for Another Competition</button>
        </div>
      )}
    </div>

    <div className='quiz-container'>
      {step === 'DHWorkshop' && (
        <div className="choices">
          <p>Please fill the following details:</p>
          
      {/* <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSfX69FskupfwUGDAroEur1-Tf43axn2nSuZdi3aIdHavtJxXA/viewform?embedded=true" 
        width="640" 
        height="824" 
        frameBorder="0" 
        marginHeight="0" 
        marginWidth="0"
      >
        Loading…
      </iframe> */}
      <GoogleStyledForm/>
       <button onClick={() => setShowPDF(!showPDF)}>
            {showPDF ? 'Hide PDF' : 'Get more details about this event'}
          </button>
      <button onClick={() => setStep('start')}>⬅️ Back</button>
        {showPDF && (
            <div style={{ marginTop: '20px' }}>
             <Eminence/>
            </div>
          )}
          </div>
        
     
      )}
     
    </div>

    <div className='quiz-container'>
      {step === 'DHCompetition' && (
        <div className="choices">
          <p>Please fill the following details:</p>
          
     {/*  <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSfEfWC_qi58bXFGkorkKBpChsUI24KJ4MMGpoxYjvOse5TCRQ/viewform?embedded=true" 
        width="640" 
        height="824" 
        frameBorder="0" 
        marginHeight="0" 
        marginWidth="0"
      >
        Loading…
      </iframe> */}
      <GoogleStyledForm/>
       <button onClick={() => setShowPDF(!showPDF)}>
            {showPDF ? 'Hide PDF' : 'Get more details about this event'}
          </button>
      <button onClick={() => setStep('start')}>⬅️ Back</button>
        {showPDF && (
            <div style={{ marginTop: '20px' }}>
             <Eminence/>
            </div>
          )}
          </div>
     
      )}
     
    </div>
    </div>
    </div>
  );
};

export default RegistrationForm;
