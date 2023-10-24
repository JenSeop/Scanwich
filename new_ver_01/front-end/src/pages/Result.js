import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Container from '@mui/material/Container';
import TabPanel from '../components/TabPanel';
import ResultImgLender from '../components/ResultImgLender';
import ResultDetail from '../components/ResultDetail';
import ResultNav from '../components/ResultNav';

export default function CenteredTabs() {
  const [value, setValue] = useState(0);

  // 서버에서 받아온 게시글 데이터 (예시)
  const posts = [
    {
      id: 1,
      apkImage: '/path/to/apk1.png',
      apkName: 'APK 이름 1',
      userProfile: '/path/to/user1.jpg',
      userName: 'User1',
      malwareInfo: '1',
      analysisScore: '1',
      analysisDate: '2023-09-12',
      analysisStatus: 'false'
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <ResultNav reportId={posts[0].id} apkImage={posts[0].apkImage} apkName={posts[0].apkName} userProfile={posts[0].userProfile} userName={posts[0].userName}/>
      <ResultImgLender score={posts[0].analysisScore} />
      <div style={{ position: 'absolute', bottom: 220, left: 0, right: 0, height: '46.5%', background: '#373531', zIndex: -2, }} />
    </>
  );
}
