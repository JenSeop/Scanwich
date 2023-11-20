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
            {data.sdk.package_name}
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
            {data.sdk.min_sdk_ver}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          <Typography fontWeight='bold'>
            Max Version
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography>
            {data.sdk.max_sdk_ver}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          <Typography fontWeight='bold'>
            Target Version
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography>
            {data.sdk.target_sdk_ver}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Android;