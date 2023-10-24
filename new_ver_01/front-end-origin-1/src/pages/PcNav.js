import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Typography, InputBase, IconButton, Modal } from '@mui/material';
import { Link } from 'react-router-dom';
import UserMenu from '../components/UserMenu';
import ProfileMenu from '../components/ProfileMenu';
import SearchIcon from '@mui/icons-material/Search';
import Search from '../components/Search';

const PcNav = () => {
  // 로그인 상태를 관리하는 상태 변수
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSearchModalOpen, setSearchModalOpen] = useState(false); // 검색 모달 상태 변수

  // 로그인 버튼 클릭 시 호출되는 함수
  const handleLogin = () => {
    // 로그인 로직을 처리한 후 로그인 상태를 변경합니다.
    setIsLoggedIn(true);
  };

  // 로그아웃 버튼 클릭 시 호출되는 함수
  const handleLogout = () => {
    // 로그아웃 로직을 처리한 후 로그인 상태를 변경합니다.
    setIsLoggedIn(false);
  };

  // 검색 아이콘 클릭 시 호출되는 함수
  const handleSearchClick = () => {
    setSearchModalOpen(true); // 검색 모달을 엽니다.
  };

  // 검색 모달 닫기
  const handleCloseSearchModal = () => {
    setSearchModalOpen(false);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#373531', zIndex: 1000 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Toolbar sx={{ justifyContent: 'flex-start' }}>
          {isLoggedIn && <UserMenu />}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img
              src="images/MainLogo.png"
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
          {/* 검색 아이콘과 검색창을 묶어서 클릭 이벤트 처리 */}
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
            <ProfileMenu onLogout={handleLogout} />
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
      <Modal
        open={isSearchModalOpen}
        onClose={handleCloseSearchModal}
        sx={{
          display: 'flex',
          alignItems: 'flex-start', // 모달을 화면 상단에 위치시키기 위해 변경
          justifyContent: 'center',
          paddingTop: '20vh', // 모달을 위로 이동시키기 위한 스타일
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

export default PcNav;
