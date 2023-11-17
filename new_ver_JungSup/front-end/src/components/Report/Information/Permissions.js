import React from 'react';
import { Typography, Grid } from '@mui/material';
import Permissions_all from './permissions_all';
import Permissions_declared from './permissions_declared';

const File = ({ data }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <Typography fontWeight='bold'>
            Declared
          </Typography>
        </Grid>
        <Grid item xs>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          <Typography fontWeight='bold'>
            ALL
          </Typography>
        </Grid>
        <Grid item xs>
        </Grid>
      </Grid>
    </>
  );
};

export default File;