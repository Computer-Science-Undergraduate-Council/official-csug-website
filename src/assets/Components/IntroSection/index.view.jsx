import { Grid,Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import React from 'react'

import logo from '../../images/logo2023.png'


const useStyles = makeStyles((theme) => ({
    background: {
        background: '#212E60',
        paddingBottom: '15%',
        maxWidth: '100%',
    },
    title: {
        paddingLeft: '6rem',
        paddingTop: '20%',
        background: '#212E60',
        color: '#EEE',
        fontSize: '4vw',
        fontWeight:'bold',
    },
    subtext: {
        background: '#212E60',
        color: '#AAA', 
        fontSize: '2vw',
        paddingLeft: '6rem',
    },
    logo:{
        background: '#212E60',
        maxWidth: '90%',
        paddingTop: '5%',
        paddingRight: '1rem',
    }
  }));

const IntroSection = () =>{

    const classes = useStyles();
    return (
        <div>
            <Grid className={classes.background} container>
                <Grid item xs={7}>
                    <Paper className={classes.title}>Computer Science<br />Undergraduate Council</Paper>
                    <div className={classes.subtext}>CSUG is a student organization at the University of Rochester aimed to promote collaboration and a sense of community</div>
                </Grid>
                <Grid item xs={5} style={{padding: '0'}}>
                    <img src={logo} alt="logo" className={classes.logo} />
                </Grid>
            </Grid>
        </div>
    )
}

export default IntroSection;

