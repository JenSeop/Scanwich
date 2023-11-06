import React, { useState, useEffect } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  styled
} from '@mui/material';
import { Link } from 'react-router-dom';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ErrorIcon from '@mui/icons-material/Error';
import AddIcon from '@mui/icons-material/Add';
import { useDropzone } from 'react-dropzone';
import { isLoggedIn } from '../../utils/getAuth';
import { getCsrf } from '../../utils/getCsrf.js';
import { getUidFromCookie } from '../../utils/getAuth.js';
import setCookie from '../../utils/setCookie';
import axios from 'axios';
import { getScore } from '../../utils/getScore.js';

const FileUploadContainer = styled('div')({
  border: '2px dashed #ccc',
  borderRadius: '8px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
});

function mapStatusToColor(malwareScore) {
  const gradientColors = [
    'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.7) 60%, transparent 100%)',
    'radial-gradient(circle, rgba(0, 255, 0, 1) 0%, rgba(0, 255, 0, 0.7) 60%, transparent 100%)',
    'radial-gradient(circle, rgba(85, 255, 0, 1) 0%, rgba(85, 255, 0, 0.7) 60%, transparent 100%)',
    'radial-gradient(circle, rgba(170, 255, 0, 1) 0%, rgba(170, 255, 0, 0.7) 60%, transparent 100%)',
    'radial-gradient(circle, rgba(255, 255, 0, 1) 0%, rgba(255, 255, 0, 0.7) 60%, transparent 100%)',
    'radial-gradient(circle, rgba(255, 170, 0, 1) 0%, rgba(255, 170, 0, 0.7) 60%, transparent 100%)',
    'radial-gradient(circle, rgba(255, 85, 0, 1) 0%, rgba(255, 85, 0, 0.7) 60%, transparent 100%)',
    'radial-gradient(circle, rgba(255, 0, 0, 1) 0%, rgba(255, 0, 0, 0.7) 60%, transparent 100%)',
    'radial-gradient(circle, rgba(255, 0, 0, 1) 0%, rgba(255, 0, 0, 0.7) 60%, transparent 100%)',
  ];

  return gradientColors[malwareScore] || gradientColors[0];
}

function Queue({ queue_data, isMobile }) {
  const [openModal, setOpenModal] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [file, setFile] = useState();
  const isLogin = isLoggedIn();

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setFile(null);
  };

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.apk', // 업로드 허용 확장자 설정
  });

  const uploadFile = async () => {
    const csrfToken = getCsrf();
    const Uid = getUidFromCookie();
    const formData = new FormData();
    formData.append('u_id', Uid);
    formData.append('file', file);
    formData.append('csrfToken', csrfToken);

    try {
      const response = await axios.post('/analyze/engine/call/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File uploaded successfully:', response.data);
      handleCloseModal();  // 파일 업로드 후 모달 닫기
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <>
      <Grid>
        {isMobile ? true : 
          <Grid
          container
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '5px',
            marginBottom: '1px',
            marginLeft: '22px',
          }}
        >
          <Typography variant="h6" color="#373531" fontWeight="bold">
            Queue
          </Typography>
          <Button
            variant="contained"
            color="2"
            onClick={handleOpenModal}
            startIcon={<AddIcon />}
            style={{
              color: 'white',
              width: '70px',
              height: '25px',
              fontSize: '12px',
              marginRight: '32px',
            }}
          >
            NEW
          </Button>
        </Grid>
        }
        <Dialog open={openModal} onClose={handleCloseModal}>
          <DialogTitle style={{ textAlign: 'center' }}>파일 업로드</DialogTitle>
            <DialogContent>
              {isLogin &&
              <FileUploadContainer {...getRootProps()}>
                <input {...getInputProps()} />
                {file ? (
                  <>
                    <InsertDriveFileIcon style={{ fontSize: 48 }}/>
                    <Typography variant="body2" color="textSecondary">
                      {file.name}
                    </Typography>
                  </>
                ) : (
                  <>
                    <FileOpenIcon style={{ fontSize: 48 }}/>
                    <Typography variant="body2" color="textSecondary">
                      파일을 드래그 앤 드랍 하거나 클릭
                    </Typography>
                  </>
                )}
              </FileUploadContainer>
              }
              {!isLogin &&
              <Grid style={{ textAlign: 'center' }}>
                <FileOpenIcon style={{ fontSize: 48 }}/>
                <Typography variant="body2" color="textSecondary">
                  로그인이 필요한 서비스입니다.
                </Typography>
              </Grid>
              }
            </DialogContent>
          <DialogActions style={{ justifyContent: 'center' }}>
            {file ? (
              <>
                <Button variant="outlined" color="2" onClick={uploadFile}>
                  분석
                </Button>
              </>
            ) : null}
            {isLogin &&
              <Button onClick={handleCloseModal} variant="outlined" color="2">
                취소
              </Button>
            }
            {!isLogin &&
              <Button onClick={handleCloseModal} variant="outlined" color="2">
                닫기
              </Button>
            }
          </DialogActions>
        </Dialog>
        <Grid container spacing={-1} xs={12}>
          {queue_data.sort((a, b) => a.r_id - b.r_id).reverse().map((queue_data, index) => (
            <Grid item xs={12} key={queue_data.id}>
              <Link to={`/report/${queue_data.r_id}`} style={{ textDecoration: 'none' }}>
                <Card
                  style={{
                    marginTop: '5px',
                    marginBottom: '1px',
                    marginLeft: '19px',
                    marginRight: '2px',
                    width: 'auto',
                    backgroundColor: '#373531',
                    border: '1px solid #000',
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Grid container spacing={0} alignItems="center" justifyContent="center">
                        <Grid item xs={2}>
                          <div
                          style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            background: (queue_data.r_data && queue_data.r_data.vt_data) ? 
                                      mapStatusToColor(getScore(queue_data.r_data.vt_data.count, queue_data.r_data.vt_data.score)) :
                                      mapStatusToColor(0),
                          }}
                          ></div>
                        </Grid>
                        <Grid item xs>
                          <Typography variant="body3" color="white">
                            {queue_data.r_id}
                          </Typography>
                        </Grid>
                        <Grid item xs={0} color="white">
                            <InsertDriveFileIcon fontSize="small" />
                        </Grid>
                        <Grid item xs={7}>
                          {queue_data.r_data.androguard_data &&
                            <Typography variant="body3" color="white">
                              {queue_data.r_data.androguard_data.apk.name}
                            </Typography>
                          }
                          {!queue_data.r_data.androguard_data &&
                            <Typography variant="body3" color="white">
                              분석 대기중...
                            </Typography>
                          }
                        </Grid>
                        <Grid item xs={0} style={{ color: 'white' }}>
                          {queue_data.r_status === "false" ? (
                            <Grid style={{ color: 'white' }}>
                              <ChangeCircleIcon fontSize="small" />
                            </Grid>
                          ) : queue_data.r_status === "true" ? (
                            <Grid style={{ color: '#2AF57B' }}>
                              <CheckCircleIcon fontSize="small" />
                            </Grid>
                          ) : (
                            <Grid style={{ color: 'red' }}>
                              <ErrorIcon fontSize="small" />
                            </Grid>
                          )}
                        </Grid>
                      </Grid>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default Queue;
