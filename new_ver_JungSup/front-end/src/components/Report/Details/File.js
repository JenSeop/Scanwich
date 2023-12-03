import React from 'react';
import { Typography, Grid, Tooltip } from '@mui/material';

const File = ({ data }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <Tooltip title='Name은 APK 파일의 이름을 나타냅니다.'>
            <Typography fontWeight='bold'>
              NAME
            </Typography>
          </Tooltip>
        </Grid>
        <Grid item xs>
          <Typography>
            {data.f_name}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          <Tooltip title='MD5는 MD5 알고리즘을 통해 생성된 파일의 해쉬값입니다.'>
            <Typography fontWeight='bold'>
              MD5
            </Typography>
          </Tooltip>
        </Grid>
        <Grid item xs>
          <Typography>
            {data.f_md5}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          <Tooltip title='SHA256은 SHA256 알고리즘을 통해 생성된 파일의 해쉬값입니다.'>
            <Typography fontWeight='bold'>
              SHA256
            </Typography>
          </Tooltip>
        </Grid>
        <Grid item xs>
          <Typography>
            {data.f_sha256}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          <Tooltip title='SIZE는 파일의 크기를 나타냅니다.'>
            <Typography fontWeight='bold'>
              SIZE
            </Typography>
          </Tooltip>
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