import React from 'react'
import Container from '@material-ui/core/Container';
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, makeStyles, Paper, Typography } from '@material-ui/core';
import CakeIcon from '@material-ui/icons/Cake';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import mypic from '../images/mypic.jpg';
const useStyles = makeStyles({
    mainContainer: {
        marginTop: '20px',
        // backgroundColor: '#00695c'
    },
    about: {
        marginTop: '20px',
        color: '#4dd0e1'
    },
    detail: {
        color: '#b2ebf2',
        margin:'10px',
        paddingLeft: '50px'
    },
    paper:{
        textAlign:'center',
        fontSize:'50px',
        color:'#ffee58',
        background:'none'
    }
})

const myData = [
    {
        icon: <CakeIcon style={{ color: '#4dd0e1' }} />,
        title: "Birthday:",
        subTitle: '21 Jun 1980'
    },
    {
        icon: <CastForEducationIcon style={{ color: '#4dd0e1' }} />,
        title: "Degree:",
        subTitle: 'Industrial Engineering'
    },
    {
        icon: <PhoneIphoneIcon style={{ color: '#4dd0e1' }} />,
        title: "Phone:",
        subTitle: '081 615 4051'
    },
    {
        icon: <EmailIcon style={{ color: '#4dd0e1' }} />,
        title: "email:",
        subTitle: 'wpanumas@gmail.com'
    },
    {
        icon: <GitHubIcon style={{ color: '#4dd0e1' }} />,
        title: "Github:",
        subTitle: 'https://github.com/wpanumas1980'
    }
]
export default function About() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth="md">
                <Box component="div" className={classes.mainContainer}>
                    <Typography variant='h3' className={classes.about}>
                        About
                    </Typography>
                    <Box component='div' style={{width:'100px', borderBottom:'3px solid #4dd0e1'}}/>
                    <Typography variant='body1' className={classes.detail}>
                        Work as IoT and Robotics Engineer, that fulfil my interested in electronic and programming industry, which one day I can create my own home automation.
                    </Typography>
                    <Grid container justify={'center'} spacing={1} style={{ padding: '20px' }}>
                        <Grid item xs={12} lg={4} style={{ textAlign: 'center' }}>
                            <img
                                width='250px'
                                src={mypic}
                                alt='mypicture'
                            />
                        </Grid>
                        <Grid item xs={12} lg={8}>
                            <List component="nav" aria-label="my detail">
                                {myData.map((data, idx) =>
                                    <ListItem key={idx}>
                                        <ListItemIcon className={classes.icon}>
                                            {data.icon}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={
                                                <span style={{ color: '#b2ebf2', fontWeight: 700 }}>{data.title}
                                                    <span style={{ color: '#b2ebf2', fontWeight: 1, paddingLeft: '10px' }}>
                                                        {data.subTitle}
                                                    </span>
                                                </span>} />
                                    </ListItem>
                                )}
                            </List>
                            <Typography variant='h4' style={{color:'#ffca28'}}>
                                Skill
                            </Typography>
                            <Box component='div' style={{width:'50px', borderBottom:'2px solid #ffca28'}}/>
                            <Grid container spacing={2}>
                                <Grid item xs={3}>
                                    <Paper className={classes.paper} elevation={0}>
                                    <i className="fab fa-react"></i>
                                    </Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper className={classes.paper} elevation={0}>
                                    <i className="fab fa-html5"></i>
                                    </Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper className={classes.paper} elevation={0}>
                                    <i className="fab fa-css3-alt"></i>
                                    </Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper className={classes.paper} elevation={0}>
                                    <i className="fab fa-js"></i>
                                    </Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper className={classes.paper} elevation={0}>
                                    <i className="fab fa-node"></i>
                                    </Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper className={classes.paper} elevation={0}>
                                    <i className="fas fa-database"></i>
                                    </Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper className={classes.paper} elevation={0}>
                                    <i className="fab fa-python"></i>
                                    </Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper className={classes.paper} elevation={0}>
                                    <i className="fab fa-raspberry-pi"></i>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    )
}
