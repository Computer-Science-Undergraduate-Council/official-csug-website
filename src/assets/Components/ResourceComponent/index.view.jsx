import React from 'react'
import resources from './index.data'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import {Col, Container, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardContent from "@material-ui/core/CardContent";
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles(() => ({
    resourceBackground: {
        background: '#212E60',
    },
    title: {
        paddingLeft: '6rem',
        color: '#F2DC10',
        fontSize: '4vw',
    },
    infoSection: {
        marginLeft: '6rem',
        marginRight: '6rem',
        borderRadius: '10px',
        color: '#eee',
        fontSize: '1.75vw',
        // fontSize: '1.5rem'
    },
    aboutBody: {
        textAlign: 'center',
        paddingTop:'1rem',
        fontSize: '1.5rem',
        padding: '0 6rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '10rem',
    },
    buttonStyling:{
        flexBasis: '33.3333%',
    },
    button:{
        textAlign: 'center',
        background:'#FBF5AA',
        width: '25rem',
        height: '5rem',
        borderRadius: '15px',
        margin: '15px',
        border: 'none',
        fontSize: '1.75rem',
    },
    eachResource:{
        backgroundColor: '#113f77',
        border:'5px solid #DCC10C',
        color:'white',
        margin:'16px 0',
        fontSize:'15px'
    },
    resourceDisplayInHome:{
        backgroundColor: '#113f77',
        border:'5px solid #DCC10C',
        color:'white',
        margin:'16px 0'
    },

    resourcesImg:{
        height:'200px',
        display: 'flex',
        flex: '1 1 auto'
    }
  }));

const ResourcesMain = () => {
    const classes = useStyles();
    const res = (resources) => {
        return resources.map(resource => {
            return <div>
               

                {/* The following is a hack that must be solved in future iterations */}

                {/* Using normal anchor tags for others */}
                {resource.title !="CSUG Tutoring" && 
                <a href={resource.link} target="_blank">
                    <Container className={classes.eachResource}>
                        <Row className="p-2">
                            <Col md={3}>
                                <Card.Img className={classes.resourcesImg} variant="left" src={resource.img}></Card.Img>
                            </Col>
                            <Col md={6}>
                                <Row><h3 className="text-center mt-2">{resource.title}</h3></Row>
                                <Row className="text-left mt-2">{resource.description}</Row>
                            </Col>
                        </Row>
                    </Container>
                </a>
                }

                {/* Use NavLink for CSUG tutoring */}
                {resource.title ==="CSUG Tutoring" && 
                <NavLink className={classes.navLink} to={resource.link}>
                    <Container className={classes.eachResource}>
                        <Row className="p-2">
                            <Col md={3}>
                                <Card.Img className={classes.resourcesImg} variant="left" src={resource.img}></Card.Img>
                            </Col>
                            <Col md={6}>
                                <Row><h3 className="text-center mt-2">{resource.title}</h3></Row>
                                <Row className="text-left mt-2">{resource.description}</Row>
                            </Col>
                        </Row>
                    </Container>
                </NavLink>
                }
            </div>
        })
    }

    return (
        <div className={classes.aboutSection}>
            <div className={classes.title}>Resources</div>
            <div className={classes.aboutBody}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        {res(resources)}
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}


const ResourcesHomePage = () => {
    const classes = useStyles();
    // The following is a hacked solution to differ between anchor tags and navlinks
    const resHome = (resources) => {
        return resources.map(resource => {
            return <div>
                {resource.title !=="" && 
                <a href={resource.link} target="_blank" rel="noreferrer">
                    {/* <Card className={classes.resourceDisplayInHome}>
                        <CardContent>
                            {resource.title}
                        </CardContent>
                    </Card> */}
                    <div className={classes.buttonStyling}>
                        <button className={classes.button}>{resource.title}</button>
                    </div>
                </a>
                }

                {/* {resource.title ==="CSUG Tutoring" && 
                <NavLink className={classes.navLink} to={resource.link}>
                    <Card className={classes.resourceDisplayInHome}>
                        <CardContent>
                            {resource.title}
                        </CardContent>
                    </Card>
                </NavLink>
                } */}
            </div>
        })
    }

    return (
        <div className={classes.resourceBackground}>
            <div className={classes.title}>What We Do</div>
            <div className={classes.infoSection}>
                We host a plethora of events and services to assist students. Such resources include a 
                tutoring service for CS courses, semester-long projects, networking nights, info sessions 
                on industry, grad school, research, and many more. We also organize the biggest hackathon 
                at U of R — DandyHacks! See more information by clicking on the links below.
            </div> 
            <div className={classes.aboutBody}>
                {resHome(resources)}
                {/* <Grid container spacing={0}>
                    <Grid item xs={12}>
                        {resHome(resources)}
                    </Grid>
                </Grid> */}
            </div>
        </div>
    )
}

export {ResourcesMain};
export {ResourcesHomePage};
