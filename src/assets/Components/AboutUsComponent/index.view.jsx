import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import {Grid} from "@material-ui/core";

import TimeLine from "../TimeLine";
import EboardAbout from "../EboardAbout";
import AboutUsDescription from './index.data';

const useStyles = makeStyles((theme) => ({
    aboutSection:{
        background: '#113F77',
        padding: '32px 0',
    }
  }));

const AboutUsComponent = () =>{

    const classes = useStyles();

    return (
        <div>
            <AboutUsDescription/>
            <div className={classes.aboutSection} >
                <EboardAbout/>
            </div>
            <Grid className="bg-white">
                <TimeLine/>
            </Grid>
        </div>
    )
}


export default AboutUsComponent;

