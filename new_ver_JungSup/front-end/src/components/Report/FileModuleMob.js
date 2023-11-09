import React from 'react';
import { Paper, Typography, IconButton, Grid, Divider, Tooltip } from '@mui/material';
import FileIcon from '@mui/icons-material/Description';
import DownloadIcon from '@mui/icons-material/Download';
import PersonIcon from '@mui/icons-material/Person'; // 기본 아이콘
import EventIcon from '@mui/icons-material/Event'; // 특정 아이콘 예시

const FileModuleMob = ({ userProfile, userName, requestDate, colorCode, fileName, fileSize, fileIcon, filePath }) => {
  const userIcon = userProfile ? (
    <img src={userProfile} alt={userName} style={{ width: '24px', height: '24px', borderRadius: '50%' }} />
  ) : (
    <PersonIcon fontSize="small" style={{ color: colorCode }} />
  );
  return (
    <Paper elevation={0}
    style={{
      padding: '16px',
      alignItems: 'center',
      backgroundColor: 'transparent',
      display: 'flex',
    }}>
      <FileIcon fontSize="large" style={{ marginRight: '16px', color: "#373531" }} />
      <Grid>
        <Typography variant="h6" color="#373531">{fileName}</Typography>
        <Typography variant="body2" color="#373531">{fileSize}</Typography>
      </Grid>
      <IconButton onClick={filePath} style={{ marginLeft: '5vh',  color: "#373531" }}>
        <Tooltip title="다운로드">
          <DownloadIcon />
        </Tooltip>
      </IconButton>
    </Paper>
  );
};

export default FileModuleMob;
