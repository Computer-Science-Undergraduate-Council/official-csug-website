import React from 'react'
import stock from '../images/stock.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Card from "react-bootstrap/Card";
import {Container, Row, Col} from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
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

export default function EachResource(props) {
    const classes = useStyles();
    return (
        <div>
            <a href={props.link}>
                <Container className={classes.eachResource}>
                    <Row className="p-2">
                        <Col md={4}>
                            <Card.Img className={classes.resourcesImg} variant="left" src={props.resource.img}></Card.Img>
                        </Col>

                        <Col md={6}>
                            <Row>
                               <h3 className="text-center mt-2">{props.resource.title}</h3>
                            </Row>
                            <Row className="text-left mt-2">
                                {props.resource.description}
                            </Row>
                        </Col>
                    </Row>


                </Container>

            </a>
        </div>
    )
}
