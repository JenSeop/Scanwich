import React, { useState, useEffect } from 'react';
import setCookie from '../utils/setCookie';
import { Grid, Card, CardContent, Typography, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

function mapStatusToColor(malwareScore) {
  const gradientColors = [
    'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.7) 60%, transparent 100%)',
    'radial-gradient(circle, rgba(0, 255, 0, 1) 0%, rgba(0, 255, 0, 0.7) 60%, transparent 100%)',
    'radial-gradient(circle, rgba(85, 255, 0, 1) 0%, rgba(85, 255, 0, 0.7) 60%, transparent 100%)',
    'radial-gradient(circle, rgba(170, 255, 0, 1) 0%, rgba(170, 255, 0, 0.7) 60%, transparent 100%)',
    'radial-gradient(circle, rgba(255, 255, 0, 1) 0%, rgba(255, 255, 0, 0.7) 60%, transparent 100%)',
    'radial-gradient(circle, rgba(255, 170, 0, 1) 0%, rgba(255, 170, 0, 0.7) 60%, transparent 100%)',
    'radial-gradient(circle, rgba(255, 85, 0, 1) 0%, rgba(255, 85, 0, 0.7) 60%, transparent 100%)',
    'radial-gradient(circle, rgba(255, 0, 0, 1) 0%, rgba(255, 0, 0, 0.7) 60%, transparent 100%)',
    'radial-gradient(circle, rgba(255, 0, 0, 1) 0%, rgba(255, 0, 0, 0.7) 60%, transparent 100%)',
  ];

  return gradientColors[malwareScore - 1] || gradientColors[0];
}

function List({ data, isMobile }) {
  
  useEffect(() => {
    setCookie('prevPage', '/', 365);
  }, []);

  return (
    <>
      {isMobile ? true : 
        <Grid
          style={{
            marginTop: '5px',
            marginBottom: '1px',
            marginLeft: '22px',
          }}
        >
          <Typography variant="h6" color="#373531" fontWeight="bold">
            List
          </Typography>
        </Grid>
        }
      <Grid container spacing={-1} xs={12}>
        {data.map((data, index) => (
          <Grid item xs={12} key={data.id}>
            <Link to={`/result/${data.id}`} style={{ textDecoration: 'none' }}>
              <Card
                style={{
                  marginTop: '5px',
                  marginBottom: '1px',
                  marginLeft: '19px',
                  marginRight: '2px',
                  width: 'auto',
                  backgroundColor: '#373531',
                  border: '1px solid #000',
                }}
              >
                <CardActionArea>
                  <CardContent>
                    <Grid container spacing={0} alignItems="center" justifyContent="center">
                      <Grid item xs={1}>
                        <div
                          style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            background: mapStatusToColor(data.analysisScore),
                          }}
                        ></div>
                      </Grid>
                      <Grid item xs={0} color="white">
                        {data.apkImage && data.apkImage !== '/path/to/invalid/image' ? (
                          <InsertDriveFileIcon fontSize="small" />
                        ) : (
                          <img
                            src={data.apkImage}
                            alt="apkImage"
                            style={{
                              width: '10px',
                              height: '10px',
                              borderRadius: '50%',
                            }}
                          />
                        )}
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="body3" color="white">
                          {data.apkName}
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="body3" color="white">
                          {data.malwareInfo}
                        </Typography>
                      </Grid>
                      <Grid item xs={0} color="white">
                        {data.userProfile !== '/path/to/invalid/image' ? (
                          <AccountCircleIcon fontSize="small" />
                        ) : (
                          <img
                            src={data.userProfile}
                            alt="UserProfile"
                            style={{
                              width: '20px',
                              height: '20px',
                              borderRadius: '50%',
                            }}
                          />
                        )}
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="body3" color="white">
                          {data.userName}
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="body3" color="white">
                          {data.analysisDate}
                        </Typography>
                      </Grid>
                      <Grid item xs={0} style={{ color: 'white' }}>
                        {data.analysisStatus === "false" ? (
                          <Grid style={{ color: 'white' }}>
                            <ChangeCircleIcon fontSize="small" />
                          </Grid>
                        ) : data.analysisStatus === "true" ? (
                          <Grid style={{ color: '#2AF57B' }}>
                            <CheckCircleIcon fontSize="small" />
                          </Grid>
                        ) : (
                          <Grid style={{ color: 'red' }}>
                            <ErrorIcon fontSize="small" />
                          </Grid>
                        )}
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default List;