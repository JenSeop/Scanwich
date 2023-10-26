import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const UploadPage = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadError, setUploadError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const onDrop = (acceptedFiles) => {
    setUploadedFiles(acceptedFiles);
    setIsModalOpen(true);
  };

  const handleUpload = () => {
    const formData = new FormData();
    uploadedFiles.forEach((file) => {
      formData.append('file', file);
    });

    // CSRF 토큰 가져오기
    const csrfToken = getCookie('csrftoken');

    axios
      .post('/api/file/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // CSRF 토큰을 요청 헤더에 추가
          'X-CSRFToken': csrfToken,
        },
      })
      .then((response) => {
        console.log(response.data);
        setUploadedFiles([]);
        setUploadError(null);
        setIsModalOpen(false); // 모달 닫기
        navigate('/AnalysisResult')
      })
      .catch((error) => {
        console.error('Error uploading files: ', error);
        setUploadError('파일 업로드 중 오류가 발생했습니다.');
      });
  };

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === name + '=') {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  const { getRootProps, getInputProps } = useDropzone({ onDrop, maxSize: 10 * 1024 * 1024 });

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>파일 업로드 페이지</h1>
      <div {...getRootProps()} style={dropzoneStyles}>
        <input {...getInputProps()} />
        <p>파일을 드래그 앤 드롭 하거나, 클릭하여 파일을 선택하세요.</p>
      </div>
      {uploadError && <p style={{ color: 'red' }}>{uploadError}</p>}

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box sx={modalStyles} style={{ textAlign: 'center' }}>
          <h2 style={{ margin: 0 }}>파일 정보</h2>
          <ul style={{ padding: 0, listStyle: 'none' }}>
            {uploadedFiles.map((file) => (
              <div key={file.name} style={{ textAlign: 'center' }}>
                <div>{file.name}</div>
                <div>({(file.size / (1024 * 1024)).toFixed(2)} MB)</div>
              </div>
            ))}
          </ul>
          <div style={{ textAlign: 'center' }}>
            <Button variant="contained" onClick={handleUpload}>분석</Button>
            <Button variant="contained" onClick={() => setIsModalOpen(false)}>취소</Button>
          </div>
        </Box>
      </Modal>
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
  height: '300px',
};

const modalStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default UploadPage;
