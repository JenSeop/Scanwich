import React, { useState } from 'react';
import { Grid, Box, TextField, Card, CardContent, Typography, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const handleSearch = () => {
    const results = [
      { keyword: 'Report' },
      { keyword: 'Keyword' },
    ];
    setSearchResults(results);
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setSearchTerm(newValue);
    handleSearch();
  };

  const handleCardMouseEnter = (index) => {
    setHoveredCardIndex(index);
  };

  const handleCardMouseLeave = () => {
    setHoveredCardIndex(null);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '1vh',
        width: '50vh'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: '4px',
          padding: '4px',
          marginBottom: '-0.5vh',
        }}
      >
        <TextField
          placeholder="검색하기"
          value={searchTerm}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <IconButton
                type="submit"
                sx={{ p: '8px' }}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            ),
          }}
          sx={{
            width: '48vh',
            height: '8vh',
          }}
          autoFocus
        />
      </Box>

      {searchTerm !== '' && (
        searchResults.map((result, index) => (
          <Card
            key={index}
            elevation={0}
            sx={{
              marginTop: '5px',
              cursor: 'pointer',
              width: '95%',
              border: '1px solid #E0E0E0',
              backgroundColor: hoveredCardIndex === index ? '#EFEFEF' : 'white',
            }}
            onMouseEnter={() => handleCardMouseEnter(index)}
            onMouseLeave={handleCardMouseLeave}
          >
            <CardContent>
              <Grid container>
                <Grid item>
                  {result.keyword == 'Report' &&
                    <Typography variant="body2" color="text.secondary">
                      <InsertDriveFileOutlinedIcon sx={{fontSize: 'medium', marginBottom: '-0.4vh', marginRight: '1vh'}}/>
                      <strong>{result.keyword}</strong>
                    </Typography>
                  }
                  {result.keyword == 'Keyword' &&
                    <Typography variant="body2" color="text.secondary">
                      <ManageSearchIcon sx={{fontSize: 'medium', marginBottom: '-0.4vh', marginRight: '1vh'}}/>
                      <strong>{result.keyword}</strong>
                    </Typography>
                  }
                </Grid>
                <Grid item sx={{marginLeft: '1vh'}}>
                  <Typography variant="body2" color="text.secondary">
                    {searchTerm.substring(0,21)}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))
      )}
    </Box>
  );
};

export default Search;
