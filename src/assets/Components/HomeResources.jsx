import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import HomeEachResource from "./HomeEachResource";

import resources from "./Resources";
import EachResource from "./EachResource";

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
    }
}));

export default function HomeResources(props) {
    const classes = useStyles();

    const res = (resources) => {
        return resources.map(resource => {
            return <HomeEachResource resource={resource} key={resource.id} />
        })
    }

    return (
        <div className={classes.aboutSection}>
            <div className={classes.title}>What We Do</div>
            <div className={classes.aboutBody}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>

                        {res(props.resources)}
                    </Grid>

                </Grid>

            </div>
        </div>
    )
}