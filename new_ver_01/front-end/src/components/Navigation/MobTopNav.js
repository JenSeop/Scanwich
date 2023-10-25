import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Typography, Modal } from '@mui/material';
import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';
import ProfileMenu from './ProfileMenu';
import Search from '../Search';

const MobTopNav = (isMobile) => {
  // 로그인 상태
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);

  // 로그인 버튼
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

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
          {isLoggedIn ? (
            <ProfileMenu onLogout={handleLogout} />
          ) : (
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Button variant="outlined" color="1" component={Link} to="/login">
              로그인
            </Button>
            {isMobile ? false :
              <Button variant="outlined" color="1" component={Link} to="/register/step1">
                회원가입
              </Button>
            }
            </Box>
          )}
        </Toolbar>
      </Toolbar>
      <Modal
        open={isSearchModalOpen}
        onClose={handleCloseSearchModal}
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingTop: '20vh',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#373531',
            border: '2px solid #D8D0C0',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Search />
        </Box>
      </Modal>
    </AppBar>
  );
};

export default MobTopNav;
