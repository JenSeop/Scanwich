import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person'; // 기본 아이콘
import EventIcon from '@mui/icons-material/Event'; // 특정 아이콘 예시

const UserInfoPc = ({ userProfile, userName, requestDate, colorCode }) => {
  const userIcon = userProfile ? (
    <img src={userProfile} alt={userName} style={{ width: '24px', height: '24px', borderRadius: '50%' }} />
  ) : (
    <PersonIcon fontSize="small" style={{ color: colorCode }} />
  );

  return (
    <Paper elevation={0} style={{ padding: '16px', backgroundColor: 'transparent' }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={4} style={{ marginTop: '1vh' }}>
          {userIcon}
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="body1" color={colorCode}>{userName}</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <EventIcon fontSize="small" style={{ color: colorCode }} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="body1" color={colorCode}>{requestDate}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserInfoPc;
