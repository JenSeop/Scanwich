import React from 'react';
import Button from '@mui/material/Button';

function RefreshButton() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <Button variant="contained" color="primary" onClick={handleRefresh}>
      새로 고침
    </Button>
  );
}

export default RefreshButton;
