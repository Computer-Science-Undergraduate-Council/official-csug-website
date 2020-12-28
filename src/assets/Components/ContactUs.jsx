import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    aboutSection:{
        background: '#F5DD5A',
        padding: '32px 0',
    },
    title: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: '#113f77',
      fontSize: '3rem',
      paddingBottom:'0',
      fontWeight:'bold',
    },
    aboutBody: {
        padding: theme.spacing(2),
        textAlign: 'right',
        color: '#113f77',
        paddingTop:'4px',
        fontSize: '1.5rem',
      }
  }));

export default function ContactUs() {

    const classes = useStyles();

    return (
        <div className={classes.aboutSection}>
            <div className={classes.title}>Contact Us</div>
            <div className={classes.aboutBody}>
                Phone: XXX-XXXX<br/>
                Email: xxxx@rochester.edu<br/>
                Address: building<br/>
                Rochester, New York<br/>
                zipcode: 14627<br/>
            </div>
        </div>
    )
}
