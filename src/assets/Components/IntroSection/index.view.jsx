import { Grid,Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import React from 'react'

import logo from '../../images/pngFormat.png'


const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: 'black',
      fontSize: '3rem',
      fontWeight:'bold',

    },
    bigLogo:{
        width: '15%',
        height:'15%',
        margin: '0 auto',
        paddingTop: '5%',
    }
  }));

const IntroSection = () =>{

    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                <Paper className={classes.paper}><img src={logo} alt="logo" className={classes.bigLogo} /></Paper>
                </Grid>
                <Grid item xs={12}>
                <Paper className={classes.paper}>COMPUTER SCIENCE UNDERGRADUATE COUNCIL</Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default IntroSection;

