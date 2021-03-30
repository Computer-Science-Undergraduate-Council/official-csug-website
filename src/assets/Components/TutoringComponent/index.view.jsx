import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';


import {Col, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";

import {dataToSend} from './index.data';


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
    cardBody:{
        padding: theme.spacing(2),
    }
}));

const TutorView = (currentData) => {
    const classes = useStyles();    
    const eachtutor = (currentData) => {
        return currentData.map(currentTutor => {
            return <div className="mt-2 pt-2">
                <Card className={classes.cardBody}>
                    <Row className="p-2">
                        <Col md={7}>
                            <Row>
                                <h3 className="text-center">{currentTutor.name}</h3>
                            </Row>
                            <Row className="text-left">
                                Zoom ID: {currentTutor.zoomLink}
                            </Row>
                            {currentTutor.password!=="" &&  <Row className="text-left">Password: {currentTutor.password}</Row>}
                            <Row className="text-left">
                                Subjects: {currentTutor.subjects}
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </div>
           
            
        })
    }
    

    return (
        <div className={classes.aboutSection}>
            <div className={classes.title}>Tutoring Schedule For Today</div>
            <div className={classes.aboutBody}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        {eachtutor(dataToSend())}
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}

export {TutorView};
