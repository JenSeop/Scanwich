import React from 'react';
import { Typography, Grid } from '@mui/material';
import Permissions_all from './permissions_all';
import Permissions_declared from './permissions_declared';

const File = ({ data, name }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <Typography fontWeight='bold'>
            Declared
          </Typography>
        </Grid>
          {data.declared.length == 0 &&
            <Typography>
              EMPTY
            </Typography>
          }
          {data.declared.length != 0 &&
            <Permissions_declared data={data.declared} name={name}/>
          }
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          <Typography fontWeight='bold'>
            ALL
          </Typography>
        </Grid>
          {data.all.length == 0 &&
            <Typography>
              EMPTY
            </Typography>
          }
          {data.all.length != 0 &&
            <Permissions_all data={data.all} name={name}/>
          }
      </Grid>
    </>
  );
};

export default File;