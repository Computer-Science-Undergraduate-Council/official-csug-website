import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import resources from "./ResourceComponent";

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
        margin:'16px 0'
    }
}));

export default function HomeResources(props) {
    const classes = useStyles();

    const res = (resources) => {
        return resources.map(resource => {
            return <div>
                <a href={resource.link}>
                    <Card className={classes.eachResource}>
                        <CardContent>
                            {resource.title}
                        </CardContent>
                    </Card>
                </a>
            </div>
        })
    }

    return (
        <div className={classes.aboutSection}>
            <div className={classes.title}>What We Do</div>
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