import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Container, Paper, makeStyles } from '@material-ui/core';

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
    }
}));

function RegisterStep3() {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="md">
            <Paper className={classes.paper}>
                <Typography variant="h4" className={classes.title}>회원 가입 완료</Typography>
                
                <div className={classes.content}>
                    <Typography variant="body1">이메일 주소로 인증 링크가 발송되었습니다.</Typography>
                    <Typography variant="body1">인증 완료 후 로그인이 가능합니다.</Typography>
                </div>

                <Link to="/">
                    <Button fullWidth variant="outlined">메인 페이지 이동</Button>
                </Link>
            </Paper>
        </Container>
    );
}

export default RegisterStep3;
