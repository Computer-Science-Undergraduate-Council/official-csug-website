import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';



import EachEboardMember from './EachEboardMember';

const useStyles = makeStyles((theme) => ({
    eboardSection:{
        background: '#113F77',
        padding: '32px 0',
    },
    title: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: 'white',
      fontSize: '3rem',
      paddingBottom:'0',
      fontWeight:'bold',
    },
    eboardBody: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'white',
        paddingTop:'4px',
        fontSize: '1.5rem',
        margin: '0 auto',
        width:'75%',
    },
    avatarSize:{
        width: '256px',
        height:'256px',
    }
  }));

export default function Eboard() {

    const classes = useStyles();

    return (
        <div className={classes.eboardSection}>
            <div className={classes.title}>E-Board</div>
            <div className={classes.eboardBody}>
            <Grid container spacing={0} alignItems='center'>
                <Grid item xs={4}>
                    <EachEboardMember name= "Aman Shrestha" image="Aman"/>
                </Grid>
                <Grid item xs={4}>
                    <EachEboardMember name= "Anh (Jessie) Nguyen" image="Anh"/>
                </Grid>
                <Grid item xs={4}>
                    <EachEboardMember name= "Jiahao (Jerry) Liu" image="Jerry"/>
                </Grid>
                <Grid item xs={4}>
                    <EachEboardMember name= "Minghui (Emily) Zheng" image="Minghui"/>
                </Grid>
                <Grid item xs={4}>
                    <EachEboardMember name= "Tasheem Brown" image="Tash"/>
                </Grid>
                <Grid item xs={4}>
                    <EachEboardMember name= "Sungwoon (Ashley) Yoon" image="Ashley"/>
                </Grid>
               
            </Grid>
                
            </div>
        </div>
    )
}
