import React from 'react';
import { Typography, Grid } from '@mui/material';
import All_Activities from './All_Activities';

const Activities = ({ data, name }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <Typography fontWeight='bold'>
            Main
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography>
            {data.main_activity}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          <Typography fontWeight='bold'>
            ALL
          </Typography>
        </Grid>
        <All_Activities data={data.all} name={name}/>
      </Grid>
    </>
  );
};

export default Activities;