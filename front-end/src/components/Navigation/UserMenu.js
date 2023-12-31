import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Drawer, Button, List, ListItem, ListItemButton,
  ListItemText, Divider, Typography, Grid , ListItemIcon, Tooltip
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import GroupIcon from '@mui/icons-material/Group';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HomeIcon from '@mui/icons-material/Home';

export default function UserMenu() {
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const linkStyle = {
    color: 'inherit', // 기본 색상으로 설정
    textDecoration: 'none', // 밑줄 제거
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <List>
          <ListItem key="1" disablePadding component={Link} to="/" style={linkStyle}>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="홈" />
            </ListItemButton>
          </ListItem>
          <ListItem key="2" disablePadding component={Link} to="/guide" style={linkStyle}>
            <ListItemButton>
              <ListItemIcon>
                <LibraryBooksIcon />
              </ListItemIcon>
              <ListItemText primary="가이드" />
            </ListItemButton>
          </ListItem>
          <ListItem key="3" disablePadding component={Link} to="/about" style={linkStyle}>
            <ListItemButton>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="소개" />
            </ListItemButton>
          </ListItem>
          <ListItem key="4" disablePadding component={Link} to="/information" style={linkStyle}>
            <ListItemButton>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="정보" />
            </ListItemButton>
          </ListItem>
        </List>
      <Box sx={{ position: 'fixed', // 박스를 고정 위치로 설정
        bottom: '0', // 화면 하단에 위치
        left: '0', // 좌측에 위치 (원하는 위치로 조정 가능)
      }}>
        <Divider />
        <Grid container sx={{ padding: '16px' }}>
          <Grid item xs={12}>
            <Typography variant="body2" color="text.secondary">
              Copyright © 2023 This World Bakery
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Collaborate with KISIA, SDEV, ESTsoft
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} color='4'
          sx={{ 
                '&:hover': {
                    backgroundColor: 'transparent', 
                    textDecoration: 'none' 
                } 
            }}
        >
          <Tooltip title="메뉴">
            <MenuIcon />
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
    </div>
  );
}
