import React, { useState, useEffect } from 'react';
import setCookie from '../../utils/setCookie';
import { Grid, Card, CardContent, Typography, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import axios from 'axios';
import { getScore } from '../../utils/getScore.js';

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

  return gradientColors[malwareScore] || gradientColors[0];
}

function List({ data, isMobile }) {
  const [list, setList] = useState([]);
  
  useEffect(() => {
    // 페이지 로딩 시 API 호출
    axios.get('/analyze/report/all/')  // axios.get을 사용하여 API 호출
      .then(response => {
        setList(response.data);  // API의 응답을 data 상태에 설정
      })
      .catch(error => {
        console.error('API 호출에서 오류 발생:', error);
      });

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
        {list.sort((a, b) => a.r_id - b.r_id).reverse().map((list, index) => (
          <Grid item xs={12} key={list.r_id}>
            <Link to={`/report?${list.r_id}`} style={{ textDecoration: 'none' }}>
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
                          background: (list.r_data && list.r_data.vt_data) ? 
                                    mapStatusToColor(getScore(list.r_data.vt_data.count, list.r_data.vt_data.score)) :
                                    mapStatusToColor(0),
                        }}
                      ></div>
                      </Grid>
                      <Grid item xs>
                        <Typography variant="body3" color="white">
                          {list.r_id}
                        </Typography>
                      </Grid>
                      <Grid item xs={0} color="white">
                        {list.r_data.androguard_data.apk.icon && list.r_data.androguard_data.apk.icon !== '/path/to/invalid/image' ? (
                          <InsertDriveFileIcon fontSize="small" />
                        ) : (
                          <img
                            src={list.r_data.androguard_data.apk.icon}
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
                          {list.r_data.androguard_data.apk.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="body3" color="white">
                          {list.malwareInfo}
                        </Typography>
                      </Grid>
                      <Grid item xs={0} color="white">
                        {list.userProfile !== '/path/to/invalid/image' ? (
                          <AccountCircleIcon fontSize="small" />
                        ) : (
                          <img
                            src={list.userProfile}
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
                          {list.u_id}
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="body3" color="white">
                          {list.r_date.substring(0, 10)}
                        </Typography>
                      </Grid>
                      <Grid item xs={0} style={{ color: 'white' }}>
                        {list.r_status === "false" ? (
                          <Grid style={{ color: 'white' }}>
                            <ChangeCircleIcon fontSize="small" />
                          </Grid>
                        ) : list.r_status === "true" ? (
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