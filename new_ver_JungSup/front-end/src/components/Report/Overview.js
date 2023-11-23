import * as React from 'react';
import { Paper, Grid, Typography, Divider } from '@mui/material';

export default function Info({data}) {
  return (
    <Paper elevation = {0} style={{ padding: '16px', margin: '0 auto', border: '1px solid #E0E0E0', marginBottom: '1vh' }}>
      <Grid container>
        <Grid item xs>
          <Typography variant='body1' fontWeight='bold'>Dangerous</Typography>
          <Divider width='90%' sx={{marginTop: '1vh', marginBottom: '1vh'}}/>
        </Grid>
        <Grid item xs>
          <Typography variant='body1' fontWeight='bold'>VirusTotal</Typography>
          <Divider width='90%' sx={{marginTop: '1vh', marginBottom: '1vh'}}/>
        </Grid>
      </Grid>
    </Paper>
  );
}