import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './JobPage.css';

function JobPage() {
  const [files, setFiles] = useState([]);
  const [selectedFileContent, setSelectedFileContent] = useState('');
  const [selectedFileName, setSelectedFileName] = useState('');
  const execution_id = "ex1";
  const job_id = "j1"

  useEffect(() => {
    // Fetch the list of files for the job
    axios.get(`http://127.0.0.1:8000/execution/${execution_id}/${job_id}`)
      .then(response => {
        const file_ids = response.data.files.map(file => (file.name))
        console.log(response.data.files)
        setFiles(file_ids);
      })
      .catch(error => {
        console.error('Error fetching job files:', error);
      });
  }, []);

  const handleFileClick = (fileName) => {
    axios.get(`http://127.0.0.1:8000/execution/${execution_id}/${job_id}/${fileName}`)
      .then(response => {
        setSelectedFileName(fileName);
        setSelectedFileContent(response.data);
      })
      .catch(error => {
        console.error('Error fetching file content:', error);
      });
  };

  return (
    <div className="job-output-page">
      <div className="sidebar">
        <h2>Job Files</h2>
        <ul>
          {files.map(file => (
            <li key={file} onClick={() => handleFileClick(file)}>
              {file}
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        <h2>{selectedFileName}</h2>
        <pre>{selectedFileContent}</pre>
      </div>
    </div>
  );
}

export default JobPage;
