import * as React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Paper, Grid, TextField } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import File from './Information/File';
import CRC32 from './Information/CRC32';
import Android from './Information/Android';
import Signed from './Information/Signed';
import Activities from './Information/Activities/Activities';
import Permissions from './Information/Permissions/Permissions';
import Service from './Information/Service';
import Reciver from './Information/Reciver';
import IntentFilters from './Information/Intent_Filters';
import Provider from './Information/Provider';
import Library from './Information/Library';

export default function Info({data}) {
  console.log(data)
  return (
    <Paper elevation = {0} style={{ padding: '16px', margin: '0 auto', border: '1px solid #E0E0E0', marginBottom: '1vh' }}>
      <Accordion elevation={0} sx={{}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='h6' fontWeight='bold'>FILE</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{overflowX: 'auto'}}>
          <File data={data.file_info} />
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} sx={{}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='h6' fontWeight='bold'>CRC32</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{overflowX: 'auto'}}>
          <CRC32 data={data.androguard_data.apk.crc32} name={data.file_info.f_name}/>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} sx={{}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='h6' fontWeight='bold'>Android</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Android data={data.androguard_data}/>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} sx={{}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='h6' fontWeight='bold'>Signed</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Signed data={data.androguard_data.signed}/>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} sx={{}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='h6' fontWeight='bold'>Activities</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Activities data={data.androguard_data.activities} name={data.file_info.f_name}/>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} sx={{}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='h6' fontWeight='bold'>Permissions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Permissions data={data.androguard_data.permissions} name={data.file_info.f_name}/>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} sx={{}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='h6' fontWeight='bold'>Service</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Service data={data.androguard_data.services} name={data.file_info.f_name}/>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} sx={{}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='h6' fontWeight='bold'>Receivers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Reciver data={data.androguard_data.services} name={data.file_info.f_name}/>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} sx={{}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='h6' fontWeight='bold'>Intent Filters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <IntentFilters data={data.androguard_data.services} name={data.file_info.f_name}/>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} sx={{}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='h6' fontWeight='bold'>Provider</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Provider data={data.androguard_data.services} name={data.file_info.f_name}/>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} sx={{}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='h6' fontWeight='bold'>Library</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Library data={data.androguard_data.services} name={data.file_info.f_name}/>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} sx={{}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='h6' fontWeight='bold'>Dexofuzzy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
}