import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';


import {Col, Container, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";

import timeline from './index.data';

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
    avatarSize:{
        width: '200px',
        height:'200px',
        border: '5px solid #113f77',
        borderRadius:'50%'
    },
    resourcesImg:{
        height:'100px',
        display: 'flex',
        flex: '1 1 auto'
    }
}));

const TimeLineView = () => {
    const classes = useStyles();
    const eachtimeline = (timeline) => {
        return timeline.map(timeline => {
            return <div className="mt-2 pt-2">
                <Container className="p-2 m-2">
                    <Row className="p-2">
                        <Col md={5}>
                            <Card.Img className={classes.avatarSize} variant="left" src={timeline.img}></Card.Img>
                        </Col>

                        <Col md={7}>
                            <Row>
                                <h3 className="text-center">{timeline.title}</h3>
                            </Row>
                            <Row className="text-left">
                                {timeline.description}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        })
    }

    return (
        <div className={classes.aboutSection}>
            <div className={classes.title}>TimeLine</div>
            <div className={classes.aboutBody}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        {eachtimeline(timeline)}
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}

export {TimeLineView};
