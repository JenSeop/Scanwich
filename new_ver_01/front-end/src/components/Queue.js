import React, { useState } from 'react';
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

const FileUploadContainer = styled('div')({
  border: '2px dashed #ccc', // 점선으로 그려질 네모난 박스
  borderRadius: '8px', // 라운드 처리
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

  return gradientColors[malwareScore - 1] || gradientColors[0];
}

function Queue({ data, isMobile }) {
  const [openModal, setOpenModal] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [file, setFile] = useState();

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setFile(null);
  };

  // react-dropzone 설정
  const onDrop = (acceptedFiles) => {
    // 업로드할 파일 처리 로직 추가
    console.log(acceptedFiles); // 선택한 파일 확인용
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.apk', // 업로드 허용 확장자 설정 (필요에 따라 수정)
  });

  return (
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
          </DialogContent>
        <DialogActions style={{ justifyContent: 'center' }}>
          {file ? (
            <>
              <Button variant="outlined" color="2">
                분석
              </Button>
            </>
          ) : null}
          <Button onClick={handleCloseModal} variant="outlined" color="2">
            취소
          </Button>
        </DialogActions>
      </Dialog>
      <Grid container spacing={-1} xs={12}>
        {data.map((data, index) => (
          <Grid item xs={12} key={data.id}>
            <Link to={`/result?${data.id}`} style={{ textDecoration: 'none' }}>
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
                            background: mapStatusToColor(data.analysisScore),
                          }}
                        ></div>
                      </Grid>
                      <Grid item xs={0} color="white">
                        {data.apkImage && data.apkImage !== '/path/to/invalid/image' ? (
                          <FileOpenIcon fontSize="small" />
                        ) : (
                          <img
                            src={data.apkImage}
                            alt="apkImage"
                            style={{
                              width: '10px',
                              height: '10px',
                              borderRadius: '50%',
                            }}
                          />
                        )}
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="body3" color="white">
                          {data.apkName}
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="body3" color="white">
                          {data.analysisDate}
                        </Typography>
                      </Grid>
                      <Grid item xs={0} style={{ color: 'white' }}>
                        {data.analysisStatus === "false" ? (
                          <Grid style={{ color: 'white' }}>
                            <ChangeCircleIcon fontSize="small" />
                          </Grid>
                        ) : data.analysisStatus === "true" ? (
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
  );
}

export default Queue;
