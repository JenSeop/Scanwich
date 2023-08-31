import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Paper, Typography, makeStyles } from '@material-ui/core';

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
        height: '200px',
    },
    content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

function LoginSuccess() {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="md">
            <Paper className={classes.paper}>
                <Typography variant="h4" className={classes.title}>로그인 성공!</Typography>
                
                <div className={classes.content}>
                    <Typography variant="h6">환영합니다!</Typography>
                </div>

                <Link to="../">
                  <Button 
                      fullWidth 
                      variant="outlined"
                  >
                      로그아웃
                  </Button>
                </Link>
            </Paper>
        </Container>
    );
}

export default LoginSuccess;
