import React from 'react'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    eachResource:{
        backgroundColor: '#113f77',
        border:'5px solid #DCC10C',
        color:'white',
        margin:'16px 0'
    },
  }));

export default function EachResource(props) {
    const classes = useStyles();
    return (
        <div>
            <a href={props.link}>
                <Card className={classes.eachResource}>
                    <CardContent>
                        {props.title}
                    </CardContent>
                </Card>
            </a>
        </div>
    )
}
