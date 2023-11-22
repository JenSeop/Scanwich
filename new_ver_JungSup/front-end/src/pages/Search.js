import React, { useEffect } from 'react';
import { Grid, Divider, Typography } from '@mui/material';
import ScrollTop from '../components/MUI/ScrollTop';
import SearchList from '../components/Search/SearchList';
import setCookie from '../utils/setCookie';
import { isValidate } from '../utils/getAuth.js';
import { useParams } from 'react-router-dom';

function Search({}) {
  const { isMobile } = false;
  const { type } = useParams();
  const { keyword } = useParams();

  useEffect(() => {
    isValidate();
    setCookie('prevPage', '/', 365);
  }, [])

  return (
    <>
      <Grid container spacing={2}>
        {!isMobile &&
        <Grid
          item
          xs={12}
          sm={3}
          style={{
            marginLeft: '-10px',
          }}
        >
          <Grid container
            style={{
              padding: '12px',
              margin: '0 auto',
              marginLeft: '22px',
              }}
          >
            <Grid item>
              {type == "name" &&
                <Grid container sx={{marginBottom: '1vh'}}>
                  <Grid item>
                    <Typography variant="h3" color="#28E070" fontWeight="bold">
                      Search
                    </Typography>
                  </Grid>
                  <Grid item sx={{marginTop: '4.2vh', marginLeft: '1vh'}}>
                    <Typography variant="body1" color="#373531" fontWeight="bold">
                      NAME
                    </Typography>
                  </Grid>
                </Grid>
              }
              {type == "hash" &&
                <Grid container sx={{marginBottom: '1vh'}}>
                  <Grid item>
                    <Typography variant="h3" color="#28E070" fontWeight="bold">
                      Search
                    </Typography>
                  </Grid>
                  <Grid item sx={{marginTop: '4.2vh', marginLeft: '1vh'}}>
                    <Typography variant="body1" color="#373531" fontWeight="bold">
                      HASH
                    </Typography>
                  </Grid>
                </Grid>
              }
              {type == "name" &&
                <Typography variant="h6" color="#373531">
                  <strong>'{keyword}'</strong>에 대한 검색 결과입니다.
                </Typography>
              }
              {type == "hash" &&
                <Typography variant="h6" color="#373531">
                  <strong>'{keyword.substring(0,20)}...'</strong>에 대한 검색 결과입니다.
                </Typography>
              }
            </Grid>
          </Grid>
        </Grid>
        }
        <Grid
          item
          xs={12}
          sm={9}
          style={{
            marginTop: '8px',
          }}
        >
          <SearchList isMobile={isMobile} type={type} keyword={keyword}/>
        </Grid>
      </Grid>
      {isMobile ? true : <ScrollTop value='20px'/>}
      {!isMobile ? true : <ScrollTop value='100px'/>}
    </>
  );
}

export default Search;
