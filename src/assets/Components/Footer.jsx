import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import logo from "../images/pngFormat.png";

const useStyles = makeStyles((theme) => ({
    aboutSection:{
        background: '#F5DD5A',
        padding: '32px 0',
    },
    imageLogo: {
        height: '180px'
    },
    title: {
        padding: theme.spacing(4),
        letterSpacing:'3px',
        textAlign: 'center',
        color: '#113F77',
        fontSize: '16px',
        fontWeight:'bold',
    },
    details: {
        color: '#113F77',
        letterSpacing:'2px',
        fontSize: '14px',
        textAlign:'center'
    },
    icons:{
        color: '#113F77',

        textAlign: 'center'
    }
  }));

export default function Footer() {

    const classes = useStyles();

    return (
        <div className={classes.aboutSection}>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <div className="float-left p-3 pl-2 ml-1">
                            <img src={logo} alt="logo" className={classes.imageLogo} />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className={classes.title}>JOIN US!</div>
                        <div className={classes.icons}>
                            <a className="btn btn-lg btn-social-icon mr-1 ml-1" style={{color: "#113F77"}} href="https://github.com/SarahZam"><i className="fa fa-github"></i></a>
                            <a className="btn btn-lg btn-social-icon mr-1" style={{color: "#113F77"}} href="https://www.linkedin.com/in/sarah-zaman/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-lg btn-social-icon mr-1" style={{color: "#113F77"}} href="https://www.facebook.com/sarahzamann/"><i className="fa fa-facebook"></i></a>

                        </div>
                    </div>
                    <div className="col-3">
                        <div className={classes.title}>CONTACT US!</div>
                        <div className={classes.details}>
                            8888@gmail.com <br/>
                            712-219-3453 <br/>
                            Address: building<br/>
                            Rochester, New York<br/>
                            zipcode: 14627<br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
