import * as React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Paper, Tooltip } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import File from './Details/File';
import CRC32 from './Details/CRC32';
import Android from './Details/Android';
import Signed from './Details/Signed';
import Activities from './Details/Activities/Activities';
import Permissions from './Details/Permissions/Permissions';
import Service from './Details/Service';
import Reciver from './Details/Reciver';
import IntentFilters from './Details/Intent_Filters';
import Provider from './Details/Provider';
import Library from './Details/Library';

export default function Info({data}) {
  console.log(data)
  return (
    <Paper elevation = {0} style={{ padding: '16px', margin: '0 auto', border: '1px solid #E0E0E0', marginBottom: '1vh' }}>
      <Accordion elevation={0} sx={{}}>
        <Tooltip title="파일 기본 정보" followCursor>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant='h6' fontWeight='bold'>FILE</Typography>
          </AccordionSummary>
        </Tooltip>
        <AccordionDetails sx={{overflowX: 'auto'}}>
          <File data={data.file_info} />
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} sx={{}}>
        <Tooltip title="데이터 손상 검사 정보" followCursor>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant='h6' fontWeight='bold'>CRC32</Typography>
          </AccordionSummary>
        </Tooltip>
        <AccordionDetails sx={{overflowX: 'auto'}}>
          <CRC32 data={data.androguard_data.apk.crc32} name={data.file_info.f_name}/>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} sx={{}}>
        <Tooltip title="Android 애플리케이션 기본 정보" followCursor>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant='h6' fontWeight='bold'>Android</Typography>
          </AccordionSummary>
        </Tooltip>
        <AccordionDetails>
          <Android data={data.androguard_data}/>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} sx={{}}>
        <Tooltip title="Android 서명 정보" followCursor>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant='h6' fontWeight='bold'>Signed</Typography>
          </AccordionSummary>
        </Tooltip>
        <AccordionDetails>
          <Signed data={data.androguard_data.signed}/>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} sx={{}}>
        <Tooltip title="Android Activities 정보" followCursor>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant='h6' fontWeight='bold'>Activities</Typography>
          </AccordionSummary>
        </Tooltip>
        <AccordionDetails>
          <Activities data={data.androguard_data.activities} name={data.file_info.f_name}/>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} sx={{}}>
        <Tooltip title="Android 권한 설정 정보" followCursor>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant='h6' fontWeight='bold'>Permissions</Typography>
          </AccordionSummary>
        </Tooltip>
        <AccordionDetails>
          <Permissions data={data.androguard_data.permissions} name={data.file_info.f_name}/>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} sx={{}}>
        <Tooltip title="Android Service 정보" followCursor>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant='h6' fontWeight='bold'>Service</Typography>
          </AccordionSummary>
        </Tooltip>
        <AccordionDetails>
          <Service data={data.androguard_data.services} name={data.file_info.f_name}/>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} sx={{}}>
        <Tooltip title="Android Receivers 정보" followCursor>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant='h6' fontWeight='bold'>Receivers</Typography>
          </AccordionSummary>
        </Tooltip>
        <AccordionDetails>
          <Reciver data={data.androguard_data.services} name={data.file_info.f_name}/>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} sx={{}}>
        <Tooltip title="Android Intent Filters 정보" followCursor>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant='h6' fontWeight='bold'>Intent Filters</Typography>
          </AccordionSummary>
        </Tooltip>
        <AccordionDetails>
          <IntentFilters data={data.androguard_data.services} name={data.file_info.f_name}/>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} sx={{}}>
        <Tooltip title="Android Provider 정보" followCursor>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant='h6' fontWeight='bold'>Provider</Typography>
          </AccordionSummary>
        </Tooltip>
        <AccordionDetails>
          <Provider data={data.androguard_data.services} name={data.file_info.f_name}/>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} sx={{}}>
        <Tooltip title="Android Library 정보" followCursor>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant='h6' fontWeight='bold'>Library</Typography>
          </AccordionSummary>
        </Tooltip>
        <AccordionDetails>
          <Library data={data.androguard_data.services} name={data.file_info.f_name}/>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
}