import React from 'react';
import { Typography, Grid, Tooltip } from '@mui/material';

const Android = ({ data }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <Tooltip title='Package는 APK의 고유 식별자인 패키지 이름을 나타냅니다.'>
            <Typography fontWeight='bold'>
              Package Name
            </Typography>
          </Tooltip>
        </Grid>
        <Grid item xs>
          <Typography>
            {data.sdk.package_name}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          <Tooltip title='Min Version은 APK가 실행되기 위해 필요한 Android 최소 버전을 나타냅니다.'>
            <Typography fontWeight='bold'>
              Min Version
            </Typography>
          </Tooltip>
        </Grid>
        <Grid item xs>
          <Typography>
            {data.sdk.min_sdk_ver}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          <Tooltip title='Max  Version은 APK가 호환되는 Android 버전을 나타냅니다.'>
            <Typography fontWeight='bold'>
              Max Version
            </Typography>
          </Tooltip>
        </Grid>
        <Grid item xs>
          <Typography>
            {data.sdk.max_sdk_ver}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          <Tooltip title='Target Version은 애플리케이션이 타켓팅한 Android 버전을 나타냅니다. '>
            <Typography fontWeight='bold'>
              Target Version
            </Typography>
          </Tooltip>
        </Grid>
        <Grid item xs>
          <Typography>
            {data.sdk.target_sdk_ver}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Android;