import React from 'react';
import { Paper, Typography, Grid, Button } from '@mui/material';

const ReportTotal = ({ diagnosisImage, diagnosisScore, diagnosisText }) => {
  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            진단 결과
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <img src={diagnosisImage} alt="진단 이미지" style={{ maxWidth: '100%' }} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            진단 스코어: {diagnosisScore}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            진단 내용: {diagnosisText}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            결과 공유하기
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ReportTotal;
