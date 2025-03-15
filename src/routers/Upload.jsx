// src/component/Upload.jsx

import React, { useState } from 'react';
import axios from 'axios';
import './upload.css'; // Create this CSS file for any specific styles you want
import Header from '../component/Header';
import Headerfo from '../component/EntryHeader';
const Upload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/api/products/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('File uploaded successfully: ' + response.data.filePath);
    } catch (error) {
      setMessage('Error uploading file: ' + error.message);
    }
  };

  return (
   <div className="upload">
   <Headerfo/>
     <div className="upload-container">
      <h1>Upload Product Image</h1>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleFileChange} required />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
   </div>
  );
};

export default Upload;