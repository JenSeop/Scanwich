import React from 'react';
import { Typography, Grid } from '@mui/material';

const Activities = ({ data }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <Typography fontWeight='bold'>
            Main Activity
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography>
            
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          <Typography fontWeight='bold'>
            All Activity
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography>
            
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Activities;