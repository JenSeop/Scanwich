import React, { useEffect, useState } from 'react';
import { Container, Grid, Box, Typography, Paper, Divider } from '@mui/material';
import ReportImgLender from '../components/Report/ReportImgLender';
import ReportNav from '../components/Report/ReportNav';
import ScoreComment from '../components/Report/ScoreComment';
import ScoreBoard from '../components/Report/ScoreBoard';
import FileModulePc from '../components/Report/FileModulePc';
import UserInfoPc from '../components/Report/UserInfoPc';
import UserInfoMob from '../components/Report/UserInfoMob';
import FileModuleMob from '../components/Report/FileModuleMob';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Report/Loading';
import { getScore } from '../utils/getScore';

export default function Report({ display }) {
  const [isSmall, setIsSmall] = useState(display <= 1163);
  const { r_id } = useParams();
  const [reportData, setReportData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsSmall(display <= 1163);

    axios
      .get(`/analyze/report/${r_id}/`)
      .then((response) => {
        setReportData(response.data);
        if (response.data.r_status == "true")
          setIsLoading(false);
        else
          setIsLoading(true);
      })
      .catch((error) => {
        console.error('리포트 데이터를 가져오는 중 오류 발생:', error);
        setIsLoading(false);
      });
  }, [r_id, display]);


  const posts = [
    {
      id: 1,
      apkImage: '/path/to/apk1.png',
      apkName: 'APK 이름 1',
      userProfile: '/path/to/user1.jpg',
      userName: 'User1',
      vtScore: '62',
      analysisScore: '8',
      analysisDate: '2023-09-12',
      analysisStatus: 'false'
    },
  ];

  return (
    <>
      <Container maxWidth="md">
        <ReportNav reportId={r_id} />
      </Container>
      <Box
        component="div"
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          background: '#373531',
          zIndex: -2,
          height: '42vh',
        }}
      >
        {/* isLoading 값에 따라 로딩 화면 또는 데이터를 렌더링 */}
        {isLoading ? (
          <Loading data={reportData}/>
        ) : (
          <Grid
            container
            spacing={2}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: -1,
            }}
          >
            {!isSmall && (
              <Grid item xs={2} style={{ marginLeft: '-3vh', marginRight: '10vh' }}>
                {/* 좌측 그리드 */}
                <Grid>
                  <Typography variant='h5' color='white' style={{ marginLeft: '3vh', marginBottom: '-2vh' }}>정보</Typography>
                  {!isLoading && reportData &&
                    <UserInfoPc userName={reportData.u_id} requestDate={reportData.r_date.substring(0,10)} colorCode={'white'}/>
                  }
                </Grid>
                <Grid>
                  <Typography variant='h5' color='white' style={{ marginLeft: '3vh', marginBottom: '-2vh' }}>파일</Typography>
                  {!isLoading && reportData &&
                    <FileModulePc
                      fileName={reportData.r_data.file_info.f_name.substring(0,10)+'...'}
                      fileSize={Math.floor(reportData.r_data.file_info.f_size/1024)+" KB"}
                      fileIcon={reportData.r_data.androguard_data.apk.icon}
                      onDownloadClick
                    />
                  }
                </Grid>
              </Grid>
            )}
            <Grid item xs={2}>
              {/* 중앙 그리드 */}
              {reportData.r_data.vt_data &&
                <ReportImgLender score={getScore(reportData.r_data.vt_data.count, reportData.r_data.vt_data.score)} />
              }
            </Grid>
            {!isSmall && (
              <Grid item xs={2}>
                {/* 우측 그리드 */}
                <Grid style={{marginLeft: '17vh' }}>
                  <Typography variant='h5' color='white' style={{marginBottom: '1vh'}}>점수</Typography>
                  {!isLoading && reportData.r_data.vt_data &&
                    <ScoreBoard
                      color={getScore(reportData.r_data.vt_data.count, reportData.r_data.vt_data.score)}
                      vtScore={getScore(reportData.r_data.vt_data.count, reportData.r_data.vt_data.score)*10+"%"}
                      varCode={'h4'}
                    />
                  }
                </Grid>
                <Grid style={{marginLeft: '17vh', marginBottom: '2vh'}}>
                  <Typography variant='h5' color='white' style={{marginBottom: '1vh'}}>등급</Typography>
                  {!isLoading && reportData.r_data.vt_data &&
                    <ScoreComment score={getScore(reportData.r_data.vt_data.count, reportData.r_data.vt_data.score)} varCode={'h4'} />
                  }
                </Grid>
              </Grid>
            )}
          </Grid>
        )}
      </Box>
      {isSmall && (
        <>
          {/* 모바일용 */}
          <Grid
            container
            spacing={2}
            style={{
              position: 'relative',
              top: '42vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1.5vh', marginBottom: '-0.5vh' }}>
              {/* 상단 */}
              <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Paper elevation={0} style={{ width: '92%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                  <Grid container justifyContent="space-evenly" alignItems="center">
                    <Grid item style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                      <Typography variant='h5' color='#373531' style={{ marginRight: '1vh' }}>점수</Typography>
                      {!isLoading && reportData.r_data.vt_data &&
                        <ScoreBoard
                          color={getScore(reportData.r_data.vt_data.count, reportData.r_data.vt_data.score)}
                          vtScore={posts[0].vtScore}
                          varCode={'h5'}
                        />
                      }
                    </Grid>
                    <Grid item style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                      <Typography variant='h5' color='#373531' style={{ marginRight: '1vh'}}>등급</Typography>
                      {!isLoading && reportData.r_data.vt_data &&
                        <ScoreComment score={getScore(reportData.r_data.vt_data.count, reportData.r_data.vt_data.score)} varCode={'h5'} />
                      }
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Divider
                variant="middle"
                sx={{
                  width: '100%',
                  marginTop: '2vh',
                  marginBottom: '-2vh',
                  borderBottom: '1px solid #e0e0e0',
                }}
              />
              {/* 하단 */}
              <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Paper elevation={0} style={{ width: '92%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                  <Grid container justifyContent="space-evenly" alignItems="center" spacing={-15}>
                    <Grid item style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                      {!isLoading && reportData &&
                        <UserInfoMob
                          userName={reportData.u_id}
                          requestDate={reportData.r_date.substring(0,10)}
                          colorCode={'black'}
                          fileName="FileName"
                          fileSize="16.0MB"
                          fileIcon
                          onDownloadClick
                        />
                      }
                    </Grid>
                    <Grid item style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                      {!isLoading && reportData &&
                        <FileModuleMob
                          colorCode={'black'}
                          fileName={reportData.r_data.file_info.f_name.substring(0,10)+'...'}
                          fileSize={Math.floor(reportData.r_data.file_info.f_size/1024)+" KB"}
                          fileIcon
                          onDownloadClick
                        />
                      }
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Divider
                variant="middle"
                sx={{
                  width: '100%',
                  marginTop: '2vh',
                  marginBottom: '-2vh',
                  borderBottom: '1px solid #e0e0e0',
                }}
              />
              
            </Grid>
            
          </Grid>
        </>
      )}
    </>
  );
}
