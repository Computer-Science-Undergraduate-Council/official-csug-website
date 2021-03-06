import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TimeLine from "./TimeLine";
import {Grid} from "@material-ui/core";
import EboardAbout from "./EboardAbout";

const useStyles = makeStyles((theme) => ({
    aboutHeader:{
        background: 'white',
        padding: '32px 0',
    },
    aboutSection:{
        background: '#113F77',
        padding: '32px 0',
    },
    title: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color:'black',
      fontSize: '3rem',
      paddingBottom:'0',
      fontWeight:'bold',
    },
    aboutBody: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color:'black',
        paddingTop:'4px',
        fontSize: '1.5rem',
        margin: '0 auto',
        width:'75%',
      }
  }));

export default function AboutUs() {

    const classes = useStyles();

    return (
        <div>
            <div className={classes.aboutHeader}>
                <div className={classes.title}>About Us</div>
                <div className={classes.aboutBody}>
                    The Computer Science Undergraduate Council (CSUG) is a community of students at the University of Rochester 
                    who are interested in collaborating to make our learning experience ever better. 
                    We organize hackathons, provide tutoring, organize workshops on coding and also organize info sessions on 
                    industry, internship, grad school and so on. We represent our student body and bring the most
                    pressing issues to the department to bridge the gap between student and faculty.
                    We also collect lists of resources to be used by and contributed to by our CS community.
                </div>

            </div>
            <div className={classes.aboutSection} >
                <EboardAbout/>
            </div>
            <Grid className="bg-white">
                <TimeLine/>
            </Grid>

        </div>
    )
}
