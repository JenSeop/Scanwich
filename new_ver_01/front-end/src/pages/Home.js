import * as React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

function Home() {
  // 서버에서 받아온 게시글 데이터 (예시)
  const posts = [
    {
      id: 1,
      apkImage: '/path/to/apk1.png',
      apkName: 'APK 이름 1',
      malwareInfo: '악성 진단 정보 1',
      content: '게시글 내용 1',
      userName: 'User1',
      analysisDate: '2023-09-12',
      userProfile: '/path/to/user1.jpg',
    },
    {
      id: 2,
      apkImage: '/path/to/apk2.png',
      apkName: 'APK 이름 2',
      malwareInfo: '악성 진단 정보 2',
      content: '게시글 내용 2',
      userName: 'User2',
      analysisDate: '2023-09-13',
      userProfile: '/path/to/user2.jpg',
    },
    {
      id: 3,
      apkImage: '/path/to/apk3.png',
      apkName: 'APK 이름 3',
      malwareInfo: '악성 진단 정보 3',
      content: '게시글 내용 3',
      userName: 'User3',
      analysisDate: '2023-09-14',
      userProfile: '/path/to/user3.jpg',
    },
    {
      id: 4,
      apkImage: '/path/to/apk4.png',
      apkName: 'APK 이름 4',
      malwareInfo: '악성 진단 정보 4',
      content: '게시글 내용 4',
      userName: 'User4',
      analysisDate: '2023-09-15',
      userProfile: '/path/to/user4.jpg',
    },
    {
      id: 5,
      apkImage: '/path/to/apk3.png',
      apkName: 'APK 이름 3',
      malwareInfo: '악성 진단 정보 3',
      content: '게시글 내용 3',
      userName: 'User3',
      analysisDate: '2023-09-14',
      userProfile: '/path/to/user3.jpg',
    },
    {
      id: 6,
      apkImage: '/path/to/apk4.png',
      apkName: 'APK 이름 4',
      malwareInfo: '악성 진단 정보 4',
      content: '게시글 내용 4',
      userName: 'User4',
      analysisDate: '2023-09-15',
      userProfile: '/path/to/user4.jpg',
    },
    {
      id: 7,
      apkImage: '/path/to/apk3.png',
      apkName: 'APK 이름 3',
      malwareInfo: '악성 진단 정보 3',
      content: '게시글 내용 3',
      userName: 'User3',
      analysisDate: '2023-09-14',
      userProfile: '/path/to/user3.jpg',
    },
    {
      id: 8,
      apkImage: '/path/to/apk4.png',
      apkName: 'APK 이름 4',
      malwareInfo: '악성 진단 정보 4',
      content: '게시글 내용 4',
      userName: 'User4',
      analysisDate: '2023-09-15',
      userProfile: '/path/to/user4.jpg',
    },
    // 추가 게시글 데이터
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        {/* 좌측 컬럼 */}
      </Grid>
      <Grid item xs={12} sm={8} container spacing={2}>
        {/* 우측 컬럼 */}
        {posts.map((post, index) => (
          <Grid item xs={12} sm={6} key={post.id}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={post.apkImage}
                  alt={post.apkName}
                />
                <CardContent>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img src={post.userProfile} alt="UserProfile" style={{ width: '32px', height: '32px', marginRight: '8px' }} />
                      <Typography variant="h6">{post.userName}</Typography>
                    </div>
                    <Typography variant="body2">{post.analysisDate}</Typography>
                  </div>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.apkName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.malwareInfo}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {post.content}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Home;
