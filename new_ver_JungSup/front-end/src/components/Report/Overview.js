import * as React from 'react';
import { Paper, Grid, Typography, Divider } from '@mui/material';
import Score from './API/Score';
import Score_Grid from './API/Score_Grid';

export default function Info({data}) {
  const scores = [
    {
      name: 'Score',
      data: [data?.category_scores?.SMS, data?.category_scores?.Linux, data?.category_scores?.Device, data?.category_scores?.Network, data?.category_scores?.Privacy, data?.category_scores?.FileAccess],
    },
  ];

  return (
    <Paper elevation = {0} style={{ padding: '16px', margin: '0 auto', border: '1px solid #E0E0E0', marginBottom: '1vh' }}>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant='body1' fontWeight='bold'>Score</Typography>
          <Divider width='90%' sx={{marginTop: '1vh', marginBottom: '1vh'}}/>
          {data && scores && <Score data={scores}/>}
        </Grid>
        <Grid item xs={6}>
          <Typography variant='body1' fontWeight='bold'>Elements</Typography>
          <Divider width='90%' sx={{marginTop: '1vh', marginBottom: '1vh'}}/>
          {data && data?.detections && <Score_Grid data={data.detections}/>}
        </Grid>
      </Grid>
    </Paper>
  );
}