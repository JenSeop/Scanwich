import React, { useState } from 'react';
import { Grid, Typography, Button, IconButton, Tooltip, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Paper } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PdfDownloader from "../exportReport/pdfDownloader";
import PdfTemplate from "../exportReport/pdfTemplate";
import CloseIcon from '@mui/icons-material/Close';
import UserInfoMob from '../Module_Info/UserInfoMob.js';

const ReportNav = ({ reportId, data, isSmall }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [open, setOpen] = useState(false);
  const [sharedLink, setSharedLink] = useState(`https://www.scanwich.co.kr/report/${reportId}`);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(sharedLink);
  };

  return (
    <Grid container spacing={2} justifyContent="space-evenly">
      <Grid item xs>
        <Typography variant="h6" fontWeight="bold" color="#373531">Report #{reportId}</Typography>
      </Grid>
      <Grid item xs>
      </Grid>
      <Grid item xs style={{ textAlign: 'right' }}>
        <Tooltip title="리포트 다운로드">
          <IconButton onClick={handleClickOpen}>
            <FileDownloadIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="리포트 공유">
          <IconButton onClick={handleOpenDialog}>
            <ShareIcon />
          </IconButton>
        </Tooltip>
      </Grid>
      
      <Dialog open={open} onClose={handleClose} fullScreen>
        <DialogActions sx={{marginBottom: '-2vh'}}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <img
                src="/images/remaster/10.png"
                alt="Scanwich"
                width={40}
                height={40}
                style={{ marginRight: '10px' }}
              />
            </Grid>
            <Grid item>
              <PdfDownloader 
                downloadFileName={`scanwich_anlysis_report#${data?.r_id}`}
                rootElementId="Id" 
              />
              <Button onClick={handleClose} color="primary" variant="text">
                <CloseIcon/>
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
        <DialogContent>
          <Paper elevation = {0} style={{ overflow: 'auto', padding: '16px', margin: '0 auto', border: '1px solid #E0E0E0' }}>
            <div id="Id">
              <PdfTemplate data={data}/>
            </div>
          </Paper>
        </DialogContent>
      </Dialog>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle style={{ textAlign: 'center', fontWeight: 'bold'}}>공유하기</DialogTitle>
        <DialogContent
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TextField
            fullWidth
            variant="outlined"
            value={`https://www.scanwich.co.kr/report/${reportId}`}
            onChange={(e) => setSharedLink(e.target.value)}
            color="2"
            InputProps={{
              endAdornment: (
                <Tooltip title="복사">
                  <IconButton onClick={handleCopyLink} edge="end">
                    <FileCopyIcon />
                  </IconButton>
                </Tooltip>
              ),
            }}
          />
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

export default ReportNav;
