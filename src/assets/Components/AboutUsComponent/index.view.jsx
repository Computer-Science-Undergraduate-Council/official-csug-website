import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import {Grid} from "@material-ui/core";
import {NavLink} from "react-router-dom";


import TimeLine from "../TimeLine";
import {EboardAboutUs} from "../EBoardComponent";
import AboutUsDescription from './index.data';

const useStyles = makeStyles((theme) => ({
    aboutSection:{
        background: '#113F77',
        padding: '32px 0',
    },
    // the following is for "Who we are" in Homepage
    title: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'white',
        fontSize: '3rem',
        paddingBottom:'0',
        fontWeight:'bold',
    },
    aboutBody: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'white',
        paddingTop:'4px',
        fontSize: '1.5rem',
        margin: '0 auto',
        width:'75%',
    },
    navLink:{
        color:'white',
    }
  }));

const AboutUsComponent = () =>{

    const classes = useStyles();

    return (
        <div>
            <AboutUsDescription/>
            <div className={classes.aboutSection} >
                <EboardAboutUs/>
            </div>
            <Grid className="bg-white">
                <TimeLine/>
            </Grid>
        </div>
    )
}

const AboutUsHomeComponent = () =>{
    const classes = useStyles();
    return (
        <div>
            <div className={classes.aboutSection}>
                <div className={classes.title}>Who We Are</div>
                <div className={classes.aboutBody}>
                    We are the Computer Science Undergraduate Council, 
                    a club at the University of Rochester that strives to make CS students feel
                    at home in the CS community. We offer a bunch of services to our students including
                    a tutoring service for CS courses, interview prep workshops, info sessions on industry
                    and grad school, and so on. We also organize the biggest hackathon at UoR, DandyHacks.

                    <br/>
                    <NavLink className={classes.navLink} to="/about">Learn More About Us</NavLink>
                </div>

            </div>

        </div>
    )
}


export default AboutUsComponent;
export {AboutUsHomeComponent};

