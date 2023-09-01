import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, TextField, Container, Paper, makeStyles } from '@material-ui/core';
import axios from 'axios';

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
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        try {
            // 이 부분에서 API에 POST 요청을 합니다.
            const response = await axios.post('http://127.0.0.1:8000/users/register', {
                username: username,
                email: email,
                password: password
            });

            // 요청이 성공적으로 처리된 경우, 다음 단계나 다른 로직을 수행할 수 있습니다.
            if (response.status === 201) {
                console.log('Registration Successful!', response.data);
                // TODO: 다른 로직 (예: 다음 페이지로 redirect)
            } else {
                console.error('Registration failed:', response.data);
            }
        } catch (error) {
            console.error('There was an error during the registration:', error);
        }
    };

    return (
        <Container className={classes.root} maxWidth="md">
            <Paper className={classes.paper}>
                <Typography variant="h4" className={classes.title}>회원 정보 입력</Typography>
                
                <div className={classes.content}>
                    <TextField 
                        label="Name" 
                        variant="outlined" 
                        value={username} 
                        onChange={e => setUsername(e.target.value)} 
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

                {/* 버튼을 클릭하면 handleSubmit 함수가 실행됩니다. */}
                <Button fullWidth variant="outlined" onClick={handleSubmit}>
                    Register
                </Button>
            </Paper>
        </Container>
    );
}

export default RegisterStep2;
