import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const UploadPage = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    setUploadedFiles(acceptedFiles);
  };

  const handleUpload = () => {
    const formData = new FormData();
    uploadedFiles.forEach((file) => {
      formData.append('files', file);
    });

    axios.post('/upload', formData)
      .then((response) => {
        console.log(response.data);
        alert('파일 업로드가 완료되었습니다.');
      })
      .catch((error) => {
        console.error('Error uploading files: ', error);
      });
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <h1>파일 업로드 페이지</h1>
      <div {...getRootProps()} style={dropzoneStyles}>
        <input {...getInputProps()} />
        <p>파일을 드래그 앤 드롭 하거나, 클릭하여 파일을 선택하세요.</p>
      </div>
      {uploadedFiles.length > 0 && (
        <div>
          <h2>업로드된 파일</h2>
          <ul>
            {uploadedFiles.map((file) => (
              <li key={file.name}>{file.name}</li>
            ))}
          </ul>
          <button onClick={handleUpload}>업로드</button>
        </div>
      )}
    </div>
  );
};

const dropzoneStyles = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  textAlign: 'center',
  padding: '20px',
  cursor: 'pointer',
  width: '1000px',
  margin: '200px auto 100px',
  height: '300px'
};

export default UploadPage;