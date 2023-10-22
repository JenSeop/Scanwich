import React, { useState } from 'react';
import { Box, Paper, Typography, Button, IconButton, Tooltip, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import FileIcon from '@mui/icons-material/Description';
import ShareIcon from '@mui/icons-material/Share';
import FileCopyIcon from '@mui/icons-material/FileCopy';

const ResultNav = ({ reportId, apkImage, apkName, userProfile, userName }) => {
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
    <Paper elevation={0} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', marginTop: '-1vh' }}>
      <Box>
        <Typography variant="h6" fontWeight="bold">Report #{reportId}</Typography>
        <Box style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
          <FileIcon fontSize="small" style={{ marginRight: '8px' }} />
          <Typography variant="body1">{apkName}</Typography>
        </Box>
      </Box>

      <Box>
        <Tooltip title="공유하기">
          <IconButton onClick={handleOpenDialog}>
            <ShareIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle style={{ textAlign: 'center' }}>공유하기</DialogTitle>
        <DialogContent style={{ justifyContent: 'center' }}>
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
    </Paper>
  );
};

export default ResultNav;
