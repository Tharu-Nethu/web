import React, { useState } from "react";
import { generateReactHelpers } from "@uploadthing/react/hooks";
import { UploadButton } from "@uploadthing/react";

const { useUploadThing } = generateReactHelpers();

const UploadForm = ({ teamName }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const { startUpload } = useUploadThing("fileUploader");

  const handleUpload = async (files) => {
    const res = await startUpload(files, {
      // Metadata (can be used to tag/folder uploads)
      metadata: { team: teamName }
    });

    if (res) {
      setUploadedFiles(res.map((file) => ({
        name: file.name,
        url: file.url
      })));
    }
  };

  return (
    <div>
      <h3>Upload Files for Team: {teamName}</h3>

      <UploadButton
        endpoint="fileUploader"
        onClientUploadComplete={(res) => {
          if (res) {
            setUploadedFiles(res.map(file => ({ name: file.name, url: file.url })));
            alert("Upload complete!");
          }
        }}
        onUploadError={(error) => {
          console.error(error);
          alert("Upload failed. Please try again.");
        }}
        appearance={{
          button: "bg-orange-600 text-white px-4 py-2 rounded"
        }}
      />

      {uploadedFiles.length > 0 && (
        <div className="uploaded-list">
          <h4>Uploaded Files:</h4>
          <ul>
            {uploadedFiles.map((file, idx) => (
              <li key={idx}>
                <a href={file.url} target="_blank" rel="noopener noreferrer">{file.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UploadForm;
