import React, { useState, useEffect } from 'react';
import setCookie from '../utils/setCookie';
import { Grid, Divider } from '@mui/material';
import ScrollTop from '../components/MUI/ScrollTop';
import Queue from '../components/Home/Queue';
import List from '../components/Home/List';
import isLoggedIn from '../utils/getAuth'
import { getUidFromCookie } from '../utils/getAuth.js';
import axios from 'axios';

function Home(props) {
  const { isMobile } = props;

  return (
    <>
      <Grid container spacing={2}>
        {isMobile ? true :
        <Grid
          item
          xs={12}
          sm={3}
          style={{
            borderRight: '1px solid #DDD',
            marginTop: '8px',
            marginLeft: '-10px',
          }}
        >
          <Queue isMobile={isMobile}/>
        </Grid>
        }
        <Divider orientation="vertical" />
        <Grid
          item
          xs={12}
          sm={9}
          style={{
            marginTop: '8px',
          }}
        >
          <List isMobile={isMobile}/>
        </Grid>
      </Grid>
      {isMobile ? true : <ScrollTop />}
    </>
  );
}

export default Home;
