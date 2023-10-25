import React from 'react';
import { Paper, Typography, IconButton, Grid, Divider } from '@mui/material';
import FileIcon from '@mui/icons-material/Description';
import DownloadIcon from '@mui/icons-material/Download';
import PersonIcon from '@mui/icons-material/Person'; // 기본 아이콘
import EventIcon from '@mui/icons-material/Event'; // 특정 아이콘 예시

const UserInfoMob = ({ userProfile, userName, requestDate, colorCode }) => {
  const userIcon = userProfile ? (
    <img src={userProfile} alt={userName} style={{ width: '24px', height: '24px', borderRadius: '50%' }} />
  ) : (
    <PersonIcon fontSize="small" style={{ color: colorCode }} />
  );
  return (
    <Paper elevation={0} style={{ padding: '16px', backgroundColor: 'transparent' }}>
      <Grid container spacing={2} alignItems="center" style={{marginTop: '-3vh', marginBottom: '-1vh'}}>
        <Grid item xs={4} sm={4} style={{marginRight: '-2vh'}}>
          {userIcon}
        </Grid>
        <Grid item xs={6} sm={8}>
          <Typography variant="body1" color={colorCode}>{userName}</Typography>
        </Grid>
        <Grid item xs={4} sm={4} style={{marginRight: '-2vh'}}>
          <EventIcon fontSize="small" style={{ color: colorCode }} />
        </Grid>
        <Grid item xs={6} sm={8}>
          <Typography variant="body1" color={colorCode}>{requestDate}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserInfoMob;
