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
                <Typography variant="h4" className={classes.title}>Email Verification</Typography>
                
                <div className={classes.content}>
                    <Typography variant="body1">Please verify your email to complete the registration.</Typography>
                </div>

                <Link to="/">
                    <Button variant="outlined">Complete Registration</Button>
                </Link>
            </Paper>
        </Container>
    );
}

export default RegisterStep3;
