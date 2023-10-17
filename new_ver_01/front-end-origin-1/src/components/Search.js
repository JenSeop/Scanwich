import React, { useState } from 'react';
import { TextField, Box, IconButton, Menu, MenuItem, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false); // 검색창 포커스 상태
  const [isSearchClicked, setIsSearchClicked] = useState(false); // 검색창 클릭 상태

  const handleSearch = () => {
    // 검색 로직을 구현할 부분 (예: 검색 결과를 setSearchResults로 업데이트)
    const results = [
      'APK 검색 결과 1',
      'APK 검색 결과 2',
      'APK 검색 결과 3',
    ];
    setSearchResults(results);

    // 검색 완료 후 모달을 닫을 수 있도록 onClose 콜백을 호출
    onClose();
  };

  const handleMenuItemClick = (result) => {
    // 선택한 검색 결과를 처리할 부분
    console.log('선택한 검색 결과:', result);
    // 선택한 결과를 처리한 후 모달을 닫을 수 있도록 onClose 콜백을 호출
    onClose();
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSearchClick = () => {
    setIsSearchFocused(true); // 검색창 클릭 시 포커스 상태 변경
    setIsSearchClicked(true); // 검색창 클릭 상태 변경
  };

  const handleBlur = () => {
    setIsSearchFocused(false); // 검색창에서 포커스가 벗어날 때 포커스 상태 변경
    setIsSearchClicked(false); // 검색창 클릭 상태 변경
  };

  return (
    <Box
      onClick={handleSearchClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        border: `1px solid ${isSearchClicked ? '#2AF57B' : '#28E070'}`, // 클릭 상태에 따라 테두리 색상 변경
        borderRadius: '10px',
        cursor: 'pointer',
        backgroundColor: isSearchFocused ? '#EFEFEF' : 'transparent', // 포커스 상태에 따라 배경색 변경
      }}
    >
      <InputBase
        placeholder="검색하기"
        sx={{
          color: isSearchFocused ? 'Black' : '#2AF57B', // 포커스 상태에 따라 텍스트 색상 변경
          marginLeft: '8px',
          flex: 1,
          '& input': {
            '&::placeholder': {
              color: isSearchFocused ? 'Black' : '#2AF57B', // 포커스 상태에 따라 플레이스홀더 색상 변경
            },
          },
        }}
        inputProps={{
          'aria-label': 'search',
        }}
        onFocus={handleSearchClick}
        onBlur={handleBlur}
      />
      <IconButton type="submit" sx={{ p: '10px', marginLeft: '8px' }} aria-label="search">
        <SearchIcon sx={{ color: isSearchFocused ? '#2AF57B' : '#28E070' }} />{/* 포커스 상태에 따라 아이콘 색상 변경 */}
      </IconButton>
    </Box>
  );
};

export default Search;
