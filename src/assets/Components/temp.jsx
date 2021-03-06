import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TimeLine from "./TimeLine";
import {Grid} from "@material-ui/core";
import EboardAbout from "./EboardAbout";
import AboutUsDescription from './AboutUs/AboutUsDescription';

const useStyles = makeStyles((theme) => ({
    aboutSection:{
        background: '#113F77',
        padding: '32px 0',
    }
  }));

export default function AboutUs() {

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
