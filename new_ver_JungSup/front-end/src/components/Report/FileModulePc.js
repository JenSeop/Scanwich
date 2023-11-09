import React from 'react';
import { Paper, Typography, IconButton, Grid, Tooltip } from '@mui/material';
import FileIcon from '@mui/icons-material/Description';
import DownloadIcon from '@mui/icons-material/Download';

const FileModulePc = ({ fileName, fileSize, fileIcon, filePath }) => {
  return (
    <Paper elevation={0}
    style={{
      padding: '16px',
      alignItems: 'center',
      backgroundColor: 'transparent',
      display: 'flex',
    }}>
      <FileIcon fontSize="large" style={{ marginRight: '16px', color: "white" }} />
      <Grid>
        <Typography variant="h6" color="white">{fileName}</Typography>
        <Typography variant="body2" color="white">{fileSize}</Typography>
      </Grid>
      <IconButton onClick={filePath} style={{ marginLeft: '5vh',  color: "white" }}>
        <Tooltip title="다운로드">
          <DownloadIcon />
        </Tooltip>
      </IconButton>
    </Paper>
  );
};

export default FileModulePc;
