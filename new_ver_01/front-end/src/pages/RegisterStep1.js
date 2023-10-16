import React, { useState } from 'react';
import { Button, Checkbox, Container, FormControlLabel, Typography, Box, styled } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TermsAccordion from '../components/TermsAccordion';
import { Link } from 'react-router-dom';

// 추가한 CSS 스타일링
const accordionItemStyle = {
  width: '100%', // 화면 가로폭을 100%로 설정합니다.
  marginBottom: '16px', // 아코디언 아이템 사이의 간격을 조절합니다.
};

function RegisterStep1() {
  const [agreed, setAgreed] = useState(false);
  const termsOfServiceContent = `...`; // 약관 내용을 여기에 넣으세요.

  const handleAgreementToggle = () => {
    setAgreed(!agreed);
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="80vh" // 화면 높이의 100%로 설정하여 화면 중앙에 내용을 배치합니다.
      >
        <Typography variant="h4" align="center" sx={{ marginTop: '16px', marginBottom: '16px' }}>
          Agreements
        </Typography>
        <Typography variant="body1" paragraph sx={{ marginBottom: '20px' }}>
          다음의 약관 내용에 동의하시면 아래의 버튼을 클릭해주세요.
        </Typography>

        {/* 서비스 약관 아코디언 */}
        <div style={accordionItemStyle}>
          <TermsAccordion title="서비스 약관" content={termsOfServiceContent} />
        </div>

        {/* 개인정보 보호 정책 아코디언 */}
        <div style={accordionItemStyle}>
          <TermsAccordion title="개인정보 보호 정책" content={termsOfServiceContent} />
        </div>

        <FormControlLabel
          control={
            <Checkbox
              checked={agreed}
              onChange={handleAgreementToggle}
              icon={<CheckCircleIcon />}
              checkedIcon={<CheckCircleIcon color="1" />}
            />
          }
          label="모든 약관에 동의합니다."
        />

        <Button
          variant="contained"
          color="1"
          fullWidth
          disabled={!agreed}
          component={Link}
          to="/register/step2"
        >
          동의함
        </Button>
      </Box>
    </Container>
  );
}

export default RegisterStep1;
