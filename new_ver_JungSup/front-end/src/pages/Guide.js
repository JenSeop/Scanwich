import React, { useRef } from 'react';
import { Container, Typography, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';

const Guide = () => {
  const startRef = useRef(null);
  const featuresRef = useRef(null);
  const settingsRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Paper elevation={0} style={{ padding: '16px', margin: '0 auto', border: '1px solid #E0E0E0', marginBottom: '2rem' }}>
        <div style={{ textAlign: 'center' }}>
          <img
            src="/images/remaster/11.png"
            alt="Scanwich"
            width={140}
            height={140}
          />
          <Typography variant="h4" fontWeight='bold' color='primary' gutterBottom>
            Guide
          </Typography>
        </div>
        <Divider sx={{ marginTop: '2vh', marginBottom: '2vh' }} />
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          목차
        </Typography>
        <List>
          <ListItem button onClick={() => scrollToRef(startRef)}>
            <ListItemText primary="1. 시작하기" />
          </ListItem>
          <ListItem button onClick={() => scrollToRef(featuresRef)}>
            <ListItemText primary="2. 기능 소개" />
          </ListItem>
          <ListItem button onClick={() => scrollToRef(settingsRef)}>
            <ListItemText primary="3. 설정" />
          </ListItem>
        </List>
        <Divider sx={{ marginTop: '2vh', marginBottom: '2vh' }} />
        <div ref={startRef}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            1. 시작하기
          </Typography>
          <Typography variant="body1" paragraph>
            이 가이드는 프로젝트를 시작하는 데 필요한 기본 정보를 제공합니다.
          </Typography>
        </div>
        <div ref={featuresRef}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            2. 기능 소개
          </Typography>
          <Typography variant="body1" paragraph>
            이 섹션에서는 프로젝트의 주요 기능에 대한 소개를 제공합니다.
          </Typography>
        </div>
        <div ref={settingsRef}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            3. 설정
          </Typography>
          <Typography variant="body1" paragraph>
            프로젝트를 설정하고 사용자 지정하는 방법에 대한 정보를 제공합니다.
          </Typography>
        </div>
      </Paper>
    </Container>
  );
};

export default Guide;
