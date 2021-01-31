import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import CardContent from "@material-ui/core/CardContent";
import {eboardmembers} from "./Eboard";
import Avatar from "@material-ui/core/Avatar";
import Card from "react-bootstrap/Card";

const useStyles = makeStyles((theme) => ({
    aboutSection:{
        padding: '32px 0',
    },
    avatarSize:{
        width: '200px',
        height:'200px',
        border: '5px solid #113f77',
        boxShadow: '-5px 5px 5px rgba(0, 0, 0, 0.5)'
    },
    title: {
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

export default function HomeResources(props) {
    const classes = useStyles();

    const eboard = (eboard) => {
        return eboard.map(eboardmem => {
            return  <div className="col-lg-6 d-flex p-3">

                <Avatar alt={eboardmem.name} src={eboardmem.img} className={classes.avatarSize}/>
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
            <div className={classes.title}>E-Board</div>
            <div className="container text-center">
                <div className="row">
                    {eboard(eboardmembers)}
                </div>
            </div>
        </div>
    )
}