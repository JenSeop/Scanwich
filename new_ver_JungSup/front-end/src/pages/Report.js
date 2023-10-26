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

export default function Report({display}) {
  const [isSmall, setIsSmall] = useState(display <= 1163);

  useEffect(()=> {
    setIsSmall(display <= 1163);
  })

  // 서버에서 받아온 게시글 데이터 (예시)
  const posts = [
    {
      id: 1,
      apkImage: '/path/to/apk1.png',
      apkName: 'APK 이름 1',
      userProfile: '/path/to/user1.jpg',
      userName: 'User1',
      vtScore: '62',
      analysisScore: '1',
      analysisDate: '2023-09-12',
      analysisStatus: 'false'
    },
  ];

  return (
    <>
      <Container maxWidth="md">
        <ReportNav reportId={posts[0].id} />
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
          <Grid container spacing={2}
            style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: -1,
          }}>
            {!isSmall &&
            <Grid item xs={2} style={{ marginLeft: '-3vh', marginRight: '10vh' }}>
              {/* 좌측 그리드 */}
              <Grid>
                <Typography variant='h5' color='white' style={{ marginLeft: '3vh', marginBottom: '-2vh' }}>정보</Typography>
                <UserInfoPc userName={posts[0].userName} requestDate={posts[0].analysisDate} colorCode={'white'}/>
              </Grid>
              <Grid>
                <Typography variant='h5' color='white' style={{ marginLeft: '3vh', marginBottom: '-2vh' }}>파일</Typography>
                <FileModulePc fileName="FileName" fileSize="16.0MB" fileIcon onDownloadClick />
              </Grid>
            </Grid>
            }
            <Grid item xs={2}>
              {/* 중앙 그리드 */}
              <ReportImgLender score={posts[0].analysisScore} />
            </Grid>
            {!isSmall &&
            <Grid item xs={2}>
              {/* 우측 그리드 */}
              <Grid style={{marginLeft: '17vh' }}>
                <Typography variant='h5' color='white' style={{marginBottom: '1vh'}}>점수</Typography>
                <ScoreBoard color={posts[0].analysisScore} vtScore={posts[0].vtScore} varCode={'h4'} />
              </Grid>
              <Grid style={{marginLeft: '17vh', marginBottom: '2vh'}}>
                <Typography variant='h5' color='white' style={{marginBottom: '1vh'}}>등급</Typography>
                <ScoreComment score={posts[0].analysisScore} varCode={'h4'} />
              </Grid>
            </Grid>
            }
          </Grid>
        </Box>
        {isSmall &&
        <>
          {/* 모바일용 */}
          <Grid
            container
            spacing={2}
            style={{
              position: 'relative',
              top: '42vh', // 이 값을 상단 박스의 높이와 동일하게 조정하세요
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
                      <ScoreBoard color={posts[0].analysisScore} vtScore={posts[0].vtScore} varCode={'h5'} />
                    </Grid>
                    <Grid item style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                      <Typography variant='h5' color='#373531' style={{ marginRight: '1vh'}}>등급</Typography>
                      <ScoreComment score={posts[0].analysisScore} varCode={'h5'} />
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
                  <Grid container justifyContent="space-evenly" alignItems="center">
                    <Grid item style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                      <UserInfoMob
                        userName={posts[0].userName}
                        requestDate={posts[0].analysisDate}
                        colorCode={'black'}
                        fileName="FileName"
                        fileSize="16.0MB"
                        fileIcon
                        onDownloadClick
                      />
                    </Grid>
                    <Grid item style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                      <FileModuleMob
                        userName={posts[0].userName}
                        requestDate={posts[0].analysisDate}
                        colorCode={'black'}
                        fileName="FileName"
                        fileSize="16.0MB"
                        fileIcon
                        onDownloadClick
                      />
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
        }
    </>
  );
}
