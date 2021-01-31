import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import stock from '../images/stock.jpg';
import EachResource from './EachResource';
import EachTimeLine from "./EachTimeLine";

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

const timeline = [
    {
        id: 0,
        title: '2012-2014',
        img: stock,
        description: 'Gibberish, also called jibber-jabber or gobbledygook, is speech that is nonsense. It may include speech sounds that are not actual words, or language games and specialized jargon that seems nonsensical to outsiders.'
    },
    {
        id: 1,
        title: '2013',
        img: stock,
        description: 'Gibberish, also called jibber-jabber or gobbledygook, is speech that is nonsense. It may include speech sounds that are not actual words, or language games and specialized jargon that seems nonsensical to outsiders.'
    },
    {
        id: 2,
        title: '2014-2016',
        img: stock,
        description: 'Gibberish, also called jibber-jabber or gobbledygook, is speech that is nonsense. It may include speech sounds that are not actual words, or language games and specialized jargon that seems nonsensical to outsiders.',
        link: 'https://github.com/SarahZam/Snake-game'

    },
    {
        id: 3,
        title: '2016-2018',
        img: stock,
        description: 'Gibberish, also called jibber-jabber or gobbledygook, is speech that is nonsense. It may include speech sounds that are not actual words, or language games and specialized jargon that seems nonsensical to outsiders.',
        link:'https://github.com/SarahZam/2048'
    },
    {
        id: 4,
        title: '2018-2020',
        img: stock,
        description: 'Gibberish, also called jibber-jabber or gobbledygook, is speech that is nonsense. It may include speech sounds that are not actual words, or language games and specialized jargon that seems nonsensical to outsiders.',
        link: 'https://github.com/SarahZam/TicTacToe'
    }
]


export default function TimeLine() {
    const classes = useStyles();

    const eachtimeline = (timeline) => {
        return timeline.map(timeline => {
            return <EachTimeLine timeline={timeline} key={timeline.id}/>
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
