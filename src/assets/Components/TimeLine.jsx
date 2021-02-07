import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import stock from '../images/stock.jpg';
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

const timeline = [
    {
        id: 0,
        title: '2020-2021',
        img: stock,
        description: 'E-Board Members: Aman Shrestha, Anh (Jessie) Nguyen, Jiahao (Jerry) Liu, Minghui (Emily) Zheng, Tasheem Brown, Sungwoon (Ashley) Yoon, Carolina Lion He. This e-board persevered through the challenges of virtual learning due to COVID. They organized the first virtual DandyHacks and coding-interview workshops. They were heavily focused on industry side of things.'
    },
    {
        id: 1,
        title: '2019-2020',
        img: stock,
        description: 'E-Board Members: Gabby Stillman, Jimmy, Grace Zheng, Abhisesh Acharya, Shagun Bose, Aman Shrestha, Tom Wang. This e-board persevered through the challenges of virtual learning due to COVID. They organized the first virtual DandyHacks and coding-interview workshops. They were heavily focused on industry side of things.'
    },
    {
        id: 2,
        title: '2018-2019',
        img: stock,
        description: 'E-Board Members: Kelly He, Gabby Stillman, Kelvin, Aman Shrestha, Grace Zheng, Jackson, Shagun Bose',
        link: 'https://github.com/SarahZam/Snake-game'

    },
    {
        id: 3,
        title: '2017-2018',
        img: stock,
        description: 'Gibberish, also called jibber-jabber or gobbledygook, is speech that is nonsense. It may include speech sounds that are not actual words, or language games and specialized jargon that seems nonsensical to outsiders.',
        link:'https://github.com/SarahZam/2048'
    },
    {
        id: 4,
        title: '2016-2017',
        img: stock,
        description: 'Gibberish, also called jibber-jabber or gobbledygook, is speech that is nonsense. It may include speech sounds that are not actual words, or language games and specialized jargon that seems nonsensical to outsiders.',
        link: 'https://github.com/SarahZam/TicTacToe'
    }
]


export default function TimeLine() {
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
