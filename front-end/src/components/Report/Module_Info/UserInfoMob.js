import React from 'react';
import { Typography, Grid } from '@mui/material';

const UserInfoMob = ({ userProfile, userName, requestDate, colorCode }) => {
  return (
    <Grid container spacing={2} justifyContent="space-evenly">
      <Grid item xs style={{ marginTop: '8px', marginLeft: '2vh' }}>
        <Typography variant="caption" color={colorCode}>{userName}</Typography>
      </Grid>
      <Grid item xs style={{ marginTop: '8px', marginRight: '3vh', textAlign: 'right' }}>
        <Typography variant="caption" color={colorCode}>{requestDate}</Typography>
      </Grid>
    </Grid>
  );
};

export default UserInfoMob;
