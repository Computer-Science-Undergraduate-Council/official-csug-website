import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TimeLine from "./TimeLine";
import {Grid} from "@material-ui/core";
import EboardAbout from "./EboardAbout";

const useStyles = makeStyles((theme) => ({
    aboutSection:{
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
    aboutBody: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'white',
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
        <div className={classes.aboutSection}>
            <div className={classes.title}>About Us</div>
            <div className={classes.aboutBody}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aspernatur tenetur eius harum, molestiae omnis vero necessitatibus 
                praesentium, ratione nemo dolores error repellendus voluptates ab corporis 
                excepturi laudantium cupiditate dolorum, magnam dolorem laborum eaque a. Itaque 
                iure maxime nihil fuga debitis? Alias doloremque velit adipisci numquam, nihil voluptas 
                beatae! Consectetur vitae non aspernatur placeat molestias similique atque quidem assumenda 
            </div>

        </div>
    <Grid className="bg-white">
        <TimeLine/>
    </Grid>
            <div className={classes.aboutSection} >
                <EboardAbout/>
            </div>

        </div>
    )
}
