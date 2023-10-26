import React, { useEffect } from 'react';
import setCookie from '../utils/setCookie';
import { Grid, Divider } from '@mui/material';
import ScrollTop from '../components/MUI/ScrollTop';
import List from '../components/Home/List';
import Queue from '../components/Home/Queue';

function Home(props) {
  const { isMobile } = props;

  useEffect(() => {
    setCookie('prevPage', '/', 365);
  }, [])

  // 서버에서 받아온 게시글 데이터 (예시)
  const posts = [
    {
      id: 1,
      apkImage: '/path/to/apk1.png',
      apkName: 'APK 이름 1',
      malwareInfo: '1',
      userName: 'User1',
      userProfile: '/path/to/user1.jpg',
      analysisScore: '8',
      analysisDate: '2023-09-12',
      analysisStatus: 'false'
    },
    {
      id: 1,
      apkImage: '/path/to/apk1.png',
      apkName: 'APK 이름 1',
      malwareInfo: '1',
      userName: 'User1',
      userProfile: '/path/to/user1.jpg',
      analysisScore: '1',
      analysisDate: '2023-09-12',
      analysisStatus: 'false'
    },
    {
      id: 1,
      apkImage: '/path/to/apk1.png',
      apkName: 'APK 이름 1',
      malwareInfo: '1',
      userName: 'User1',
      userProfile: '/path/to/user1.jpg',
      analysisScore: '1',
      analysisDate: '2023-09-12',
      analysisStatus: 'false'
    },
    {
      id: 1,
      apkImage: '/path/to/apk1.png',
      apkName: 'APK 이름 1',
      malwareInfo: '1',
      userName: 'User1',
      userProfile: '/path/to/user1.jpg',
      analysisScore: '1',
      analysisDate: '2023-09-12',
      analysisStatus: 'false'
    },
    {
      id: 1,
      apkImage: '/path/to/apk1.png',
      apkName: 'APK 이름 1',
      malwareInfo: '1',
      userName: 'User1',
      userProfile: '/path/to/user1.jpg',
      analysisScore: '1',
      analysisDate: '2023-09-12',
      analysisStatus: 'false'
    },
    {
      id: 1,
      apkImage: '/path/to/apk1.png',
      apkName: 'APK 이름 1',
      malwareInfo: '1',
      userName: 'User1',
      userProfile: '/path/to/user1.jpg',
      analysisScore: '1',
      analysisDate: '2023-09-12',
      analysisStatus: 'false'
    },
    {
      id: 1,
      apkImage: '/path/to/apk1.png',
      apkName: 'APK 이름 1',
      malwareInfo: '1',
      userName: 'User1',
      userProfile: '/path/to/user1.jpg',
      analysisScore: '1',
      analysisDate: '2023-09-12',
      analysisStatus: 'false'
    },
    {
      id: 1,
      apkImage: '/path/to/apk1.png',
      apkName: 'APK 이름 1',
      malwareInfo: '1',
      userName: 'User1',
      userProfile: '/path/to/user1.jpg',
      analysisScore: '1',
      analysisDate: '2023-09-12',
      analysisStatus: 'false'
    },
    {
      id: 1,
      apkImage: '/path/to/apk1.png',
      apkName: 'APK 이름 1',
      malwareInfo: '1',
      userName: 'User1',
      userProfile: '/path/to/user1.jpg',
      analysisScore: '1',
      analysisDate: '2023-09-12',
      analysisStatus: 'false'
    },
  ];

  const posts2 = [
    {
      id: 1,
      apkImage: '/path/to/apk1.png',
      apkName: 'APK 이름 1',
      malwareInfo: '1',
      userName: 'User1',
      userProfile: '/path/to/user1.jpg',
      analysisScore: '1',
      analysisDate: '2023-09-12',
      analysisStatus: 'false'
    },
    {
      id: 1,
      apkImage: '/path/to/apk1.png',
      apkName: 'APK 이름 1',
      malwareInfo: '1',
      userName: 'User1',
      userProfile: '/path/to/user1.jpg',
      analysisScore: '1',
      analysisDate: '2023-09-12',
      analysisStatus: 'false'
    },
    {
      id: 1,
      apkImage: '/path/to/apk1.png',
      apkName: 'APK 이름 1',
      malwareInfo: '1',
      userName: 'User1',
      userProfile: '/path/to/user1.jpg',
      analysisScore: '1',
      analysisDate: '2023-09-12',
      analysisStatus: 'false'
    },
  ];

  return (
    <>
      <Grid container spacing={2}>
        {isMobile ? true :
        <Grid
          item
          xs={12}
          sm={4}
          style={{
            borderRight: '1px solid #DDD',
            flex: 1,
            marginTop: '8px',
            marginLeft: '-10px',
          }}
        >
          <Queue data={posts2} isMobile={isMobile}/>
        </Grid>
        }
        <Divider orientation="vertical" />
        <Grid
          item
          xs={12}
          sm={8}
          container
          spacing={2}
          style={{
            marginTop: '8px',
            marginRight: '2px',
          }}
        >
          <List data={posts} isMobile={isMobile}/>
        </Grid>
      </Grid>
      {isMobile ? true : <ScrollTop />}
    </>
  );
}

export default Home;
