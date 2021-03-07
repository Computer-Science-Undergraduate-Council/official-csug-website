import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import resources from './ResourceComponent'
import {Col, Container, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";

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

    resourcesImg:{
        height:'200px',
        display: 'flex',
        flex: '1 1 auto'
    }
  }));

export default function Resources() {
    const classes = useStyles();

    const res = (resources) => {
        return resources.map(resource => {
            return <div>
                <a href={resource.link} target="_blank">
                    <Container className={classes.eachResource}>
                        <Row className="p-2">
                            <Col md={3}>
                                <Card.Img className={classes.resourcesImg} variant="left" src={resource.img}></Card.Img>
                            </Col>

                            <Col md={6}>
                                <Row>
                                    <h3 className="text-center mt-2">{resource.title}</h3>
                                </Row>
                                <Row className="text-left mt-2">
                                    {resource.description}
                                </Row>
                            </Col>
                        </Row>


                    </Container>

                </a>
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
