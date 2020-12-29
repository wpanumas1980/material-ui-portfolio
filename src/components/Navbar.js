import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon
} from '@material-ui/core';
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from '@material-ui/icons'
import avatar from '../images/avatar.png'

const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: '#511',
        height: '30rem'
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem:{
        color:'tan'
    }
}));

const menuItems = [
    {
        ListIcon: <Home />,
        ListText: 'Home'
    },
    {
        ListIcon: <AssignmentInd />,
        ListText: 'Resume'
    },
    {
        ListIcon: <Apps />,
        ListText: 'Portfolio'
    },
    {
        ListIcon: <ContactMail />,
        ListText: 'Contacts'
    }
]

export default function Navbar() {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.menuSliderContainer} component='div'>
                <Avatar className={classes.avatar} src={avatar} alt="Russel Crowe" />
                <Divider />
                <List>
                    {menuItems.map((lsItem, key) => (
                        <ListItem button key={key} >
                            <ListItemIcon className={classes.listItem}>
                                {lsItem.ListIcon}
                            </ListItemIcon>
                            <ListItemText className={classes.listItem} primary={lsItem.ListText}/>
                        </ListItem>
                    )
                    )}
                </List>
            </Box>
            <Box component='nav'>
                <AppBar position="static" style={{ background: "#222" }}>
                    <Toolbar>
                        <IconButton>
                            <ArrowBack style={{ color: 'tomato' }} />
                        </IconButton>
                        <Typography variant="h5" style={{ color: 'tan' }}>
                            Portfolio
                    </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}
