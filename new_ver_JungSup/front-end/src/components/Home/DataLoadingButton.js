import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

function DataLoadingButton({ hasNextPage, loading, handleLoadMore, isMobile }) {
  const marginStyle = isMobile
    ? {
        marginTop: '1vh',
        marginBottom: '12vh',
      }
    : {
        marginTop: '1vh',
        marginBottom: '1vh',
      };

  return (
    <Grid
      container
      justifyContent="center"
      style={marginStyle}
    >
      {hasNextPage && (
        <Button
          variant="outlined"
          onClick={handleLoadMore}
          disabled={loading}
          color="3"
          style={{
            width: '97.5%',
            height: '7vh',
            marginLeft: '1vh',
          }}
        >
          {loading ? (
            <>
              데이터를 불러오고 있습니다.
              <CircularProgress
                size={20}
                sx={{
                  marginLeft: '1vh',
                  color: '#373531',
                }}
              />
            </>
          ) : (
            '더보기'
          )}
        </Button>
      )}
      {!hasNextPage && (
        <Button
          variant="text"
          disabled
          color="3"
          style={{
            width: '97.5%',
            height: '7vh',
            marginLeft: '1vh',
          }}
        >
          추가 데이터가 존재하지 않습니다.
        </Button>
      )}
    </Grid>
  );
}

export default DataLoadingButton;