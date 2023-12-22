import * as React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Tooltip } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ClassDataGrid from './classDataGrid';
import AssociationDataGrid from './associationDataGrid';

export default function Info({data, name}) {
  return (
    <>
      <Accordion elevation={0}>
        <Tooltip title="Class Name, Methods, Properties의 정보를 제공합니다." followCursor>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant='h6' fontWeight='bold'>Classes</Typography>
          </AccordionSummary>
        </Tooltip>
        <AccordionDetails>
          <ClassDataGrid data={data.Classes} name={name}/>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <Tooltip title="Class Association의 From, To, Type의 정보를 제공합니다." followCursor>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant='h6' fontWeight='bold'>Associations</Typography>
          </AccordionSummary>
        </Tooltip>
        <AccordionDetails>
          <AssociationDataGrid data={data.Associations} name={name}/>
        </AccordionDetails>
      </Accordion>
    </>
  );
}