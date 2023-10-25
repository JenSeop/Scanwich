import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
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
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
import { getUidFromCookie } from '../../utils/getAuth.js';
import { getCsrf } from '../../utils/getCsrf.js';
import { getTokenFromCookie } from '../../utils/getAuth.js';

export default function ProfileMenu({userName, userEmail}) {
  const [state, setState] = React.useState({ right: false });
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // 로그아웃 API 호출
      const apiUrl = '/api/user/jwtlogout/';
      const u_id = getUidFromCookie();
      const u_token = getTokenFromCookie();
      const csrfToken = getCsrf();

      const data = {
        u_id: u_id,
        t_key: u_token,
        csrfToken: csrfToken,
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
        variant='contained'
        onClick={toggleDrawer(anchor, false)}
        sx={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          color: 'white',
          width: '32px',
          height: '32px',
          padding: '1px',
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
          <PersonIcon sx={{ fontSize: 64 }} /> {/* 프로필 아이콘 */}
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
        <ListItem key="Profile" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="프로필" />
          </ListItemButton>
        </ListItem>
        <Divider />
        
        {/* 분석 기록 */}
        <ListItem key="AnalysisHistory" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <RestorePageIcon />
            </ListItemIcon>
            <ListItemText primary="분석 기록" />
          </ListItemButton>
        </ListItem>
        <Divider />
        
        {/* 파일 분석 */}
        <ListItem key="FileAnalysis" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PlagiarismIcon />
            </ListItemIcon>
            <ListItemText primary="파일 분석" />
          </ListItemButton>
        </ListItem>
        <Divider />
      </List>

      {/* 로그아웃 버튼을 Drawer의 맨 하단에 추가 */}
      <Box sx={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
        <Button variant="contained" color="3" fullWidth onClick={handleLogout} sx={{ color: '#FFFFFF' }}>
          로그아웃
        </Button>
      </Box>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} color='4'><PersonIcon /></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
