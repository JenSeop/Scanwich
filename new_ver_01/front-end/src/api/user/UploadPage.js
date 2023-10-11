import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const UploadPage = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadError, setUploadError] = useState(null); // 업로드 오류 상태 추가

  const onDrop = (acceptedFiles) => {
    setUploadedFiles(acceptedFiles);
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
        alert('파일 업로드가 완료되었습니다.');
        setUploadedFiles([]); // 업로드 후 업로드된 파일 목록 초기화
        setUploadError(null); // 업로드 성공시 오류 상태 초기화
      })
      .catch((error) => {
        console.error('Error uploading files: ', error);
        setUploadError('파일 업로드 중 오류가 발생했습니다.'); // 업로드 오류시 오류 상태 설정
      });
  };

  // CSRF 토큰을 가져오는 함수
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

  const { getRootProps, getInputProps } = useDropzone({ onDrop, maxSize: 10 * 1024 * 1024 }); // 파일 크기 제한 추가

  return (
    <div>
      <h1>파일 업로드 페이지</h1>
      <div {...getRootProps()} style={dropzoneStyles}>
        <input {...getInputProps()} />
        <p>파일을 드래그 앤 드롭 하거나, 클릭하여 파일을 선택하세요.</p>
      </div>
      {uploadError && <p style={{ color: 'red' }}>{uploadError}</p>} {/* 업로드 오류 메시지 표시 */}
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
  height: '300px',
};

export default UploadPage;
