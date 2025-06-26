import React, { useState } from 'react'; 
import { storage, db } from '../../components/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import './Submissions.css';

const UploadSubmission = ({ teamName }) => {
  const [files, setFiles] = useState([]);
  const [fileNames, setFileNames] = useState([]);

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFiles = [...e.target.files];
    setFiles(selectedFiles);
    setFileNames(selectedFiles.map((file) => file.name));
  };

  // Handle file upload
  const handleUpload = async (e) => {
    e.preventDefault();
    
    if (!teamName.trim() || files.length === 0) {
      alert('Please enter a team name and select files.');
      return;
    }

    try {
      const fileURLs = [];
      
      // Upload files to Firebase Storage
      for (const file of files) {
        const fileRef = ref(storage, `submissions/${teamName}/${file.name}`);
        await uploadBytes(fileRef, file);
        const downloadURL = await getDownloadURL(fileRef);
        fileURLs.push({ name: file.name, url: downloadURL });
      }

      // Save file URLs to Firestore
      const submissionRef = doc(db, 'submissions', teamName);
      const docSnap = await getDoc(submissionRef);

      if (docSnap.exists()) {
        await updateDoc(submissionRef, {
          files: arrayUnion(...fileURLs),
        });
      } else {
        await setDoc(submissionRef, {
          teamName,
          files: fileURLs,
        });
      }

      alert('Files uploaded and saved successfully!');
      setFiles([]);
      setFileNames([]);
      e.target.reset();
    } catch (err) {
      console.error('Error uploading files:', err);
      alert('Failed to upload files. Please try again.');
    }
  };

  return (
    <div className="submission-section">
      <div>
        <div className='team-name'>
          <h2>{teamName}</h2>
        </div>
        <form onSubmit={handleUpload}>
          <input type="file" multiple onChange={handleFileChange} required />
          
          {fileNames.length > 0 && (
            <div className="file-names">
              <strong>Selected Files:</strong>
              <ul>
                {fileNames.map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>
          )}
          
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UploadSubmission;
