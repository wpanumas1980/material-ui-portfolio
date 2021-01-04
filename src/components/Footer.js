import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core'
import { Facebook, Instagram, Twitter } from '@material-ui/icons'
import React from 'react'

const useStyles = makeStyles({
    root: {
        '& .MuiBottomNavigationAction-root': {
            minWidth: 0,
            maxWidth: 250,
        },
        '& .MuiSvgIcon-root':{
            fill:'tan',
            '&:hover':{
                fill: 'tomato',
                fontSize:'1.8rem'
            }
        }
    }
})
export default function Footer() {
    const classes = useStyles();
    return (
        <BottomNavigation width='auto' style={{ background: '#222' }}>
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<Facebook />}
            />
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<Twitter />}
            />
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<Instagram />}
            />
        </BottomNavigation>
    )
}
