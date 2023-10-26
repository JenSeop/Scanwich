import React from 'react';
import { Box, Step, StepLabel, Stepper } from '@mui/material';
import { AccountCircle, MailOutline, CheckCircleOutline } from '@mui/icons-material';

const steps = [
  { label: '약관 동의', icon: <AccountCircle /> },
  { label: '회원 정보', icon: <MailOutline /> },
  { label: '가입 완료', icon: <CheckCircleOutline /> },
];

function RegisterStep({ activeStep }) {
  return (
    <Box display="flex" justifyContent="center">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              icon={step.icon}
              style={{ color: index === activeStep ? '#00FF7F' : 'inherit' }} // 스텝의 활성 및 비활성 시 색상 변경
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default RegisterStep;
