import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import '../assets/styles/MobNav.css';

const MobBotNav = () => {
  const [value, setValue] = React.useState(0);

  return (
    <nav className="mob-nav">
      <BottomNavigation
        value={value}
        sx={{ backgroundColor: '#373531' }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="홈"
          icon={<HomeIcon />}
          component={Link}
          to="/"
          sx={{
            color: '#FFF5DC',
            "&.Mui-selected": {
              color: '#2AF57B',
            },
          }}
        />
        <BottomNavigationAction
          label="탐색"
          icon={<ExploreIcon />}
          component={Link}
          to="/explore"
          sx={{
            color: '#FFF5DC',
            "&.Mui-selected": {
              color: '#2AF57B',
            },
          }}
        />
        <BottomNavigationAction
          label="프로필"
          icon={<PersonIcon />}
          component={Link}
          to="/profile"
          sx={{
            color: '#FFF5DC',
            "&.Mui-selected": {
              color: '#2AF57B',
            },
          }}
        />
      </BottomNavigation>
    </nav>
  );
};

export default MobBotNav;
