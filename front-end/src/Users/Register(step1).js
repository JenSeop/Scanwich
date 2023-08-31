import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Paper, makeStyles, Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.primary,
        width: '320px',
        height: '450px',
    },
    content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    accordionDetails: {
        maxHeight: '200px',  // 원하는 높이를 설정하세요.
        overflowY: 'auto',
    },
}));

function RegisterStep1() {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="md">
            <Paper className={classes.paper}>
                <Typography variant="h4" className={classes.title}>약관 동의</Typography>
                
                <div className={classes.content}>
                    <Accordion style={{ width: '100%' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>이용약관 동의</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.accordionDetails}>
                            <Typography>
                                &lt; Scanwich &gt;('https://www.scanwich.co.kr'이하 'Scanwich')은(는) 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
                                <br /><br />
                                ○ 이 개인정보처리방침은 2023년 8월 30부터 적용됩니다.
                                <br /><br />
                                제1조(개인정보의 처리 목적)
                                <br /><br />
                                &lt; Scanwich &gt;('https://www.scanwich.co.kr'이하 'Scanwich')은(는) 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                                <br /><br />
                                1. 홈페이지 회원가입 및 관리
                                <br />
                                회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지 목적으로 개인정보를 처리합니다.
                                <br /><br />
                                2. 민원사무 처리
                                <br />
                                민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 목적으로 개인정보를 처리합니다.
                                <br /><br />
                                3. 재화 또는 서비스 제공
                                <br />
                                서비스 제공, 콘텐츠 제공, 본인인증을 목적으로 개인정보를 처리합니다.
                                <br /><br />
                                4. 마케팅 및 광고에의 활용
                                <br />
                                신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공 , 서비스의 유효성 확인, 접속빈도 파악 또는 회원의 서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>

                <Link to="/register/step2">
                    <Button fullWidth variant="outlined">전체 동의하기</Button>
                </Link>
            </Paper>
        </Container>
    );
}

export default RegisterStep1;
