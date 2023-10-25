import React from 'react';
import { Grid } from '@mui/material';
import ReportImg from './ReportImg';

const ReportImgLender = ({ score }) => {
  return (
      <Grid container justifyContent="center" alignItems="center">
        <Grid container
          spacing={2}
          justifyContent="center" alignItems="center"
          style={{
            padding: '20px',
          }}>
          <Grid item xs={6}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ReportImg paramScore={score} iconSize={'35vh'} circleSize={'40vh'} />
          </Grid>
        </Grid>
    </Grid>
  );
};

export default ReportImgLender;
