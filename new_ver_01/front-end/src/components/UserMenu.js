import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Drawer, Button, List, ListItem, ListItemButton,
  ListItemText, Divider, Typography, Grid , ListItemIcon
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
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem key="2" disablePadding component={Link} to="/guide" style={linkStyle}>
            <ListItemButton>
              <ListItemIcon>
                <LibraryBooksIcon />
              </ListItemIcon>
              <ListItemText primary="Guide" />
            </ListItemButton>
          </ListItem>
          <ListItem key="3" disablePadding component={Link} to="/about" style={linkStyle}>
            <ListItemButton>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          <ListItem key="4" disablePadding component={Link} to="/contact" style={linkStyle}>
            <ListItemButton>
              <ListItemIcon>
                <CallIcon />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </ListItem>
          <ListItem key="5" disablePadding component={Link} to="/licenses" style={linkStyle}>
            <ListItemButton>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="Licenses" />
            </ListItemButton>
          </ListItem>
        </List>
      <Box sx={{ marginTop: '57vh' }}>
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
          <Button onClick={toggleDrawer(anchor, true)} color='4'><MenuIcon /></Button>
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
