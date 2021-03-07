import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";
import Card from "react-bootstrap/Card";




import eboardmembers from './index.data'

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
        border: '5px solid #113f77',
        boxShadow: '-15px 15px 5px rgba(0, 0, 0, 0.5)',
        margin: '24px auto',
        overflow:'hidden'
    },
    /* Centered text */
    centered: {
        position: 'absolute',
        color:'white',
        top: '75%',
        left: '50%',
        fontWeight:'bold',
        fontSize:'16px',
        transform: 'translate(-50%, -50%)',
        textShadow: '0px 4px 3px rgb(0 0 0 / 40%), 0px 8px 13px rgb(0 0 0 / 10%), 0px 18px 23px rgb(0 0 0 / 10%)',
    },
    // The following is styling for the Eboard section in about us page
    aboutSection:{
        padding: '32px 0',
    },
    secondAvatarSize:{
        width: '200px',
        height:'200px',
        border: '5px solid #113f77',
        boxShadow: '-5px 5px 5px rgba(0, 0, 0, 0.5)'
    },
    secondTitle: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: '#F5DD5A',
        fontSize: '3em',
        paddingBottom:'1.5rem',
        fontWeight:'bold',
    },
    name:{
        color: '#F5DD5A',
        fontSize: '1.5rem',
        paddingBottom:'0.5rem',
        fontWeight:'bold',
        paddingLeft:'1rem'
    },
    subtitle:{
        color: 'white',
        fontSize: '1.2rem',
        paddingBottom:'0.5rem',
        fontWeight:'bold',
        paddingLeft:'1rem'
    }
  }));


const EboardHomePage = () => {  
    const classes = useStyles();
    const eboard = (eboard) => {
        return eboard.map(eboardmem => {
            return (  
            <div className="col-lg-4 d-flex container">
                <Avatar alt={eboardmem.name} src={eboardmem.img} className={classes.avatarSize}>
                </Avatar>
                <div className={classes.centered}>{eboardmem.name} <br />{eboardmem.title}</div>
            </div>)
        })
    }
    return (
        <div className={classes.eboardSection}>
            <div className={classes.title}>E-Board</div>
                <div className="container text-center">
                    <div className="row">
                        {eboard(eboardmembers)}
                    </div>
                </div>
        </div>
    )
}


const EboardAboutUs = () => {
    const classes = useStyles();

    const eboard = (eboard) => {
        return eboard.map(eboardmem => {
            return  <div className="col-lg-6 d-flex p-3">
                <Avatar alt={eboardmem.name} src={eboardmem.img} className={classes.secondAvatarSize}/>
                <Card className="bg-transparent border-0 text-left pl-1">
                     <Card.Title className={classes.name}>{eboardmem.name}</Card.Title>
                    <Card.Subtitle className={classes.subtitle}>{eboardmem.title}</Card.Subtitle>
                    <Card.Subtitle>
                        <a className="btn btn-lg btn-social-icon mr-1 ml-1" style={{color: '#F5DD5A'}} href={eboardmem.gitlink}><i className="fa fa-github"></i></a>
                        <a className="btn btn-lg btn-social-icon mr-1" style={{color: '#F5DD5A'}} href={eboardmem.linkedInlink}><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-lg btn-social-icon mr-1" style={{color: '#F5DD5A'}} href={eboardmem.email}><i className="fa fa-envelope-o"></i></a>
                    </Card.Subtitle>
                    <Card.Body className="text-white">
                        {eboardmem.description}
                    </Card.Body>
                </Card>
            </div>
        })
    }

    return (
        <div className={classes.eboardSection}>
            <div className={classes.secondTitle}>E-Board</div>
            <div className="container text-center">
                <div className="row">
                    {eboard(eboardmembers)}
                </div>
            </div>
        </div>
    )
}
export {EboardHomePage};
export {EboardAboutUs};

