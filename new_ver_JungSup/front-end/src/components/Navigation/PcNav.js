import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box, Typography, InputBase, IconButton, Tooltip, Popover } from '@mui/material';
import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';
import ProfileMenu from './ProfileMenu';
import SearchIcon from '@mui/icons-material/Search';
import Search from './Search.js';
import { getTokenFromCookie, getUidFromCookie, getEmailFromCookie } from '../../utils/getAuth.js';

const PcNav = ({isMobile}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
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

    const interval = setInterval(() => {
      checkAuthStatus();
    });

    return () => {
      clearInterval(interval);
    };
  });

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleSearchClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
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
          
          {!isMobile &&
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
              <Tooltip title="검색">
              <InputBase
                placeholder="검색"
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
              </Tooltip>
            </Box>
          }
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
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          marginTop: '-1vh',
        }}
      >
        <Search/>
      </Popover>
    </AppBar>
  );
};

export default PcNav;
