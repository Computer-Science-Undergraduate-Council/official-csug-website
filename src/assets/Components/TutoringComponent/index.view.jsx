import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import {NavLink} from "react-router-dom";



import {Col, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";

import {dataToSend,weeklySchedule} from './index.data';


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
        paddingLeft: theme.spacing(2),
        background: "inherit",
    }
    ,tutorName:{
        fontSize: "1rem",
    },
    tutorDetails:{
        fontSize: "1rem",
    },
    eachDay:{
        background:"#113F77",
        color:"#fff",
    },
    eachDay2:{
        border:"1px solid #000",
    },
    dayTitle:{
        background:"#F5DD5A",
        color:"#113F77",
    },
    sideInfo:{
        textAlign:"right",
    }
}));

const TutorTime = (eachTutor) => {
    let countSchedules = 0;
    
    return eachTutor.schedule.map(currentSchedule=>{
        if (countSchedules === eachTutor.schedule.length-1) {
            return <>
            {currentSchedule['time']}
        </>
        }
        countSchedules++;
        return <>
            {currentSchedule['time']};&nbsp;
        </>
    })
}

const TutorTimeWithDay = (eachTutor) => {
    let countSchedules = 0;
    return eachTutor.schedule.map(currentSchedule=> {
        if (countSchedules === eachTutor.schedule.length-1) {
            return <>
            {currentSchedule['day']} - {currentSchedule['time']}
        </>
        }
        countSchedules++;
        return <>
            {currentSchedule['day']} - {currentSchedule['time']};&nbsp;
        </>
    })
}

const TutorDayView = (currentData) => {
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
                                Location: {currentTutor.location}
                            </Row>
                            {currentTutor.password!=="" &&  <Row className="text-left">Password: {currentTutor.password}</Row>}
                            <Row className="text-left">
                                Subjects: {currentTutor.subjects}
                            </Row>
                            <Row className="text-left">
                                Time: {TutorTime(currentTutor)}
                            </Row>
                            
                            {/* <Row className="text-left">
                                Time: {currentTutor.schedule["Wednesday"]}
                            </Row> */}
                        </Col>
                    </Row>
                </Card>
            </div>
           
            
        })
    }
    
    const todayData = dataToSend();
    return (
        <div className={classes.aboutSection}>
            <div className={classes.title}>Tutoring Schedule For Today</div>
            {todayData.length === 0 && <div className={classes.aboutBody}>
                All tutoring sessions for today have ended. Please come back tomorrow. 
            </div>}

            {todayData.length !== 0 && 
                <div className={classes.aboutBody}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        {eachtutor(todayData)}
                    </Grid>
                </Grid>

                </div>
            }
            <div className={classes.aboutBody}>
                <NavLink className={classes.navLink} to="/tutoring-weekly">Week Schedule</NavLink> 
            </div>
           
        </div>
    )
}


// The following returns the weekly schedule view
const TutorWeekView = (currentData) => {
    const classes = useStyles();    

    const weekTutor = (currentData) => {
        return currentData.map(currentTutor => {
            return <div className="mt-2 pt-2">
                <div className={classes.cardBody}>
                    <Row className="p-2">
                        <Col md={7}>
                            <Row>
                                <h3 className={classes.tutorName}>{currentTutor.name}</h3>
                            </Row>
                            <Row className={classes.tutorDetails}>
                                Location: {currentTutor.location}
                            </Row>
                            {currentTutor.password!=="" &&  <Row className={classes.tutorDetails}>Password: {currentTutor.password}</Row>}
                            <Row className={classes.tutorDetails}>
                                Subjects: {currentTutor.subjects}
                            </Row>
                            <Row className={classes.tutorDetails}>
                                Times: {TutorTimeWithDay(currentTutor)}
                            </Row>
                        </Col>
                    </Row>
                </div>
                <hr></hr>
            </div>
           
            
        })
    }
    
    const weekData = weeklySchedule();
    return (
        <div className={classes.aboutSection}>
            <div className={classes.title}>Tutoring Schedule For The Week</div>
            <div className={classes.sideInfo}>
                <NavLink className={classes.navLink} to="/tutoring">Find today's schedule</NavLink> 
            </div>
            
            <div className={classes.aboutBody}>
                <div className={classes.eachDay}>
                    <div className = {classes.dayTitle}>Monday</div>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            {weekTutor(weekData["Monday"])}
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.eachDay}>
                    <div className = {classes.dayTitle}>Tuesday</div>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            {weekTutor(weekData["Tuesday"])}
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.eachDay}>
                    <div className = {classes.dayTitle}>Wednesday</div>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            {weekTutor(weekData["Wednesday"])}
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.eachDay}>
                    <div className = {classes.dayTitle}>Thursday</div>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            {weekTutor(weekData["Thursday"])}
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.eachDay}>
                    <div className = {classes.dayTitle}>Friday</div>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            {weekTutor(weekData["Friday"])}
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.eachDay}>
                    <div className = {classes.dayTitle}>Saturday</div>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            {weekTutor(weekData["Saturday"])}
                        </Grid>
                    </Grid>
                </div>
                {/* No data available for Sunday. removed to avoid confusion */}
                {/* <div className={classes.eachDay}>
                    <div className = {classes.dayTitle}>Sunday</div>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            {weekTutor(weekData["Sunday"])}
                        </Grid>
                    </Grid>
                </div> */}
                

            </div>
            

           
        </div>
    )
}

export {TutorDayView};
export {TutorWeekView};

