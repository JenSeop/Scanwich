import React from 'react';
import { Typography, Grid } from '@mui/material';

const Android = ({ data }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <Typography fontWeight='bold'>
            Package Name
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
            Minimum Version
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
            SHA256
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
            SIZE
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

export default Android;