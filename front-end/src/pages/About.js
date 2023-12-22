import React from 'react';
import { Container, Typography, Paper, Box, Divider } from '@mui/material';

const Contributor = ({ name, githubUrl, role }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <Typography variant="body2" color="textSecondary" sx={{ marginRight: '1vh' }}>
    {role} 
  </Typography>
    <Typography variant="h6" sx={{ marginRight: '1vh' }}>
      {name}
    </Typography>
    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
      <img
        src="/images/github.png"
        alt="github"
        width={20}
        height={20}
      />
    </a>
  </Box>
);

const About = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Paper elevation={0} style={{ padding: '16px', margin: '0 auto', border: '1px solid #E0E0E0', marginBottom: '10vh', textAlign: 'center' }}>
        <img
          src="/images/remaster/11.png"
          alt="Scanwich"
          width={140}
          height={140}
        />
        <Typography variant="h4" fontWeight='bold' color='primary' gutterBottom>
          About
        </Typography>
        <Divider sx={{ marginTop: '2vh', marginBottom: '1vh' }} />
        <Typography variant="h5" fontWeight='bold' gutterBottom>
          Project
        </Typography>
        <Typography variant="body1" paragraph>
          The bakery project was conducted with ESTsoft as part of KISIA SDEV.
        </Typography>
        <Divider sx={{ marginTop: '2vh', marginBottom: '1vh' }} />
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5" fontWeight='bold' gutterBottom>
            Team
          </Typography>
          <Contributor name="JenSeop" githubUrl="https://github.com/JenSeop" role="(Leader-FullStack)" />
          <Contributor name="scriptfetish" githubUrl="https://github.com/scriptfetish" role="(Member-Chart)" />
          <Contributor name="yjeongc" githubUrl="https://github.com/yjeongc" role="(Member-Analyst)" />
        </Box>
      </Paper>
    </Container>
  );
};

export default About;
