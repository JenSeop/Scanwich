import React, { useState, useEffect } from 'react';
import setCookie from '../utils/setCookie';
import { Grid, Divider } from '@mui/material';
import ScrollTop from '../components/MUI/ScrollTop';
import List from '../components/Home/List';
import Queue from '../components/Home/Queue';
import List_re from '../components/Home/List_re';
import isLoggedIn from '../utils/getAuth'
import { getUidFromCookie } from '../utils/getAuth.js';
import axios from 'axios';

function Home(props) {
  const { isMobile } = props;
  const [queue, setQueue] = useState([]);
  
  useEffect(() => {
    const u_id = getUidFromCookie();
    axios.get(`/analyze/report/user/${u_id}/`)
      .then(response => {
        setQueue(response.data);
      })
      .catch(error => {
        console.error('API 호출에서 오류 발생:', error);
      });

    setCookie('prevPage', '/', 365);
  }, []);

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
          <Queue queue_data={queue} isMobile={isMobile}/>
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
          <List_re isMobile={isMobile}/>
        </Grid>
      </Grid>
      {isMobile ? true : <ScrollTop />}
    </>
  );
}

export default Home;
