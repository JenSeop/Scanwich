import React from 'react';
import { Grid } from '@mui/material';
import ResultImg from './ResultImg';

const ResultTotal = ({ score }) => {
  return (
      <Grid container justifyContent="center" alignItems="center" style={{ height: '46vh'}}>
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
            <ResultImg paramScore={score} iconSize={'35vh'} circleSize={'43vh'} />
          </Grid>
        </Grid>
    </Grid>
  );
};

export default ResultTotal;
