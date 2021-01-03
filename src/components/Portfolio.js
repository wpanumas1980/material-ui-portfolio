import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Navbar from './Navbar';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import project1 from '../images/html-css-javascript-lg.jpg'
import project2 from '../images/javascript-fullstack.jpg'
import project3 from '../images/mern-stack.jpg'
import project4 from '../images/react-redux.jpg'

const useStyles = makeStyles({
    mainContainer: {
        background: '#233',
        height: '100%',
    },
    cardContainer: {
        maxWidth: 345,
        margin: '5rem auto'
    }
})

const portData = [
    {
        image: project1,
        projectName: 'Project 1',
        projectDetail: 'lorem sdffwef sdg sfdsv dsasfsdf sdfsdfs lorem sdffwef sdg sfdsv dsasfsdf sdfsdfslorem sdffwef sdg sfdsv dsasfsdf sdfsdfslorem sdffwef sdg sfdsv dsasfsdf sdfsdfs '
    },
    {
        image: project2,
        projectName: 'Project 2',
        projectDetail: 'lorem sdffwef sdg sfdsv dsasfsdf sdfsdfs lorem sdffwef sdg sfdsv dsasfsdf sdfsdfslorem sdffwef sdg sfdsv dsasfsdf sdfsdfslorem sdffwef sdg sfdsv dsasfsdf sdfsdfs '
    },
    {
        image: project3,
        projectName: 'Project 3',
        projectDetail: 'lorem sdffwef sdg sfdsv dsasfsdf sdfsdfs lorem sdffwef sdg sfdsv dsasfsdf sdfsdfslorem sdffwef sdg sfdsv dsasfsdf sdfsdfslorem sdffwef sdg sfdsv dsasfsdf sdfsdfs '
    },
    {
        image: project4,
        projectName: 'Project 4',
        projectDetail: 'lorem sdffwef sdg sfdsv dsasfsdf sdfsdfs lorem sdffwef sdg sfdsv dsasfsdf sdfsdfslorem sdffwef sdg sfdsv dsasfsdf sdfsdfslorem sdffwef sdg sfdsv dsasfsdf sdfsdfs '
    }
]
export default function Portfolio() {
    const classes = useStyles();
    return (
                < Box component='div' className={classes.mainContainer}>
            <Navbar />
            <Grid container justify='center' spacing={3}>
                {portData.map((data, idx) =>
                    <Grid item xs={12} sm={6} md={4} key={idx}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                    component='img'
                                    alt='Project 1'
                                    height='140'
                                    image={data.image}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant='h5'>
                                        {data.projectName}
                                    </Typography>
                                    <Typography variant='body2' color='textSecondary' component='p'>
                                        {data.projectDetail}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                                <CardActions>
                                    <Button size='small' color='primary'>
                                        Share
                                </Button>
                                    <Button size='small' color='primary'>
                                        Live Demo
                                </Button>
                                </CardActions>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </ Box>
       
    )
}
