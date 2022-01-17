import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import logo from "../../images/logo.png";

const useStyles = makeStyles((theme) => ({
    //todo: footer needs to stick to the bottom
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

const Footer = () => {

    const classes = useStyles();

    return (
        <div className={classes.aboutSection}>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-5">
                        <div className="float-left p-3 pl-2 ml-1">
                            <img src={logo} alt="logo" className={classes.imageLogo} />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className={classes.title}>JOIN US!</div>
                        <div className={classes.icons}>
                            <a className="btn btn-lg btn-social-icon mr-1 ml-1" style={{color: "#113F77"}} href="https://github.com/Computer-Science-Undergraduate-Council"><i className="fa fa-github"></i></a>
                            <a className="btn btn-lg btn-social-icon mr-1" style={{color: "#113F77"}} href="https://www.instagram.com/ur.csug/"><i className="fa fa-instagram"></i></a>
                            <a className="btn btn-lg btn-social-icon mr-1" style={{color: "#113F77"}} href="https://www.facebook.com/urcsug"><i className="fa fa-facebook"></i></a>

                        </div>
                    </div>
                    <div className="col-3">
                        <div className={classes.title}>CONTACT US!</div>
                        <div className={classes.details}>
                        Email: csug@googlegroups.com<br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer;