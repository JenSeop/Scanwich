import React, { useEffect, useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function ScrollToTopButton({value}) {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <Tooltip title="Scroll to top" placement="left">
          <IconButton
            onClick={scrollToTop}
            style={{
              position: 'fixed',
              bottom: value,
              right: '20px',
              zIndex: 10000,
              backgroundColor: '#373531',
              borderRadius: '50%',
              padding: '10px',
              width: '40px',
              height: '40px',
              border: '2px solid white',
              transition: 'opacity 1.0s ease-in-out',
              opacity: 1,
            }}
          >
            <ArrowUpwardIcon style={{ color: '#FFF5DC' }} />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
}

export default ScrollToTopButton;
