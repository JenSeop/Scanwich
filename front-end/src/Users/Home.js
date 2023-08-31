import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, TextField, Grid, Box, Container, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.primary,
        width: '320px',
        height: '450px',
        margin: 'auto',
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    title: {
        marginBottom: theme.spacing(3),
    },
    socialButton: {
        marginTop: theme.spacing(-1),
    },
    kakaoButton: {
        backgroundColor: '#FFEB00', // 카카오톡 노란색
        color: '#000', // 텍스트 검은색
        marginRight: theme.spacing(1), // 오른쪽 간격 추가
        '&:hover': {
            backgroundColor: '#FFD600', // 카카오톡 노란색 (hover 상태)
        }
    },
    googleButton: {
        backgroundColor: '#DB4437', // 구글 빨간색
        color: '#fff', // 텍스트 흰색
        '&:hover': {
            backgroundColor: '#C73221', // 구글 빨간색 (hover 상태)
        }
    }
}));

function Home() {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="md">
            <Paper className={classes.paper}>
                <div className={classes.formContainer}>
                    <Typography variant="h3" className={classes.title}>Scanwich</Typography>
                    <Typography variant="body2" className={classes.title}>Since 2023, Bakery.</Typography>
                    <form noValidate autoComplete="off">
                        <Grid container spacing={2} direction="column">
                            <Grid item>
                                <TextField label="ID" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item>
                                <TextField label="Password" type="password" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary" fullWidth>로그인</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" fullWidth className={`${classes.socialButton} ${classes.kakaoButton}`}>KAKAO 로그인</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" fullWidth className={`${classes.socialButton} ${classes.googleButton}`}>GOOGLE 로그인</Button>
                            </Grid>
                            <Grid item>
                                <Link to="/register/step1"><Button variant="text">회원 가입</Button></Link>
                                <Link to="/FindUsers"><Button variant="text">아이디/비밀번호 찾기</Button></Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Paper>
        </Container>
    );
}

export default Home;
