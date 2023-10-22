import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Typography, InputBase, IconButton, DialogContent, Dialog } from '@mui/material';
import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';
import ProfileMenu from './ProfileMenu';
import SearchIcon from '@mui/icons-material/Search';
import Search from './Search';

const PcNav = () => {
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
              src="/images/MainLogo.png"
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
      <Dialog open={isSearchModalOpen} onClose={handleCloseSearchModal}>
        <DialogContent>
          <Search />
        </DialogContent>
      </Dialog>
    </AppBar>
  );
};

export default PcNav;
