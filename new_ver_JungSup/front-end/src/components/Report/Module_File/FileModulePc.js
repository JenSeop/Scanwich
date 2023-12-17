import React, { useState } from 'react';
import { Paper, Typography, IconButton, Grid, Tooltip } from '@mui/material';
import FileIcon from '@mui/icons-material/Description';
import Download from './Download';

const FileModulePc = ({ reportId, fullName, fileName, fileSize, fileIcon, filePath }) => {
  const [iconPath, setIconPath] = useState(`/files/apk_icon/${reportId}.png`);

  return (
    <Paper elevation={0}
    style={{
      padding: '16px',
      alignItems: 'center',
      backgroundColor: 'transparent',
      display: 'flex',
    }}>
      {!fileIcon &&
        <FileIcon fontSize="large" style={{ marginRight: '16px', color: "white" }} />
      }
      {fileIcon &&
        <img
          src={iconPath}
          alt={fileName}
          style={{
            marginLeft:'0px',
            marginTop: '1vh',
            marginRight: '16px',
            width: '35px',
            height: '35px',
            borderRadius: '30%',
          }}
        />
      }
      <Grid sx={{marginTop:'1vh'}}>
        <Typography variant="body1" color="white">{fileName}</Typography>
        <Typography variant="body2" color="white">{fileSize}</Typography>
      </Grid>
      <Grid style={{ marginLeft: '5vh'}}>
        <Download reportId={reportId} fullName={fullName} fileName={fileName}/>
      </Grid>
    </Paper>
  );
};

export default FileModulePc;
