import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Avatar,
    Grid,
    Box,
} from '@material-ui/core';
import avatar from '../images/avatar.png'
import Typed from 'react-typed';

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    tilte: {
        color: 'tomato',
    },
    subTilte: {
        color: 'tan',
        marginBottom: '3rem'
    },
    typedContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '100vw',
        textAlign: 'center',
        zIndex: 1
    }
}))
export default function Header() {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer} >
            <Grid container justify='center'>
                <Grid item>
                    <Avatar className={classes.avatar} src={avatar} alt='Rusel Crowe' />
                </Grid>
            </Grid>
            <Typography className={classes.tilte} variant='h4'>
                <Typed
                    strings={["Panumas Saewong"]}
                    typeSpeed={60}
                />
            </Typography>
            <Typography className={classes.subTilte} variant='h4'>
                <Typed
                    strings={["Web Design", "Web Development", "MERN Stack"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </Typography>
            <br />

        </Box>
    )
}
