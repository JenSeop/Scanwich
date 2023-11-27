import React from 'react';
import { Container, Typography, Paper, Box, Divider } from '@mui/material';

const Licenses = () => {
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
          Information
        </Typography>
        <Divider sx={{ marginTop: '2vh', marginBottom: '1vh' }} />
        <Typography variant="h5" fontWeight='bold' gutterBottom>
          List of Technologies Used
        </Typography>
        <Typography variant="body1" paragraph>
          This web application has been developed using the following technologies and libraries.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" fontWeight='bold'>
            Front-end
          </Typography>
          <Typography variant="body1">
            React, MUI, ApexChart, Reactflow, html2canvas, jsPDF
          </Typography>
          <Typography variant="body1" fontWeight='bold'>
            Back-end
          </Typography>
          <Typography variant="body1">
            Django, DjangoQ, Django REST framework, PostgreSQL
          </Typography>
          <Typography variant="body1" fontWeight='bold'>
            Libraries, APIs
          </Typography>
          <Typography variant="body1">
            Androguard, Dexofuzzy, VirusTotal
          </Typography>
        </Box>
        <Divider sx={{ marginTop: '2vh', marginBottom: '1vh' }} />
        <Typography variant="body1" paragraph>
          The above list summarizes some of the technologies and libraries used in this web application.
        </Typography>
        <Typography variant="body1" paragraph>
          For more detailed information, please refer to the developer documentation and source code.
        </Typography>
        <Typography variant="body1" paragraph>
          This web application is distributed under the MIT license.
        </Typography>
        <Divider sx={{ marginTop: '1vh', marginBottom: '1vh' }} />
        <Typography variant="body1" fontWeight="bold">
          GitHub
        </Typography>
        <a href="https://github.com/JenSeop/Scanwich" target="_blank">
          <img
            src="/images/github.png"
            alt="github"
            width={30}
            height={30}
          />
        </a>
      </Paper>
    </Container>
  );
};

export default Licenses;
