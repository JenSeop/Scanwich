import React from 'react';
import { Typography, Paper, Grid } from '@mui/material';
import { getImages } from '../../utils/getImages';

const Info = ({ f_data, a_data }) => {
  console.log(a_data)

  return (
    <>
      <Grid container style={{ padding: '16px', margin: '0 auto', border: '1px solid #E0E0E0', marginBottom: '1vh' }}>
        <Grid item xs={4}>
          <img
            src={`${getImages(a_data.apk.icon)}`}
            alt="Image Description"
            style={{
              width: '200px',   // 이미지의 가로 너비
              height: 'auto',    // 이미지의 세로 높이는 자동으로 조정
              borderRadius: '60px', // 이미지 모서리의 둥근 정도
              border: '1px solid #E0E0E0',
            }}
          />
        </Grid>
        <Grid item xs>
          <Typography>
            {f_data.f_md5}
          </Typography>
          <Typography>
            {f_data.f_name}
          </Typography>
          <Typography>
            {f_data.f_path}
          </Typography>
          <Typography>
            {f_data.f_sha256}
          </Typography>
          <Typography>
            {f_data.f_size}
          </Typography>
          <Typography>
            {f_data.f_type}
          </Typography>
        </Grid>
      </Grid>
      <Paper elevation = {0} style={{ padding: '16px', margin: '0 auto', border: '1px solid #E0E0E0', marginBottom: '1vh' }}>
      </Paper>
      <Paper elevation = {0} style={{ padding: '16px', margin: '0 auto', border: '1px solid #E0E0E0', marginBottom: '1vh' }}>
      </Paper>
      <Paper elevation = {0} style={{ padding: '16px', margin: '0 auto', border: '1px solid #E0E0E0', marginBottom: '1vh' }}>
      </Paper>
    </>
  );
};

export default Info;
