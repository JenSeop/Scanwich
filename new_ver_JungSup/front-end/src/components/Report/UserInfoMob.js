import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';
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

  const requestIcon = (
    <EventIcon fontSize="small" style={{ color: colorCode }} />
  );

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="space-evenly">
      <Grid item  style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        {userIcon}
        <Typography variant="body1" color={colorCode}>{userName}</Typography>
      </Grid>
      <Grid item  style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        {requestIcon}
        <Typography variant="body1" color={colorCode}>{requestDate}</Typography>
      </Grid>
    </Grid>
  );
};

export default UserInfoMob;
