import React, { useState } from 'react';
import {
  Grid,
  Typography,
  styled,
  Container,
  Paper,
} from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import { useDropzone } from 'react-dropzone';
import { isLoggedIn } from '../utils/getAuth';

const FileUploadContainer = styled('div')({
  border: '2px dashed #ccc',
  borderRadius: '8px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
});

const Analysis = () => {
  const isLogin = isLoggedIn();
  const [file, setFile] = useState();

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.apk',
  });

  return (
    <Container maxWidth="md" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '75vh' }}>
      <Paper elevation={0} style={{ padding: '16px', border: '1px solid #E0E0E0', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {isLogin &&
          <FileUploadContainer {...getRootProps()} style={{ minWidth: '31vh', maxWidth: '31vh' }}>
            <input {...getInputProps()} />
            {file ? (
              <>
                <InsertDriveFileIcon style={{ fontSize: 48 }} />
                <Typography variant="body2" color="textSecondary">
                  {file.name.substring(0, 30)}
                </Typography>
              </>
            ) : (
              <>
                <FileOpenIcon style={{ fontSize: 48 }} />
                <Typography variant="body2" color="textSecondary">
                  파일을 드래그 앤 드랍 또는 클릭
                </Typography>
              </>
            )}
          </FileUploadContainer>
        }
        {!isLogin &&
          <Grid style={{ textAlign: 'center' }}>
            <FileOpenIcon style={{ fontSize: 48 }} />
            <Typography variant="body2" color="textSecondary">
              로그인이 필요한 서비스입니다.
            </Typography>
          </Grid>
        }
      </Paper>
    </Container>
  );
};

export default Analysis;
