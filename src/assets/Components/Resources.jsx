import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import stock from '../images/stock.jpg';
import csugTutoring from '../images/tutoring.png';
import dandyHacks from '../images/flower.png';
import internship from '../images/internship.jpg';
import academics from '../images/books.png';
import project from '../images/project.png';
import workshop from '../images/workshop.png';




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

export const resources = [
    {
        id: 0,
        title: 'Internship',
        img: internship,
        description: 'We compile information about available internships with the help of the CS community and Alumni of UoR. You can use this information and find one that could be your next internship.',
        link: '#'
    },
    {
        id: 1,
        title: 'Hackathon',
        img: dandyHacks,
        description: 'We organize a 36 hours hackathon, DandyHacks. This is an amazing event where you can learn and demonstrate your skills and network with peers and employers.',
        link: '#'
    },
    {
        id: 2,
        title: 'CSUG Tutoring',
        img: csugTutoring,
        description: 'We run a special tutoring service for Computer Science subjects to help our students. This is a free drop-in tutoring service where we have selected the best tutors for you.',
        link: '#'

    },
    {
        id: 3,
        title: 'Academics',
        img: academics,
        description: 'We have compiled resources that you can use for your classes. These resources have been compiled with the help of students who have taken the courses. Please make sure that the use of these resources doesn\'t violate any academic honesty policies.',
        link:'#'
    },
    {
        id: 4,
        title: 'Projects',
        img: project,
        description: 'Coming Soon',
        link: '#'
    },
    {
        id: 5,
        title: 'Coding Workshops',
        img: workshop,
        description: 'We organize workshops to help you excel at your next coding interview. Tune in every week to solve coding challenges and practice your way to be ready for the industry',
        link: '#'
    }
]


export default function Resources() {
    const classes = useStyles();

    const res = (resources) => {
        return resources.map(resource => {
            return <div>
                <a href={resource.link}>
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
