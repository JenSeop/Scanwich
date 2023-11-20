import React, { useState } from 'react';
import {
  Grid, Typography, Button, IconButton,
  Tooltip, Dialog,DialogTitle, DialogContent,
  DialogActions, Paper, Divider
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { isLoggedIn } from '../../../utils/getAuth';

const Download = ({ reportId, fullName, fileName }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [iconPath, setIconPath] = useState(`/files/apk_icon/${reportId}.png`);
  const [downloadPath, setDownloadPath] = useState(`/files/apk/${fullName}`);
  const isLogin = isLoggedIn();

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleDownload = () => {
    window.location.href = downloadPath;
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={6} style={{ textAlign: 'right' }}>
        <Tooltip title="다운로드">
          <IconButton onClick={handleOpenDialog}>
            <DownloadIcon style={{ color: 'white' }} />
          </IconButton>
        </Tooltip>
      </Grid>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle style={{ textAlign: 'center', fontWeight: 'bold'}}>다운로드</DialogTitle>
        <DialogContent
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '30vh'
          }}>
          {isLogin &&
            <Paper
              elevation={0}
              style={{
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #E0E0E0',
                width: '25vh',
                marginBottom: '-2vh'
              }}
            >
              <img
                src={iconPath}
                alt={fileName}
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '30%',
                }}
              />
              <Typography variant="body1" color="#373531">{fileName}.apk</Typography>
              <Divider
                variant="middle"
                sx={{
                  width: '100%',
                  marginTop: '1vh',
                  marginBottom: '1vh',
                  borderBottom: '1px solid #e0e0e0',
                }}
              />
              <Button variant="outlined" color="primary" endIcon={<DownloadIcon/>} onClick={handleDownload}>
                다운로드
              </Button>
            </Paper>
          }
          {!isLogin &&
            <Paper
              elevation={0}
              style={{
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #E0E0E0',
                width: '25vh',
                marginBottom: '-2vh'
              }}
              >
                <img
                  src={iconPath}
                  alt={fileName}
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '30%',
                  }}
                />
                <Typography variant="body1" color="#373531">{fileName}.apk</Typography>
                <Divider
                  variant="middle"
                  sx={{
                    width: '100%',
                    marginTop: '1vh',
                    marginBottom: '1vh',
                    borderBottom: '1px solid #e0e0e0',
                  }}
                />
                <Button variant="outlined" color="primary" endIcon={<DownloadIcon/>} onClick={handleDownload} disabled>
                  다운로드
                </Button>
                <Typography variant="body2" color="textSecondary" sx={{marginTop: '1vh'}}>
                  로그인이 필요합니다.
                </Typography>
            </Paper>
          }
        </DialogContent>
        <DialogActions style={{ justifyContent: 'center' }}>
          <Button onClick={handleCloseDialog} variant="outlined" color="2">
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Download;
