import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CircularProgress from '@mui/material/CircularProgress';

function LoadingProgress() {
  const dialogContentStyle = {
    backgroundColor: 'none',
  };
  
  const dialogPaperStyle = {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  };

  return (
    <>
      <Dialog open={true} PaperProps={{ style: dialogPaperStyle }}>
        <DialogContent sx={dialogContentStyle}>
          <CircularProgress sx={{color:'#28E070'}}/>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default LoadingProgress;
