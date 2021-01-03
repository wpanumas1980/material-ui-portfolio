import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send'

const useStyles = makeStyles(theme => ({
    form:{
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%, -50%)'
    }
}))
const InputField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'tomato'
        },
        '& label': {
            color: 'tan'
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'tan'
            },
            '&:hover fieldset': {
                borderColor: 'tan'
            },
            '&.Mui-focused fieldset': {
                borderColor: 'tan'
            }
        }
    }
})(TextField);
export default function Contact() {
    const classes = useStyles();
    return (
        <Box component='div'>
            <Grid container justify='center'>
                <Box component='form' className={classes.form}>
                    <Typography variant='h5'>
                        hire or contact me...
                    </Typography>
                    <InputField
                        fullWidth
                        label='Name'
                        variant='outlined'
                        margin='dense'
                        size='medium'
                        inputProps={{ style: { color: 'white' } }}
                    />
                    <br />
                    <InputField
                        fullWidth
                        label='Email'
                        variant='outlined'
                        margin='dense'
                        size='medium'
                        inputProps={{ style: { color: 'white' } }}
                    />
                    <br />
                    <InputField
                        fullWidth
                        label='Company name'
                        variant='outlined'
                        margin='dense'
                        size='medium'
                        inputProps={{ style: { color: 'white' } }}
                    />
                    <br/>
                    <Button variant='outlined' fullWidth endIcon={<SendIcon/>}>

                        contact me
                    </Button>
                </Box>
            </Grid>
        </Box>
    )
}