import React from 'react';
import { Grid } from '@mui/material';
import SearchBox from '../components/Search/SearchBox';

const Explore = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '80vh', marginBottom: '-5vh' }}>
      <SearchBox />
    </Grid>
  );
};

export default Explore;
