import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Divider
} from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { getScore } from '../../utils/getScore.js';
import DataLoadingButton from './DataLoadingButton.js';
import ScoreBoard from '../Report/Score/ScoreBoard.js';
import ScoreComment from '../Report/Score/ScoreComment.js';
import LoadingProgress from '../MUI/loadingProgress.js';

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} followCursor/>
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'white',
    color: 'rgba(0, 0, 0, 0.87)',
    minWidth: 100,
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #373531',
  },
}));

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
  if(malwareScore=='0')
    return gradientColors[1];

  return gradientColors[malwareScore] || gradientColors[0];
}

function List({ data, isMobile }) {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);

  const fetchData = () => {
    if (!hasNextPage || loading) {
      return;
    }

    setLoading(true);
    axios
      .get(`/analyze/get_analyze_reports_re/?page=${page}`)
      .then((response) => {
        const newData = response.data.results;
        setList((prevList) => [...prevList, ...newData]);

        setHasNextPage(!!response.data.next);

        setPage((prevPage) => prevPage + 1);
        setLoading(false);
      })
      .catch((error) => {
        console.error('API 호출에서 오류 발생:', error);
        setLoading(false);
      });
  };

  const handleLoadMore = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
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
      <Grid container spacing={-1}>
        {list.map((item, index) => (
          <HtmlTooltip
            title={
              <React.Fragment>
                {item.r_status == 'true' &&
                  <>
                    <img
                      src={`/files/apk_icon/${item.r_id}.png`}
                      alt={item.r_data.androguard_data.apk.name}
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '30%',
                      }}
                    />
                    <Typography color="inherit" fontWeight="bold" sx={{marginTop: '-0.4vh'}}>{item.r_data.androguard_data.apk.name}</Typography>
                    <Divider
                      sx={{
                        width: '100%',
                      }}
                    />
                    <Grid container>
                      <Grid item xs>
                        <ScoreBoard
                          color={0}
                          vtScore={getScore(item.r_data.vt_data.count, item.r_data.vt_data.score)*10+"%"}
                          varCode={'body1'}
                          shadow={false}
                        />
                      </Grid>
                      <Grid item xs>
                        <ScoreComment score={getScore(item.r_data.vt_data.count, item.r_data.vt_data.score)} varCode={'body1'} shadow={false}/>
                      </Grid>
                    </Grid>
                  </>
                }
              </React.Fragment>
            }
          >
            <Grid item xs={12} key={item.r_id}>
              <Link to={`/report/${item.r_id}`} style={{ textDecoration: 'none' }}>
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
                              background: item.r_data && item.r_data.vt_data ?
                                mapStatusToColor(getScore(item.r_data.vt_data.count, item.r_data.vt_data.score)) :
                                mapStatusToColor(9),
                            }}
                          ></div>
                        </Grid>
                        <Grid item xs>
                          <Typography variant="body3" color="white">
                            {item.r_id}
                          </Typography>
                        </Grid>
                        <Grid item xs={0} color="white">
                          {item.r_data.androguard_data &&
                          <>
                            <img
                              src={`/files/apk_icon/${item.r_id}.png`}
                              alt={item.r_data.androguard_data.apk.name}
                              style={{
                                width: '15px',
                                height: '15px',
                                borderRadius: '30%',
                                marginTop: '0.3vh',
                                marginRight: '1vh'
                              }}
                            />
                          </>
                          }
                          {!item.r_data.androguard_data &&
                            <InsertDriveFileIcon fontSize="small" sx={{marginTop: '0.2vh', marginRight: '0.6vh'}}/>
                          }
                        </Grid>
                        <Grid item xs={4}>
                            {item.r_data.androguard_data &&
                              <Typography variant="body3" color="white">
                                {item.r_data.androguard_data.apk.name}
                              </Typography>
                            }
                            {!item.r_data.androguard_data &&
                              <Typography variant="body3" color="white">
                                분석 대기중...
                              </Typography>
                            }
                          </Grid>
                        <Grid item xs={0} color="white">
                          {item.userProfile !== '/path/to/invalid/image' ? (
                            <AccountCircleIcon fontSize="small" />
                          ) : (
                            <img
                              src={item.userProfile}
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
                            {item.u_id}
                          </Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <Typography variant="body3" color="white">
                            {item.r_date.substring(0, 10)}
                          </Typography>
                        </Grid>
                        <Grid item xs={0} style={{ color: 'white' }}>
                          {item.r_status === 'false' ? (
                            <Grid style={{ color: 'white' }}>
                              <ChangeCircleIcon fontSize="small" />
                            </Grid>
                          ) : item.r_status === 'true' ? (
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
          </HtmlTooltip>
        ))}
      </Grid>
      <DataLoadingButton
        hasNextPage={hasNextPage}
        loading={loading}
        handleLoadMore={handleLoadMore}
        isMobile={isMobile}
      />
      {loading && !isMobile && <LoadingProgress/>}
    </>
  );
}

export default List;
