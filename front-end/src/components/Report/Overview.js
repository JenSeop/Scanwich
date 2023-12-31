import React, { useState } from 'react';
import { Paper, Grid, Typography, Divider, Tooltip } from '@mui/material';
import Score from './API/Score';
import Score_Grid from './API/Score_Grid';
import DexoComp from './Dexofuzzy/DexoComp';

export default function Info({data, dexo, exFile, isSmall}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const scores = [
    {
      name: 'Score',
      data: [data?.category_scores?.SMS, data?.category_scores?.Linux, data?.category_scores?.Device, data?.category_scores?.Network, data?.category_scores?.Privacy, data?.category_scores?.FileAccess],
    },
  ];

  return (
    <>
      <Paper elevation = {0} style={{ padding: '16px', margin: '0 auto', border: '1px solid #E0E0E0', marginBottom: '1vh' }}>
        <Grid container>
          <Grid item xs={12}>
              <Tooltip title='Dexofuzzy를 통해 APK 유사도 정보를 제공합니다.' followCursor>
              <Typography variant='body1' fontWeight='bold'>Similar Apps</Typography>
            </Tooltip>
            <Divider width='99%' sx={{marginTop: '1vh', marginBottom: '2vh'}}/>
            <DexoComp dexo={dexo}/>
          </Grid>
        </Grid>
      </Paper>
      {data && scores &&
        <Paper elevation = {0} style={{ padding: '16px', margin: '0 auto', border: '1px solid #E0E0E0', marginBottom: '1vh' }}>
          <Grid container>
            <Grid item xs={12}>
              <Tooltip title='Sensitive API는 호출된 API의 유형과 정보를 제공합니다.' followCursor>
                <Typography variant='body1' fontWeight='bold'>Sensitive API</Typography>
              </Tooltip>
              <Divider width='99%' sx={{marginTop: '1vh', marginBottom: '1vh'}}/>
            </Grid>
            <Grid item xs={6}>
              {data && scores && <Score data={scores}/>}
            </Grid>
            <Grid item xs={6}>
              {data && data?.detections && data?.category_scores && <Score_Grid data={data?.detections} scores={data?.category_scores}/>}
            </Grid>
          </Grid>
        </Paper>
      }
    </>
  );
}