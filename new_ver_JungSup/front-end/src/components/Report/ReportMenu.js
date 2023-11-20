import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FolderTree from './FolderTree';
import Detection_Grid from './Detection_Grid';
import Detection_Chart from './Detection_Chart';
import { Typography } from '@mui/material';
import Information from './Information';
import Classes from './Diagramclass';

export default function LabTabs({data, isSmall}) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', marginTop: '2vh' }}>
      <TabContext value={value}>
      <Box sx={{ width: '100%' }}>
        <TabList
          value={value}
          onChange={handleChange}
          centered
          TabIndicatorProps={{
            style: {
              backgroundColor: '#373531',
            },
          }}
        >
          <Tab
            label="Details"
            value="1"
            sx={{
                color: '#373531',
                '&:hover': {
                  color: '#373531',
                },
                '&.Mui-selected': {
                  color: '#373531',
                },
                marginRight: '5vh',
              }}
          />
          <Tab
            label="Detection"
            value="2"
            sx={{
                color: '#373531',
                '&:hover': {
                  color: '#373531',
                },
                '&.Mui-selected': {
                  color: '#373531',
                },
                marginRight: '5vh',
              }}
          />
          <Tab
            label="Classes"
            value="3"
            sx={{
                color: '#373531',
                '&:hover': {
                  color: '#373531',
                },
                '&.Mui-selected': {
                  color: '#373531',
                },
                marginRight: '5vh',
              }}
          />
          <Tab
            label="Finder"
            value="4"
            sx={{
                color: '#373531',
                '&:hover': {
                  color: '#373531',
                },
                '&.Mui-selected': {
                  color: '#373531',
                },
              }}
          />
        </TabList>
      </Box>
        <TabPanel value="1">
          {value == "1" && data.r_data &&
            <Grid sx={{marginTop: '-2vh',marginBottom: '10vh'}}>
            {!isSmall &&
              <Paper elevation = {0} style={{ padding: '16px', margin: '0 auto', width: '60%' }}>
                <Information data={data.r_data} />
              </Paper>
            }
            {isSmall &&
              <Paper elevation = {0} style={{ padding: '16px', margin: '0 auto' }}>
                <Information data={data.r_data} />
              </Paper>
            }
            </Grid>
          }
        </TabPanel>
        <TabPanel value="2">
          {value == "2" && data.r_data &&
            <Grid sx={{marginTop: '-2vh',marginBottom: '10vh'}}>
              {!isSmall &&
                <Paper elevation = {0} style={{ padding: '16px', margin: '0 auto', width: '60%' }}>
                  <Paper elevation = {0} style={{ padding: '16px', margin: '0 auto', border: '1px solid #E0E0E0', marginBottom: '1vh' }}>
                    <Detection_Chart count={data.r_data.vt_data.count} score={data.r_data.vt_data.score}/>
                  </Paper>
                  <Detection_Grid data={data.r_data.vt_data.vendor} name={data.r_data.file_info.f_name}/>
                  <Typography align='right' color='#E0E0E0' fontWeight='fontWeightLight'>
                    Powered by Virus Total API
                  </Typography>
                </Paper>
              }
              {isSmall &&
                <Paper elevation = {0} style={{ padding: '16px', margin: '0 auto' }}>
                  <Paper elevation = {0} style={{ padding: '16px', margin: '0 auto', border: '1px solid #E0E0E0', marginBottom: '1vh' }}>
                    <Detection_Chart count={data.r_data.vt_data.count} score={data.r_data.vt_data.score}/>
                  </Paper>
                  <Detection_Grid data={data.r_data.vt_data.vendor} name={data.r_data.file_info.f_name}/>
                  <Typography align='right' color='#E0E0E0' fontWeight='fontWeightLight'>
                    Powered by Virus Total API
                  </Typography>
                </Paper>
              }
            </Grid>
          }
        </TabPanel>
        <TabPanel value="3">
          {value == "3" && data.r_data &&
            <Grid sx={{marginBottom: '10vh'}}>
              {!isSmall &&
                <>
                  <Classes data={data.r_data.file_classes}/>
                </>
              }
              {isSmall &&
                <>
                  <Classes data={data.r_data.file_classes}/>
                </>
              }
            </Grid>
          }
        </TabPanel>
        <TabPanel value="4">
          {value == "4" && data.r_data &&
            <Grid sx={{marginBottom: '10vh'}}>
              {!isSmall &&
                <Paper
                  elevation = {0}
                  style={{
                    padding: '16px',
                    margin: '0 auto',
                    width: '60%',
                    border: '1px solid #E0E0E0',
                  }}>
                  <FolderTree data={data.r_data.structure_data}/>
                </Paper>
              }
              {isSmall &&
                <Paper
                  elevation = {0}
                  style={{
                    padding: '16px',
                    margin: '0 auto', 
                    border: '1px solid #E0E0E0',
                  }}>
                  <FolderTree data={data.r_data.structure_data}/>
                </Paper>
              }
            </Grid>
          }
        </TabPanel>
      </TabContext>
    </Box>
  );
}