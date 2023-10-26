import React from 'react';
import { Container, Typography, Box, Avatar, Button, TextField, Grid, Divider } from '@mui/material';
import { getUidFromCookie, getEmailFromCookie } from '../utils/getAuth.js';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const u_id = getUidFromCookie();
  const u_email = getEmailFromCookie();
  const navigate = useNavigate();

  const handleUsernameChange = () => {
    navigate('/profile/edit/username');
  };

  const handleEmailChange = () => {
    navigate('/profile/edit/email');
  };

  const handlePasswordChange = () => {
    navigate('/profile/edit/password');
  };

  const handleDeleteID = () => {
    navigate('/profile/edit/authenticate');
  };

  return (
    <Container maxWidth="md" style={{ marginBottom: '14vh' }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop="2vh"
        padding="1rem"
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
        borderRadius="8px"
        bgcolor="#fff"
      >
        <Avatar
          alt={u_id}
          src={u_id}
          sx={{ width: 120, height: 120, marginBottom: '1rem' }}
        />
        <Typography variant="h5" fontWeight="bold">
          {u_id}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {u_email}
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop="2vh"
        padding="1rem"
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
        borderRadius="8px"
        bgcolor="#fff"
      >
        <Typography variant="h6" fontWeight="bold" marginBottom="2vh">
          정보 수정
        </Typography>
        <Grid container spacing={2} flexDirection="column" alignItems="center">
          <Grid item xs={12} sm={4}>
            <TextField
              variant="outlined"
              label="ID"
              value={u_id}
              fullWidth
              disabled
            />
            <TextField
              id="new_id"
              variant="outlined"
              color="2"
              label="새로운 아이디"
              fullWidth
            />
            <Button
              variant="outlined"
              color="2"
              size="large"
              style={{
                marginTop: '1vh',
                marginBottom: '2vh',
                width: '100%'
              }}
              onClick={handleUsernameChange}
            >
              아이디 변경
            </Button>
          </Grid>
          <Divider
            variant="middle"
            sx={{
              width: '80%',
              marginTop: '2vh',
              marginBottom: '2vh',
              borderBottom: '1px solid #e0e0e0',
            }}
          />
          <Grid item xs={12} sm={4}>
            <TextField
              variant="outlined"
              label="EMAIL"
              value={u_email}
              fullWidth
              disabled
            />
            <TextField
              id="new_email"
              variant="outlined"
              color="2"
              label="새로운 이메일"
              fullWidth
            />
            <Button
              variant="outlined"
              color="2"
              size="large"
              style={{
                marginTop: '1vh',
                marginBottom: '2vh',
                width: '100%'
              }}
              onClick={handleEmailChange}
            >
              이메일 변경
            </Button>
          </Grid>
          <Divider
            variant="middle"
            sx={{
              width: '80%',
              marginTop: '2vh',
              marginBottom: '2vh',
              borderBottom: '1px solid #e0e0e0',
            }}
          />
          <Grid item xs={12} sm={4}>
            <TextField
              id="password"
              variant="outlined"
              color="2"
              label="현재 비밀번호"
              fullWidth
            />
            <TextField
              id="new_pw"
              variant="outlined"
              color="2"
              label="새로운 비밀번호"
              fullWidth
            />
            <Button
              variant="outlined"
              color="2"
              size="large"
              style={{
                marginTop: '1vh',
                marginBottom: '2vh',
                width: '100%'
              }}
              onClick={handlePasswordChange}
            >
              비밀번호 변경
            </Button>
          </Grid>
          <Divider
            variant="middle"
            sx={{
              width: '80%',
              marginTop: '2vh',
              marginBottom: '2vh',
              borderBottom: '1px solid #e0e0e0',
            }}
          />
          <Grid item xs={12} sm={4}>
            <Button
              variant="outlined"
              color="error"
              size="large"
              style={{
                marginBottom: '2vh',
                width: '100%'
              }}
              onClick={handleDeleteID}
            >
              회원 탈퇴
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Profile;
