import React, { useState } from 'react';
import { Button, Card, CardHeader, CardContent, CardMedia, CardActions, Grid, Typography, Paper } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useNavigate, Link } from 'react-router-dom';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function DexoComp({ dexo }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const dexoArray = Object.values(dexo); // 객체를 배열로 변환
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentIndex < dexoArray.length - itemsPerPage) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={0} style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton size="small" onClick={handlePrev} disabled={currentIndex === 0}>
            <NavigateBeforeIcon/>
          </IconButton>
        </Grid>
        <Grid item xs>
          {dexoArray.length > 0 ? (
            <Grid container spacing={2}>
              {dexoArray.slice(currentIndex, currentIndex + itemsPerPage).map((item, index) => (
                <Grid item xs key={index} sm={6} md={4} lg={4}>
                  <Card elevation={0} sx={{ maxWidth: 345, border: '1px solid #E0E0E0' }}>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="apk_icon" src={`/files/apk_icon/${item.r_id}.png`}></Avatar>
                      }
                      action={
                        <IconButton aria-label="link_to_report" size="small" component={Link} to={`/report/${item.r_id}`}>
                          <OpenInNewIcon />
                        </IconButton>
                      }
                      title={item?.r_data?.androguard_data?.apk?.name}
                      subheader={`Result: ${item?.result}%`}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>):(
            <Paper elevation = {0} style={{ padding: '16px', margin: '0 auto', height: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Grid style={{}}>
                <Typography variant='body2' color='#E0E0E0'>Empty</Typography>
              </Grid>
            </Paper>
            )
          }
        </Grid>
        <Grid item xs={0} style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton size="small" onClick={handleNext} disabled={currentIndex >= dexoArray.length - itemsPerPage}>
            <NavigateNextIcon/>
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}

export default DexoComp;
