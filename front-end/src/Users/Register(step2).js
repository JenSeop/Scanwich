import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, TextField, Container, Paper, makeStyles } from '@material-ui/core';

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

function RegisterStep2() {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container className={classes.root} maxWidth="md">
            <Paper className={classes.paper}>
                <Typography variant="h4" className={classes.title}>회원 정보 입력</Typography>
                
                <div className={classes.content}>
                    <TextField 
                        label="Name" 
                        variant="outlined" 
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                    />
                    <TextField 
                        label="Email" 
                        variant="outlined" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                    />
                    <TextField 
                        label="Password" 
                        variant="outlined" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                    />
                </div>

                <Link to="/register/step3">
                    <Button fullWidth variant="outlined">Next</Button>
                </Link>
            </Paper>
        </Container>
    );
}

export default RegisterStep2;
