import React from 'react';
import { Container, TextField, Button } from '@mui/material';

const SearchBox = () => {
  return (
    <Container>
      <TextField label="검색어 입력" fullWidth variant="outlined" />
      <Button variant="contained" color="primary">
        검색
      </Button>
    </Container>
  );
};

export default SearchBox;
