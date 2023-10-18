import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '../components/TabPanel'; // TabPanel 컴포넌트를 불러옵니다.
import Container from '@mui/material/Container'; // Container 컴포넌트를 불러옵니다.

export default function CenteredTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="md">
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        sx={{
          '& .MuiTabs-indicator': { backgroundColor: '#373531' },
          '& .Mui-selected': { color: '#373531 !important' },
        }}
      >
        <Tab label="전체 결과" sx={{ color: '#373531' }} />
        <Tab label="상세 결과" sx={{ color: '#373531' }} />
      </Tabs>
      <TabPanel value={value} index={0}>
      </TabPanel>
      <TabPanel value={value} index={1}>
      </TabPanel>
    </Container>
  );
}
