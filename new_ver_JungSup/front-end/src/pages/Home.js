import React, { useEffect } from 'react';
import { Grid, Divider } from '@mui/material';
import ScrollTop from '../components/MUI/ScrollTop';
import Queue from '../components/Home/Queue';
import List from '../components/Home/List';
import setCookie from '../utils/setCookie';
import { isValidate } from '../utils/getAuth.js';
import { useNavigate } from 'react-router-dom';

function Home(props) {
  const { isMobile } = props;
  const navigate = useNavigate();

  useEffect(() => {
    isValidate();
    setCookie('prevPage', '/', 365);
  }, [])

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
      {isMobile ? true : <ScrollTop value='20px'/>}
      {!isMobile ? true : <ScrollTop value='100px'/>}
    </>
  );
}

export default Home;
