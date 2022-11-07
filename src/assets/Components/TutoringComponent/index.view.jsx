import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



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
        fontSize: '2.5rem',
        paddingBottom:'4px',
        fontWeight:'bold',
        color:"#113F77",

    },
    subTitle: {
        padding: theme.spacing(0.5),
        textAlign: 'center',
        fontSize: '2.2rem',
        paddingBottom:'0',
        textDecorationLine: '',
        color:"#b44750",
    },
    announcement: {
        padding: theme.spacing(0.5),
        textAlign: 'center',
        fontSize: '1.5rem',
        paddingBottom:'0',
        textDecorationLine: 'underline',
        color:"#b44750",
    },
    aboutBody: {
        padding: theme.spacing(2),
        textAlign: 'center',
        paddingTop:'4px',
        fontSize: '1.5rem',
        margin: '0 auto',
        width:'75%',
    },
    cardBorder:{
        paddingLeft: theme.spacing(2),
        textDecorationWidth: '200%',
        width:'100%',
    },
    cardBody:{
        paddingLeft: theme.spacing(2),
        background: "inherit",
        textAlign: 'left',
        width:'100%',
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
        fontSize: '1rem',
        textAlign:"center",
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
            {currentSchedule['day']} - {currentSchedule['time']}
        </>
    })
}

const TutorDayView = (currentData) => {
    const classes = useStyles();    
    const eachtutor = (currentData) => {
        return currentData.map(currentTutor => {
            return <div className="mt-2 pt-2">
                <Card className={classes.cardBorder}>
                    <Row className="p-2">
                        <Col md={12}>
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
		      <div className={classes.title}>CSUG Tutoring</div>
            <div className={classes.aboutBody}>
		          <p>
		            CSUG Tutoring is proudly a student-run service that helps students succeed in their CS courses. Our volunteer tutors help with explaining concepts, approaching assignments, preparing for exams, and more!
		          </p>
            </div>
            <div className={classes.subTitle} >
              <i class="fa fa-bullhorn" aria-hidden="true"></i> CSUG Tutoring
              mid-semester update!
            </div>
            <div className={classes.announcement}>
              The CSUG Tutoring service now provides tutoring by appointment in
              addition to drop-in hours! Tutoring hours that are given by
              appointment will be indicated in the schedule below. Use this <a
              href="https://calendly.com/csug/tutoring">Calendly</a> link to
              book an appointment with us!
            </div>}
          <div className={classes.subTitle}>How to access tutoring</div>
          <div className={classes.aboutBody}>
		        <p>
		         In-person tutoring can be accessed in Hylan 301. In addition, join
             our <a href ="https://discord.gg/78c6xaeKkp" target = "_blank">
		         CSUG Tutoring Discord server</a> to access remote tutoring and
		         tutoring outside the normal schedule.
            </p>
          </div> 
          <div className={classes.subTitle}>Today&#39;s schedule</div>
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
          {/*<div className={classes.aboutBody} >
                <a href="https://calendar.google.com/calendar/u/0?cid=Y19udWxjYmZiMmcyOHM2OHZsMHRxdTVvdGJjMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t" style={{color: "#113F77"}}>
                        Add the CSUG Tutoring schedule to your calendar  <i class="fa fa-calendar fa-lg" aria-hidden="true"  ></i>
                </a> 
            </div>*/}
          <div className={classes.subTitle}>Weekly schedule</div>
          <TutorWeekView />
          <div className={classes.subTitle}>Contact</div>
          <div className={classes.aboutBody}>
		        <p>
              Duong "Zach" Nguyen, CSUG Tutoring Chair<br/>
              Email: duong.nguyen[at]rochester.edu
            </p>
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
            {/* <div className={classes.title}>Tutoring Schedule For The Week</div> */}
            {/* <div className={classes.sideInfo}>
                <NavLink className={classes.navLink} to="/tutoring">Find today's schedule</NavLink> 
            </div> */}
            {/*<div className={classes.title}>2022 Spring CSUG Tutoring Schedule for the Week</div>
            <div className={classes.aboutBody}>
                <NavLink className={classes.navLink} to="/tutoring" >                 
                    View Today's Schedule
                </NavLink>
                <text>
                <a href="https://calendar.google.com/calendar/u/0?cid=Y19udWxjYmZiMmcyOHM2OHZsMHRxdTVvdGJjMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t">
                    <i class="fa fa-calendar fa-lg" aria-hidden="true" style={{color: "#113F77"}} ></i>
                </a> 
            </div>*/}
            {/* <div className={classes.subTitle} >Announcement:<i class="fa fa-bullhorn" aria-hidden="true"></i></div>
            <div className={classes.announcement}>
 CSUG Tutoring will not be holding tutoring sessions during spring break(3/7-3/11). <br /> We will resume on 3/14/22(Mon)! </div> */}
            <div className={classes.aboutBody}>
              <p>
                The weekly schedule is for reference only. Please see today's
                schedule for updated information about tutors' availability.
              </p>
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


