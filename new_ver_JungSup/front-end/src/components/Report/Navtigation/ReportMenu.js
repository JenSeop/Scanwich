import React, { useState } from 'react';
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
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

export default function LabTabs({data, isSmall}) {
  const [value, setValue] = React.useState('1');
  const [open, setOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
          <Grid sx={{marginTop: '-2vh',marginBottom: '10vh'}}>
          {!isSmall &&
            <Paper elevation = {0} style={{ padding: '16px', margin: '0 auto', width: '60%' }}>
              <Overview data={data?.r_data?.file_classes_score} dexo={data?.r_data?.dexo_comp} exFile={data} isSmall={isSmall}/>
            </Paper>
          }
          {isSmall &&
            <Paper elevation = {0} style={{ padding: '16px', margin: '0 auto' }}>
              <Overview data={data?.r_data?.file_classes_score} dexo={data?.r_data?.dexo_comp} exFile={data} isSmall={isSmall}/>
            </Paper>
          }
          </Grid>
        </TabPanel>
      {/* Details */}
        <TabPanel value="2">
          {value == "2" && data?.r_data &&
            <Grid sx={{marginTop: '-2vh',marginBottom: '10vh'}}>
            {!isSmall &&
              <Paper elevation = {0} style={{ padding: '16px', margin: '0 auto', width: '60%' }}>
                <Information data={data?.r_data} />
              </Paper>
            }
            {isSmall &&
              <Paper elevation = {0} style={{ padding: '16px', margin: '0 auto' }}>
                <Information data={data?.r_data} />
              </Paper>
            }
            </Grid>
          }
        </TabPanel>
      {/* Detection */}
        <TabPanel value="3">
          {value == "3" && data?.r_data &&
            <Grid sx={{marginTop: '-2vh',marginBottom: '10vh'}}>
              {!isSmall &&
                <Paper elevation = {0} style={{ padding: '16px', margin: '0 auto', width: '60%' }}>
                  <Paper elevation = {0} style={{ padding: '16px', margin: '0 auto', border: '1px solid #E0E0E0', marginBottom: '1vh' }}>
                    <Detection_Chart count={data?.r_data?.vt_data?.count} score={data?.r_data?.vt_data?.score}/>
                  </Paper>
                  <Detection_Grid data={data?.r_data?.vt_data?.vendor} name={data?.r_data?.file_info?.f_name}/>
                </Paper>
              }
              {isSmall &&
                <Paper elevation = {0} style={{ padding: '16px', margin: '0 auto' }}>
                  <Paper elevation = {0} style={{ padding: '16px', margin: '0 auto', border: '1px solid #E0E0E0', marginBottom: '1vh' }}>
                    <Detection_Chart count={data?.r_data?.vt_data?.count} score={data?.r_data?.vt_data?.score}/>
                  </Paper>
                  <Detection_Grid data={data?.r_data?.vt_data?.vendor} name={data?.r_data?.file_info?.f_name}/>
                </Paper>
              }
            </Grid>
          }
        </TabPanel>
      {/* Classes */}
        <TabPanel value="4">
          {value == "4" && data?.r_data && data?.r_data?.file_classes &&
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
                      marginBottom: '1vh',
                    }}
                  >
                    <Grid container justifyContent="space-between">
                      <Grid item>
                        <Grid container>
                          <Grid item xs={0}>
                            <Typography variant='body2' fontWeight='bold'>Dependency</Typography>
                          </Grid>
                          <Grid item xs={0} sx={{marginLeft: '1vh'}}>
                            <Typography variant='body2'>line </Typography>
                          </Grid>
                          <Grid item xs={0}>
                            <MoreHorizIcon/>
                          </Grid>
                          <Grid item xs={0} sx={{marginLeft: '1vh'}}>
                            <Typography variant='body2'>arrow </Typography>
                          </Grid>
                          <Grid item xs={0}>
                          <ArrowDropDownIcon/>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid container>
                          <Grid item xs={0}>
                            <Typography variant='body2' fontWeight='bold'>Extend</Typography>
                          </Grid>
                          <Grid item xs={0} sx={{marginLeft: '1vh'}}>
                            <Typography variant='body2'>line </Typography>
                          </Grid>
                          <Grid item xs={0}>
                            <HorizontalRuleIcon/>
                          </Grid>
                          <Grid item xs={0} sx={{marginLeft: '1vh'}}>
                            <Typography variant='body2'>arrow </Typography>
                          </Grid>
                          <Grid item xs={0}>
                            <KeyboardArrowDownIcon/>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Button variant="text" color="primary" size="small" onClick={handleClickOpen} startIcon={<OpenInFullIcon/>}>
                          Full-Screen
                        </Button>
                        <Dialog
                          open={open}
                          onClose={handleClose}
                          fullWidth
                          maxWidth="md"
                          fullScreen
                          aria-labelledby="dialog-title"
                        >
                          <DialogActions sx={{marginBottom: '-5vh'}}>
                            <Grid container justifyContent="space-between">
                              <Grid item>
                                <img
                                  src="/images/remaster/10.png"
                                  alt="Scanwich"
                                  width={40}
                                  height={40}
                                  style={{ marginRight: '10px' }}
                                />
                              </Grid>
                              <Grid item>
                              </Grid>
                              <Grid item>
                                <Button onClick={handleClose} color="primary" variant="text">
                                  <CloseIcon/>
                                </Button>
                              </Grid>
                            </Grid>
                          </DialogActions>
                          <DialogContent>
                            <Grid container>
                              {open && <Classes classes={data?.r_data?.file_classes}/>}
                            </Grid>
                          </DialogContent>
                        </Dialog>
                      </Grid>
                    </Grid>
                  </Paper>
                  <Paper
                    elevation = {0}
                    style={{
                      padding: '16px',
                      margin: '0 auto',
                      width: '60%',
                      border: '1px solid #E0E0E0',
                    }}
                  >
                    {!open && <Classes classes={data?.r_data?.file_classes}/>}
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
                    <ClassesDetail data={data?.r_data?.file_classes}/>
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
                    <Grid container>
                      <Grid item>
                        <Grid container>
                          <Grid item xs={0}>
                            <Typography variant='body2' fontWeight='bold'>Dependency</Typography>
                          </Grid>
                          <Grid item xs={0} sx={{marginLeft: '1vh'}}>
                            <Typography variant='body2'>line </Typography>
                          </Grid>
                          <Grid item xs={0}>
                            <MoreHorizIcon/>
                          </Grid>
                          <Grid item xs={0} sx={{marginLeft: '1vh'}}>
                            <Typography variant='body2'>arrow </Typography>
                          </Grid>
                          <Grid item xs={0}>
                          <ArrowDropDownIcon/>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid container>
                          <Grid item xs={0}>
                            <Typography variant='body2' fontWeight='bold'>Extend</Typography>
                          </Grid>
                          <Grid item xs={0} sx={{marginLeft: '1vh'}}>
                            <Typography variant='body2'>line </Typography>
                          </Grid>
                          <Grid item xs={0}>
                        <HorizontalRuleIcon/>
                          </Grid>
                          <Grid item xs={0} sx={{marginLeft: '1vh'}}>
                            <Typography variant='body2'>arrow </Typography>
                          </Grid>
                          <Grid item xs={0}>
                        <KeyboardArrowDownIcon/>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                  <Paper
                    elevation = {0}
                    style={{
                      padding: '16px',
                      margin: '0 auto', 
                      border: '1px solid #E0E0E0',
                    }}
                  >
                    <Classes classes={data?.r_data?.file_classes}/>
                  </Paper>
                  <Paper
                    elevation = {0}
                    style={{
                      padding: '16px',
                      margin: '0 auto', 
                      border: '1px solid #E0E0E0',
                      marginTop: '1vh',
                      marginBottom: '1vh',
                    }}
                  >
                    <ClassesDetail data={data?.r_data?.file_classes}/>
                  </Paper>
                </>
              }
              
            </Grid>
          }
        </TabPanel>
      {/* Finder */}
        <TabPanel value="5">
          {value == "5" && data?.r_data &&
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
                  <FolderTree data={data?.r_data?.structure_data}/>
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
                  <FolderTree data={data?.r_data?.structure_data}/>
                </Paper>
              }
            </Grid>
          }
        </TabPanel>
      </TabContext>
    </Box>
  );
}