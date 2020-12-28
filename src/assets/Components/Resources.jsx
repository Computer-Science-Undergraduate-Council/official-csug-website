import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import EachResource from './EachResource';

const useStyles = makeStyles((theme) => ({
    aboutSection:{
        padding: '32px 0',
    },
    title: {
      padding: theme.spacing(2),
      textAlign: 'center',
      fontSize: '3rem',
      paddingBottom:'0',
      fontWeight:'bold',
    },
    aboutBody: {
        padding: theme.spacing(2),
        textAlign: 'center',
        paddingTop:'4px',
        fontSize: '1.5rem',
        margin: '0 auto',
        width:'75%',
      }
  }));

export default function Resources() {
    const classes = useStyles();

    return (
        <div className={classes.aboutSection}>
            <div className={classes.title}>Resources</div>
            <div className={classes.aboutBody}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <EachResource title="Internship" link="#"/>
                </Grid>
                <Grid item xs={12}>
                    <EachResource title="Hackathon" link="#"/>
                </Grid>
                <Grid item xs={12}>
                    <EachResource title="Academics" link="#"/>
                </Grid>
                <Grid item xs={12}>
                    <EachResource title="CSUG Tutoring" link="#"/>
                </Grid>
                <Grid item xs={12}>
                    <EachResource title="Projects" link="#"/>
                </Grid>
                <Grid item xs={12}>
                    <EachResource title="Coding Sessions" link="#"/>
                </Grid>
            </Grid>
               
            </div>
        </div>
    )
}
