import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Grid, Box, Container, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paper: {
        width: '320px',
        height: '450px',
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
    },
    buttons: {
        marginTop: theme.spacing(2),
    },
    content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

function FindUsers() {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="md">
            <Paper className={classes.paper} elevation={3}>
                <Box className={classes.formContainer} p={4}>
                    <Typography variant="h4" className={classes.title} align="center">아이디/비밀번호 찾기</Typography>
                    <Grid container spacing={2} direction="column" alignItems="center">
                        <Grid item xs={12}>
                            <Link to="/id_retrieve">
                                <Button variant="outlined" color="primary" fullWidth>아이디 찾기</Button>
                            </Link>
                        </Grid>
                        <Grid item xs={12}>
                            <Link to="/password_retrieve">
                                <Button variant="outlined" color="secondary" fullWidth>비밀번호 찾기</Button>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} direction="column" alignItems="center">
                      <Link to="../">
                        <Button variant="outlined">Back</Button>
                      </Link>
                    </Grid>
                </Box>
            </Paper>
        </Container>
    );
}

export default FindUsers;
