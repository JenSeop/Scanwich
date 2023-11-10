import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FolderTree from './FolderTree';
import Detection from './Detection';

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
            label="Detection"
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
            label="Finder"
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
        </TabList>
      </Box>
        <TabPanel value="1">
          {value == "1" && data.r_data &&
            <Grid sx={{marginTop: '-3vh', marginBottom: '10vh'}}>
              {!isSmall &&
                <Paper elevation = {0} style={{ padding: '16px', margin: '0 auto', width: '60%' }}>
                  <Detection data={data.r_data.vt_data.vendor}/>
                </Paper>
              }
              {isSmall &&
                <Paper elevation = {0} style={{ padding: '16px', margin: '0 auto' }}>
                  <Detection data={data.r_data.vt_data.vendor}/>
                </Paper>
              }
            </Grid>
          }
        </TabPanel>
        <TabPanel value="2">
          {value == "2" && data.r_data &&
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