import React from 'react';
import { Paper, Typography, IconButton, Grid, Tooltip } from '@mui/material';
import FileIcon from '@mui/icons-material/Description';
import Download from './Download';

const FileModulePc = ({ reportId, fullName, fileName, fileSize, fileIcon, filePath }) => {
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
      <Grid style={{ marginLeft: '5vh'}}>
        <Download reportId={reportId} fullName={fullName} fileName={fileName}/>
      </Grid>
    </Paper>
  );
};

export default FileModulePc;
