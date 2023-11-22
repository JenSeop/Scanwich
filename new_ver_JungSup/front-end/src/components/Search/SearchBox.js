import React, { useState } from 'react';
import { Grid, Box, TextField, Card, CardContent, Typography, IconButton, Paper, Tooltip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { Link } from 'react-router-dom';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState([]);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const handleSearch = () => {
    const types = [
      { keyword: 'Name' },
      { keyword: 'Hash' },
    ];
    setSearchType(types);
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
        width: '50vh',
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
          id="search_box"
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
      {searchTerm && (
        searchType.map((type, index) => (
          <Link to={type.keyword === 'Name' ? `/search/${"name"}/${searchTerm}` : `/search/${"hash"}/${searchTerm}`} style={{ textDecoration: 'none', width: '95%' }}>
            <Card
              key={index}
              elevation={0}
              sx={{
                marginTop: '5px',
                cursor: 'pointer',
                border: '1px solid #E0E0E0',
                backgroundColor: hoveredCardIndex === index ? '#EFEFEF' : 'white',
              }}
              onMouseEnter={() => handleCardMouseEnter(index)}
              onMouseLeave={handleCardMouseLeave}
            >
              <CardContent>
                <Grid container>
                  <Grid item>
                    {type.keyword == 'Name' &&
                        <Tooltip title="Name 기준으로 검색하기" placement="bottom">
                          <Typography variant="body2" color="text.secondary">
                            <InsertDriveFileOutlinedIcon sx={{fontSize: 'medium', marginBottom: '-0.4vh', marginRight: '1vh'}}/>
                            <strong>{type.keyword}</strong>
                          </Typography>
                        </Tooltip>
                    }
                    {type.keyword == 'Hash' &&
                      <Tooltip title="Hash를 기준으로 검색하기" placement="bottom">
                        <Typography variant="body2" color="text.secondary">
                          <ManageSearchIcon sx={{fontSize: 'medium', marginBottom: '-0.4vh', marginRight: '1vh'}}/>
                          <strong>{type.keyword}</strong>
                        </Typography>
                      </Tooltip>
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
          </Link>
        ))
      )}
      {!searchTerm && (
        <Paper
          elevation={0}
          style={{
            padding: '12px',
            margin: '0 auto',
            border: '1px solid #E0E0E0',
            marginTop: '1vh',
            width: '44vh'
            }}
        >
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={4}>
              <img
                src="/images/remaster/11.png"
                alt="Scanwich"
                width={80}
                height={80}
                to="/register/step2"
              />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="body1" fontWeight="bold" color="primary">Search</Typography>
              <Typography variant="body2" color="primary">검색어를 입력해주세요.</Typography>
              <Typography variant="body2" color="primary">두가지 옵션 선택이 가능합니다.</Typography>
              <Grid container sx={{marginTop: '1vh'}}>
                <Grid item xs={5}>
                  <Paper
                    elevation={0}
                    style={{
                      padding: '4px',
                      margin: '0 auto',
                      border: '1px solid #E0E0E0',
                      }}
                  >
                    <Tooltip title="이름을 기준으로 검색합니다." placement="bottom">
                      <Typography variant="body2" color="text.secondary">
                        <InsertDriveFileOutlinedIcon sx={{fontSize: 'medium', marginBottom: '-0.4vh', marginRight: '1vh'}}/>
                        <strong>Name</strong>
                      </Typography>
                    </Tooltip>
                  </Paper>
                </Grid>
                <Grid item xs={5} sx={{marginLeft: '1vh'}}>
                  <Paper
                    elevation={0}
                    style={{
                      padding: '4px',
                      margin: '0 auto',
                      border: '1px solid #E0E0E0',
                      }}
                  >
                    <Tooltip title="Hash를 기준으로 검색합니다." placement="bottom">
                      <Typography variant="body2" color="text.secondary">
                        <ManageSearchIcon sx={{fontSize: 'medium', marginBottom: '-0.4vh', marginRight: '1vh'}}/>
                        <strong>Hash</strong>
                      </Typography>
                    </Tooltip>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      )}
    </Box>
  );
};

export default SearchBox;
