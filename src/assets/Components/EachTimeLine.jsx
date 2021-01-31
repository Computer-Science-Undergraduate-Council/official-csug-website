import React from 'react'
import stock from '../images/stock.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Card from "react-bootstrap/Card";
import {Container, Row, Col} from "react-bootstrap";

const useStyles = makeStyles((theme) => ({

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

export default function EachTimeLine(props) {
    const classes = useStyles();
    return (
        <div className="mt-2 pt-2">
                <Container className="p-2 m-2">
                    <Row className="p-2">
                        <Col md={5}>
                            <Card.Img className={classes.avatarSize} variant="left" src={props.timeline.img}></Card.Img>
                        </Col>

                        <Col md={7}>
                            <Row>
                                <h3 className="text-center">{props.timeline.title}</h3>
                            </Row>
                            <Row className="text-left">
                                {props.timeline.description}
                            </Row>
                        </Col>
                    </Row>


                </Container>

        </div>
    )
}
