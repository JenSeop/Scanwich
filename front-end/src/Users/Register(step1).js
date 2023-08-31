import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Checkbox, FormControlLabel, Container, Paper, makeStyles } from '@material-ui/core';

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

function RegisterStep1() {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="md">
            <Paper className={classes.paper}>
                <Typography variant="h4" className={classes.title}>Terms and Conditions</Typography>
                
                <div className={classes.content}>
                    Lorem ipsum dolor sit amet...
                    <FormControlLabel
                        control={<Checkbox name="acceptTerms" />}
                        label="I accept the terms and conditions"
                    />
                </div>

                <Link to="/register/step2">
                    <Button variant="outlined">Next</Button>
                </Link>
            </Paper>
        </Container>
    );
}

export default RegisterStep1;
