import React, { useState } from 'react';
import { Grid, Typography, Button, IconButton, Tooltip, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import FileCopyIcon from '@mui/icons-material/FileCopy';

const ReportNav = ({ reportId }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [sharedLink, setSharedLink] = useState(`https://www.scanwich.co.kr/report/${reportId}`);

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
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={6}>
        <Typography variant="h6" fontWeight="bold" color="#373531">Report #{reportId}</Typography>
      </Grid>
      <Grid item xs={6} style={{ textAlign: 'right' }}>
        <Tooltip title="공유하기">
          <IconButton onClick={handleOpenDialog}>
            <ShareIcon />
          </IconButton>
        </Tooltip>
      </Grid>

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
