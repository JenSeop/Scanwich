import React, { useEffect, useState } from 'react';
import { Container, Grid, Box, Typography, Paper, Divider } from '@mui/material';
import ReportImgLender from '../components/Report/ReportIMG/ReportImgLender.js';
import ReportNav from '../components/Report/Navtigation/ReportNav.js';
import ScoreComment from '../components/Report/Score/ScoreComment.js';
import ScoreBoard from '../components/Report/Score/ScoreBoard.js';
import FileModulePc from '../components/Report/Module_File/FileModulePc.js';
import UserInfoPc from '../components/Report/Module_Info/UserInfoPc.js';
import UserInfoMob from '../components/Report/Module_Info/UserInfoMob.js';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Report/Loading';
import { getScore } from '../utils/getScore';
import ReportMenu from '../components/Report/Navtigation/ReportMenu.js'
import ScrollTop from '../components/MUI/ScrollTop'
import { isValidate } from '../utils/getAuth.js';
import setCookie from '../utils/setCookie';

export default function Report({ display }) {
  const [isSmall, setIsSmall] = useState(display <= 1163);
  const [isMobile, setIsMobile] = useState(display <= 600);
  const { r_id } = useParams();
  const [reportData, setReportData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsSmall(display <= 1163);
    setIsMobile(display <= 600)
  }, [display]);

  useEffect(() => {
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
    isValidate();
    setCookie('prevPage', `/analyze/report/${r_id}/`, 365);
  },[r_id])

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
                      reportId={r_id}
                      fullName={reportData.r_data.file_info.f_name}
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
                  <Typography variant='h5' color='white' style={{marginBottom: '1vh'}}>결과</Typography>
                  {!isLoading && reportData.r_data.vt_data &&
                    <ScoreBoard
                      color={getScore(reportData.r_data.vt_data.count, reportData.r_data.vt_data.score)}
                      vtScore={getScore(reportData.r_data.vt_data.count, reportData.r_data.vt_data.score)*10+"%"}
                      varCode={'h4'}
                    />
                  }
                </Grid>
                <Grid style={{marginLeft: '17vh', marginBottom: '2vh'}}>
                  <Typography variant='h5' color='white' style={{marginTop: '1vh', marginBottom: '1vh'}}>등급</Typography>
                  {!isLoading && reportData.r_data.vt_data &&
                    <ScoreComment score={getScore(reportData.r_data.vt_data.count, reportData.r_data.vt_data.score)} varCode={'h4'} />
                  }
                </Grid>
              </Grid>
            )}
          </Grid>
        )}
        {isSmall && !isLoading && (
        <>
          {/* 모바일용 */}
          <Grid
            container
            spacing={2}
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* 상단 1 */}
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '1.5vh' }}>
              <Paper elevation={0}
                style={{
                    width: '92%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}>
                    <Grid container justifyContent="space-evenly" alignItems="center">
                  {/* 점수 그리드 */}
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6} container direction="column" alignItems="center">
                    <Typography variant="h5" color="#373531">결과</Typography>
                    {!isLoading && reportData.r_data.vt_data &&
                      <Grid item>
                        <ScoreBoard
                          color={getScore(reportData.r_data.vt_data.count, reportData.r_data.vt_data.score)}
                          vtScore={getScore(reportData.r_data.vt_data.count, reportData.r_data.vt_data.score)*10+"%"}
                          varCode={'h5'}
                        />
                      </Grid>
                    }
                  </Grid>
                  {/* 등급 그리드 */}
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6} container direction="column" alignItems="center">
                    <Typography variant='h5' color='#373531'>등급</Typography>
                    {!isLoading && reportData.r_data.vt_data &&
                      <Grid item>
                        <ScoreComment score={getScore(reportData.r_data.vt_data.count, reportData.r_data.vt_data.score)} varCode={'h5'} />
                      </Grid>
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
              {/* 상단 2 */}
              <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Paper elevation={0} style={{ width: '92%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
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
            
        </>
      )}
      {isLoading ? true : <ReportMenu data={reportData} isSmall={isSmall}/>}
      </Box>
      {isMobile ? true : <ScrollTop value='20px'/>}
      {!isMobile ? true : <ScrollTop value='100px'/>}
    </>
  );
}
