import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import '../assets/styles/MobNav.css'; // 스타일 파일을 import

const BottomNavBar = () => {
  const [value, setValue] = React.useState(0);

  return (
    <nav className="mob-nav">
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="홈"
          icon={<HomeIcon />}
          component={Link}
          to="/"
        />
        <BottomNavigationAction
          label="탐색"
          icon={<ExploreIcon />}
          component={Link}
          to="/explore"
        />
        <BottomNavigationAction
          label="프로필"
          icon={<PersonIcon />}
          component={Link}
          to="/profile"
        />
      </BottomNavigation>
    </nav>
  );
};

export default BottomNavBar;
