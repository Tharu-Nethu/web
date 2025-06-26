import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../components/firebase';
import './Submissions.css';

const SubmittedFiles = () => {
  const { email } = useParams();
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const teamName = decodeURIComponent(email);
      const docRef = doc(db, 'submissions', teamName);

      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setFiles(docSnap.data().files || []);
        } else {
          console.log('No submissions found for this team.');
        }
      } catch (error) {
        console.error('Error fetching submissions:', error);
      }
    };

    fetchFiles();
  }, [email]);

  return (
    <div className='submitted-files'>
      <h3>Submitted Files</h3>
      {files.length > 0 ? (
        <ul>
          {files.map((file, index) => (
            <li key={index}>{file}</li>
          ))}
        </ul>
      ) : (
        <p>No files submitted yet.</p>
      )}
    </div>
  );
};

export default SubmittedFiles;
