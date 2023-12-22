import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import RestorePageIcon from '@mui/icons-material/RestorePage';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Tooltip from '@mui/material/Tooltip';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';
import { getUidFromCookie } from '../../utils/getAuth.js';
import { getTokenFromCookie } from '../../utils/getAuth.js';
import LoadingProgress from '../MUI/loadingProgress.js';

export default function ProfileMenu({userName, userEmail}) {
  const [state, setState] = React.useState({ right: false });
  const [loading, setLoading] = useState(false);
  const u_id = getUidFromCookie();
  const navigate = useNavigate();

  const linkStyle = {
    color: 'inherit', // 기본 색상으로 설정
    textDecoration: 'none', // 밑줄 제거
  };

  const handleLogout = async () => {
    try {
      // 로그아웃 API 호출
      const apiUrl = '/client/user/jwtlogout/';
      const u_id = getUidFromCookie();
      const u_token = getTokenFromCookie();

      const data = {
        u_id: u_id,
        t_key: u_token,
      };
      setLoading(true);

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
        setLoading(false);
  
        // 로그아웃 후 홈 페이지로 이동
        navigate('/');
        window.location.reload();
      } else {
        // 로그아웃 실패
        console.error('로그아웃 실패:', response.data);
        setLoading(false);
      }
    } catch (error) {
      console.error('로그아웃 오류:', error);
      setLoading(false);
    }
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* 닫기 버튼 */}
      <Button
        variant='text'
        onClick={toggleDrawer(anchor, false)}
        sx={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          width: '32px',
          height: '32px',
          '&:hover': {
            backgroundColor: 'transparent', 
            textDecoration: 'none' 
        } 
        }}
        color='3'
      >
        <CloseIcon />
      </Button>
      {/* 사용자 프로필 (상단) */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'left', // 왼쪽으로 정렬
          p: 2, // padding 추가
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column', // 요소를 세로로 정렬하도록 설정
            alignItems: 'left', // 가운데 정렬
          }}
        >
          <Avatar
            alt={u_id}
            src={u_id}
            sx={{ width: 50, height: 50 }}
        />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column', // 요소를 세로로 정렬하도록 설정
            alignItems: 'left', // 왼쪽으로 정렬
            ml: 2, // 왼쪽 여백 추가
          }}
        >
          <Typography variant="body1" fontWeight="bold">
            {userName}
          </Typography>
          <Typography variant="body1">
            {userEmail}
          </Typography>
        </Box>
      </Box>
      <Divider />
      <List>
        {/* 프로필 */}
        <ListItem key="Profile" component={Link} to="/Profile" style={linkStyle} disablePadding >
          <ListItemButton>
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="내 정보" />
          </ListItemButton>
        </ListItem>
        <Divider />
        
        {/* 분석 기록 */}
        <ListItem key="AnalysisHistory" component={Link} to="/History" style={linkStyle} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <RestorePageIcon />
            </ListItemIcon>
            <ListItemText primary="분석 기록" />
          </ListItemButton>
        </ListItem>
        <Divider />
        
        {/* 파일 분석 */}
        <ListItem key="FileAnalysis" component={Link} to="/Analysis" style={linkStyle} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PlagiarismIcon />
            </ListItemIcon>
            <ListItemText primary="파일 분석"/>
          </ListItemButton>
        </ListItem>
        <Divider />
      </List>

      {/* 로그아웃 버튼을 Drawer의 맨 하단에 추가 */}
      <Box sx={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
        <Button variant="outlined" color="3" fullWidth onClick={handleLogout}>
          로그아웃
        </Button>
      </Box>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} color='4'
          sx={{ 
                '&:hover': {
                    backgroundColor: 'transparent', 
                    textDecoration: 'none' 
                } 
            }}
          >
            <Tooltip title="프로필">
              <PersonIcon />
            </Tooltip>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      {loading && <LoadingProgress/>}
    </div>
  );
}
