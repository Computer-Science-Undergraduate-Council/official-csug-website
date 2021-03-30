import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import resources from './index.data'
import {Col, Container, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardContent from "@material-ui/core/CardContent";
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    aboutSection:{
        padding: '32px 0',
    },
    title: {
      padding: theme.spacing(2),
      textAlign: 'center',
      fontSize: '3rem',
      paddingBottom:'0',
      fontWeight:'bold',
    },
    aboutBody: {
        padding: theme.spacing(2),
        textAlign: 'center',
        paddingTop:'4px',
        fontSize: '1.5rem',
        margin: '0 auto',
        width:'75%',
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

    const resHome = (resources) => {
        return resources.map(resource => {
            return <div>
                <a href={resource.link} target="_blank">
                    <Card className={classes.resourceDisplayInHome}>
                        <CardContent>
                            {resource.title}
                        </CardContent>
                    </Card>
                </a>
            </div>
        })
    }

    return (
        <div className={classes.aboutSection}>
            <div className={classes.title}>What We Do</div>
            <div className={classes.aboutBody}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        {resHome(resources)}
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}

export {ResourcesMain};
export {ResourcesHomePage};
