import React from 'react';
import { Button, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const CustomButton = styled(Button)(({ theme, buttonType }) => ({
  borderColor: buttonType === 'contained' ? '#00FF7F' : '#373531', // 테두리 색상 설정
  color: buttonType === 'contained' ? '#373531' : '#373531', // 텍스트 색상 설정
  backgroundColor: buttonType === 'contained' ? '#00FF7F' : 'transparent', // 배경 색상 설정
  '&:hover': {
    borderColor: buttonType === 'contained' ? '#00CC66' : '#373531', // 호버 상태일 때의 테두리 색상 설정
    color: buttonType === 'contained' ? '#373531' : '#00CC66', // 호버 상태일 때의 텍스트 색상 설정
    backgroundColor: buttonType === 'contained' ? '#00CC66' : 'transparent', // 호버 상태일 때의 배경 색상 설정
  },
}));

function CustomLinkButton({ to, text, buttonType }) {
  return (
    <CustomButton
      variant={buttonType === 'contained' ? 'contained' : 'outlined'}
      component={Link}
      to={to}
      buttonType={buttonType}
    >
      {text}
    </CustomButton>
  );
}

export default CustomLinkButton;
