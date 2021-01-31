import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import stock from '../images/stock.jpg';
import EachResource from './EachResource';

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

export const resources = [
    {
        id: 0,
        title: 'Internship',
        img: stock,
        description: 'Gibberish, also called jibber-jabber or gobbledygook, is speech that is nonsense. It may include speech sounds that are not actual words, or language games and specialized jargon that seems nonsensical to outsiders.',
        link: '#'
    },
    {
        id: 1,
        title: 'Hackathon',
        img: stock,
        description: 'Gibberish, also called jibber-jabber or gobbledygook, is speech that is nonsense. It may include speech sounds that are not actual words, or language games and specialized jargon that seems nonsensical to outsiders.',
        link: '#'
    },
    {
        id: 2,
        title: 'CSUG Tutoring',
        img: stock,
        description: 'Gibberish, also called jibber-jabber or gobbledygook, is speech that is nonsense. It may include speech sounds that are not actual words, or language games and specialized jargon that seems nonsensical to outsiders.',
        link: '#'

    },
    {
        id: 3,
        title: 'Academics',
        img: stock,
        description: 'Gibberish, also called jibber-jabber or gobbledygook, is speech that is nonsense. It may include speech sounds that are not actual words, or language games and specialized jargon that seems nonsensical to outsiders.',
        link:'#'
    },
    {
        id: 4,
        title: 'Projects',
        img: stock,
        description: 'Gibberish, also called jibber-jabber or gobbledygook, is speech that is nonsense. It may include speech sounds that are not actual words, or language games and specialized jargon that seems nonsensical to outsiders.',
        link: '#'
    },
    {
        id: 5,
        title: 'Coding Sessions',
        img: stock,
        description: 'Gibberish, also called jibber-jabber or gobbledygook, is speech that is nonsense. It may include speech sounds that are not actual words, or language games and specialized jargon that seems nonsensical to outsiders.',
        link: '#'
    }
]


export default function Resources() {
    const classes = useStyles();

    const res = (resources) => {
        return resources.map(resource => {
            return <EachResource resource={resource} key={resource.id} />
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
