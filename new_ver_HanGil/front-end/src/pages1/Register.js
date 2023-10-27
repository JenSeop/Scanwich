import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { Box, Button, CssBaseline, Typography, SwipeableDrawer } from '@mui/material';
import '../index.css';
import axios from 'axios';
import Register1 from './Register1';
import setCookie from '../utils1/setCookie';


/* Accordion */
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider } from '@mui/material';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
/* --------- */

const drawerBleeding = 56;
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#373531' : grey[800], // 51result부분
}));
const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900], // 맨위 손잡이
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));








const Register = (props) => {
  const [bulb, setBulb] = React.useState(1); // Register1 라우팅
  const [termsText, setTermsText] = React.useState('');

/* Accordion */
  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
/* --------- */


  React.useEffect(() => {

    setCookie('prevPage', '/register/step1', { expires: 365 });

    axios.get('https://raw.githubusercontent.com/scriptfetish/scriptfetish.github.io/main/terms.txt')
    .then(response => setTermsText(response.data))
    .catch(error => console.error('Error:', error));

    // 렌더링 후에 실행
    document.querySelector('.App').style.backgroundColor = '#373531';
    const rootElement = document.getElementById('root');
    if (rootElement) rootElement.style.boxSizing = 'content-box'

    const timer = setTimeout(() => {
      setOpen(true);
    }, 10);
    return () => clearTimeout(timer);

  }, []); // 빈 배열= 의존성 배열에 state, props가 있다면 변경될 때마다 useEffect가 실행



  const { window } = props;
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;


  return (
<>
  {bulb && (
    <div className='510792' style={style_510792}>
      {/* <Button variant='outlined' onClick={() => setBulb(false)}>전체 동의하기</Button> */}

      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(40% - ${drawerBleeding}px)`,
            overflow: 'visible',
            width: '420px',
            margin: '0px auto'
          },
        }}
      />
      <Box sx={{ textAlign: 'center', pt: 1 }}> 
        <Button onClick={toggleDrawer(true)}>약관동의 열기</Button>
      </Box>
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: false,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8, // 창 모서리
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: 'text.secondary' }}>
            <span className='Text1'>약관동의요</span>
          </Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%', // 안쪽 회색박스
            overflow: 'auto',
          }}
        >
          {/* <Skeleton variant="rectangular" height="100%" /> */}
          
{/* Accordion  */}
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>개인정보 #1</Typography>
          <Checkbox {...label} defaultChecked style={{
            position: 'absolute', right: '10px', top: '4px'
          }}/>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {termsText}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>개인정보 #2</Typography>
          <Checkbox {...label} style={{
            position: 'absolute', right: '10px', top: '4px'
          }}/>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>개인정보 #3</Typography>
          <Checkbox {...label} style={{
            position: 'absolute', right: '10px', top: '4px'
          }}/>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
{/* --------  */}
<ThemeProvider theme={customUnderline}>
    <Button onClick={() => setBulb(false)} variant="outlined" style={{
      marginTop: '40px',
      width: '386px',
      borderRadius: '1px',
      fontSize: '20px',
    }}>
      전체 동의하기
    </Button>
  </ThemeProvider>

        </StyledBox>
      </SwipeableDrawer>
      </div>






)}
{! bulb && <Register1 />}
 </>
  );
};



export default Register;
Register.propTypes = {
  window: PropTypes.func,
};

const style_510792 = {
  width: '420px',
  height: '592px',
  borderRadius: '40px',
  border: '1px solid black',
  margin: '180px auto',
  padding: '55px 37px',
  // backgroundColor: 'White',
  display: 'flex',
  flexDirection: 'column',
  // position: 'absolute',
  // top: '180px',
  // left: '200px',
  justifyContent: 'center',

}

const customUnderline = createTheme({
  palette: {
    primary: {
      main: '#2AF57B',
    },
    secondary: {
      main: '#1dab56',
    },
    error: {
      main: '#2AF57B',
      light: 'rgb(84, 247, 149)',
      dark: 'rgb(29, 171, 86)'
    },
    text: {
      primary: '#fff5dc',
    },
  },
});