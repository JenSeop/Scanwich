import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Avatar, Button, TextField, Grid, Divider } from '@mui/material';
import { getUidFromCookie, getEmailFromCookie } from '../utils/getAuth.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SnackBar from '../components/MUI/SnackBar';
import { getTokenFromCookie } from '../utils/getAuth.js';
import setCookie from '../utils/setCookie';
import { isValidate } from '../utils/getAuth.js';
import { getCookie } from '../utils/getAuth.js';

const Profile = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [status, setStatus] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');
  const u_id = getUidFromCookie();
  const u_email = getEmailFromCookie();
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!getCookie('u_token')) {
      navigate('/login')
    }
    isValidate();
    setCookie('prevPage', '/profile', 365);
  }, [])

  const openSnackbar = () => {
    setStatus(true);

    setTimeout(() => {
      setStatus(false);
    }, 3000);
  };

  const validatePassword = (input) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    return passwordRegex.test(input);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setNewPassword(value);
    if (!validatePassword(value)) {
      setPasswordError('비밀번호: 8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.');
    } else {
      setPasswordError('');
    }
  };

  const handleUsernameChange = () => {
    navigate('/profile/edit/username');
  };

  const handleEmailChange = () => {
    navigate('/profile/edit/email');
  };
  
  const handleLogout = async () => {
    try {
      // 로그아웃 API 호출
      const apiUrl = '/client/user/jwtlogout/';
      const u_token = getTokenFromCookie();

      const data = {
        u_id: u_id,
        t_key: u_token,
      };

      const response = await axios.post(apiUrl, data);
      if (response.status === 200) {
        // 성공
        console.log('로그아웃 성공:', response.data);
  
        // 쿠키 및 로컬 스토리지에서 사용자 관련 데이터 제거
        document.cookie = 'u_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'u_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'u_email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        localStorage.removeItem('u_token');
        localStorage.removeItem('u_id');
        localStorage.removeItem('u_email');
  
        // 로그아웃 후 홈 페이지로 이동
        navigate('/');
        window.location.reload();
      } else {
        // 로그아웃 실패
        console.error('로그아웃 실패:', response.data);
      }
    } catch (error) {
      console.error('로그아웃 오류:', error);
    }
  };

  const handlePassword = async () => {
    const userData = {
      u_id: u_id,
      u_email: u_email,
      current_password: currentPassword,
      new_password: newPassword,
    };
    const apiUrl = '/api/user/reset_pw/';

    if (!currentPassword || !newPassword) {
      setStatusMsg('모든 필드를 채워주세요 :)');
      openSnackbar();
      return;
    }
    try {
      // back-end와 통신
      const response = await axios.post(apiUrl, userData);

      // 응답 처리
      if (response.data.success) {
      } else {
        setStatusMsg('비밀번호가 변경되었습니다.');
        openSnackbar();
        handleLogout();
      }
    } catch (error) {
      setStatusMsg('비밀번호를 다시 한번 확인해주세요.');
      openSnackbar();
    }
  };

  const handleDeleteID = () => {
    navigate('/profile/edit/authenticate');
  };

  return (
    <>
      {u_id &&
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
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
                <TextField
                  id="new_pw"
                  variant="outlined"
                  color="2"
                  label="새로운 비밀번호"
                  fullWidth
                  type="password"
                  value={newPassword}
                  onChange={handlePasswordChange}
                  error={!!passwordError}
                  helperText={passwordError}
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
                  onClick={handlePassword}
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
          {status && <SnackBar type={'error'} message={statusMsg}/>}
        </Container>
      }
    </>
  );
};

export default Profile;
