import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box, Typography, InputBase, IconButton, DialogContent, Dialog } from '@mui/material';
import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';
import ProfileMenu from './ProfileMenu';
import SearchIcon from '@mui/icons-material/Search';
import Search from '../Search';
import { getTokenFromCookie, getUidFromCookie, getEmailFromCookie } from '../../utils/getAuth.js';

const PcNav = () => {
  // 로그인 상태
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);
  const u_token = getTokenFromCookie();
  const u_id = getUidFromCookie();
  const u_email = getEmailFromCookie();

  useEffect(() => {
    const u_token = getTokenFromCookie();
    const u_id = getUidFromCookie();
    const u_email = getEmailFromCookie();

    const checkAuthStatus = () => {
      if (u_token && u_id && u_email) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    // 검사
    const interval = setInterval(() => {
      checkAuthStatus();
    });

    // 컴포넌트 언마운트 시 interval 클리어
    return () => {
      clearInterval(interval);
    };

    // 처음 컴포넌트가 마운트될 때도 검사 실행
    checkAuthStatus();
  });

  // 로그아웃 버튼
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // 검색 아이콘 클릭
  const handleSearchClick = () => {
    setSearchModalOpen(true);
  };

  // 검색 모달 닫기
  const handleCloseSearchModal = () => {
    setSearchModalOpen(false);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#373531', zIndex: 1000 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Toolbar sx={{ justifyContent: 'flex-start' }}>
          <UserMenu />
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img
              src="/images/remaster/10.png"
              alt="Scanwich"
              width={65}
              height={65}
              style={{ marginRight: '10px' }}
              component={Link}
              to="/register/step2"
            />
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#FFF5DC' }} fontWeight="bold">
              Scanwich
            </Typography>
          </Link>
        </Toolbar>
        <Toolbar sx={{ justifyContent: 'flex-end', alignItems: 'center' }}>
          <Box
            onClick={handleSearchClick}
            sx={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #FFF5DC',
              borderRadius: '10px',
              marginRight: '50px',
              cursor: 'pointer',
            }}
          >
            <InputBase
              placeholder="검색하기"
              sx={{
                color: '#FFF5DC',
                marginLeft: '8px',
                flex: 1,
                '& input': {
                  '&::placeholder': {
                    color: '#FFF5DC',
                  },
                },
              }}
              inputProps={{
                'aria-label': 'search',
                readOnly: true,
              }}
            />
            <IconButton type="submit" sx={{ p: '10px', marginLeft: '8px' }} aria-label="search">
              <SearchIcon sx={{ color: '#FFF5DC' }} />
            </IconButton>
          </Box>
          {isLoggedIn ? (
            <ProfileMenu onLogout={handleLogout} userName={u_id} userEmail={u_email}/>
          ) : (
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Button variant="outlined" color="1" component={Link} to="/login">
                로그인
              </Button>
              <Button variant="outlined" color="1" component={Link} to="/register/step1">
                회원가입
              </Button>
            </Box>
          )}
        </Toolbar>
      </Toolbar>
      <Dialog open={isSearchModalOpen} onClose={handleCloseSearchModal}>
        <DialogContent>
          <Search />
        </DialogContent>
      </Dialog>
    </AppBar>
  );
};

export default PcNav;
