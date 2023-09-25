import * as React from 'react';
import { Link } from 'react-router-dom';
import './styles/style.css';
import Grid from '@mui/material/Unstable_Grid2';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';


const Register = () => {
  return (
    <div className='510792' style={style_510792}>
        <Button><Link to="/register1">전체 동의하기</Link></Button>

    </div>
  );
};

const style_510792 = {
  width: '420px',
  height: '592px',
  borderRadius: '40px',
  border: '1px solid black',
  margin: '0px auto',
  padding: '55px 37px',
  backgroundColor: 'White',
  display: 'flex',
  flexDirection: 'column'
}

export default Register;
