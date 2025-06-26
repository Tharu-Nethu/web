import React from 'react';
import styles from './GoogleStyledForm.module.css'; // Style sheet

const GoogleStyledForm = () => {
  return (
    <div className={styles.formContainer}>
      
      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSfEfWC_qi58bXFGkorkKBpChsUI24KJ4MMGpoxYjvOse5TCRQ/formResponse"
        method="POST"
        target="_blank"
        
      >
        <h2>Designher Competition Registration</h2>
        <label className={styles.formLabel} htmlFor="teamName">Team Name</label>
        
        <input className={styles.formInput}
          type="text"
          name="entry.1300104391"
          id="teamName"
          placeholder="Enter your team name"
          required
        />

        <label className={styles.formLabel} htmlFor="leaderEmail">Team Leader Email</label>
        <input className={styles.formInput}
          type="text"
          name="entry.1891068231"
          id="leaderEmail"
          placeholder="example@email.com"
          required
        />

        <label className={styles.formLabel} htmlFor="driveLink">Google Drive Link</label>
        <input className={styles.formInput}
          type="email"
          name="entry.886610426"
          id="Link"
          placeholder="https://drive.google.com/..."
          required
        />

         <label className={styles.formLabel} htmlFor="driveLink">Link</label>
        <input className={styles.formInput}
          type="url"
          name="entry.723813195"
          id="driveLink"
          placeholder="https://drive.google.com/..."
          required
        />
        <div className='button-container'> <button className={styles.gbutton} type="submit">Submit</button></div>
       
      </form>
    </div>
  );
};

export default GoogleStyledForm;
