import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FolderTree from '../FolderTree';
import Detection_Grid from '../Detection/Detection_Grid';
import Detection_Chart from '../Detection/Detection_Chart';
import { Typography } from '@mui/material';
import Information from '../Details';
import Classes from '../Classes/Diagramclass';
import Overview from '../Overview';
import ClassesDetail from '../Classes/classesDetail';

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
            label={
              <Tooltip title="개요">
                <span>Overview</span>
              </Tooltip>
            }
            value="1"
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
          <Tab
            label={
              <Tooltip title="세부 정보">
                <span>Details</span>
              </Tooltip>
            }
            value="2"
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
          <Tab
            label={
              <Tooltip title="탐지 정보">
                <span>Detection</span>
              </Tooltip>
            }
            value="3"
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
          <Tab
            label={
              <Tooltip title="클래스 정보">
                <span>Classes</span>
              </Tooltip>
            }
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
          <Tab
            label={
              <Tooltip title="파일 구조">
                <span>Finder</span>
              </Tooltip>
            }
            value="5"
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
      {/* Overview */}
        <TabPanel value="1">
          {value == "1" && data.r_data &&
            <Grid sx={{marginTop: '-2vh',marginBottom: '10vh'}}>
            {!isSmall &&
              <Paper elevation = {0} style={{ padding: '16px', margin: '0 auto', width: '60%' }}>
                <Overview />
              </Paper>
            }
            {isSmall &&
              <Paper elevation = {0} style={{ padding: '16px', margin: '0 auto' }}>
                <Overview />
              </Paper>
            }
            </Grid>
          }
        </TabPanel>
      {/* Details */}
        <TabPanel value="2">
          {value == "2" && data.r_data &&
            <Grid sx={{marginTop: '-2vh',marginBottom: '10vh'}}>
            {!isSmall &&
              <Paper elevation = {0} style={{ padding: '16px', margin: '0 auto', width: '60%' }}>
                <Information data={data.r_data} />
                <Typography align='right' color='#E0E0E0' fontWeight='fontWeightLight'>
                  Powered by Scanwich, Androguard
                </Typography>
              </Paper>
            }
            {isSmall &&
              <Paper elevation = {0} style={{ padding: '16px', margin: '0 auto' }}>
                <Information data={data.r_data} />
                <Typography align='right' color='#E0E0E0' fontWeight='fontWeightLight'>
                  Powered by Scanwich, Androguard
                </Typography>
              </Paper>
            }
            </Grid>
          }
        </TabPanel>
      {/* Detection */}
        <TabPanel value="3">
          {value == "3" && data.r_data &&
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
      {/* Classes */}
        <TabPanel value="4">
          {value == "4" && data.r_data && data.r_data.file_classes &&
            <Grid sx={{marginBottom: '10vh'}}>
              {!isSmall &&
                <>
                  <Paper
                    elevation = {0}
                    style={{
                      padding: '16px',
                      margin: '0 auto',
                      width: '60%',
                      border: '1px solid #E0E0E0',
                    }}
                  >
                    <Classes classes={data.r_data.file_classes}/>
                  </Paper>
                  <Paper
                    elevation = {0}
                    style={{
                      padding: '16px',
                      margin: '0 auto',
                      width: '60%',
                      border: '1px solid #E0E0E0',
                      marginTop: '1vh',
                      marginBottom: '1vh',
                    }}
                  >
                    <ClassesDetail data={data.r_data.file_classes} name={data.r_data.file_info.f_name}/>
                  </Paper>
                </>
              }
              {isSmall &&
                <>
                  <Paper
                    elevation = {0}
                    style={{
                      padding: '16px',
                      margin: '0 auto', 
                      border: '1px solid #E0E0E0',
                      marginBottom: '1vh',
                    }}
                  >
                  </Paper>
                  <Paper
                    elevation = {0}
                    style={{
                      padding: '16px',
                      margin: '0 auto', 
                      border: '1px solid #E0E0E0',
                    }}
                  >
                    <Classes classes={data.r_data.file_classes}/>
                  </Paper>
                </>
              }
              
            </Grid>
          }
        </TabPanel>
      {/* Finder */}
        <TabPanel value="5">
          {value == "5" && data.r_data &&
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
                  <Typography align='right' color='#E0E0E0' fontWeight='fontWeightLight'>
                    Powered by Scanwich
                  </Typography>
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
                  <Typography align='right' color='#E0E0E0' fontWeight='fontWeightLight'>
                    Powered by Scanwich
                  </Typography>
                </Paper>
              }
            </Grid>
          }
        </TabPanel>
      </TabContext>
    </Box>
  );
}