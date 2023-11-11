import React from 'react';
import { Typography, Grid } from '@mui/material';

const Signed = ({ data }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <Typography fontWeight='bold'>
            Signed V1
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
            Signed V2
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
            Signed V3
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

export default Signed;