import React from 'react';
import { Typography, Grid } from '@mui/material';

const File = ({ data }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <Typography fontWeight='bold'>
            NAME
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography>
            {data.f_name}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          <Typography fontWeight='bold'>
            MD5
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography>
            {data.f_md5}
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
            {data.f_sha256}
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
            {Math.floor(data.f_size/1024)} KB
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default File;