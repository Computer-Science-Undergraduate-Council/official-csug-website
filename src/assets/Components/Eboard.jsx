import React from 'react'

import { makeStyles } from '@material-ui/core/styles';


import Aman from '../images/E-board/Aman.png';
import Anh from '../images/E-board/PhuongAnh.jpg';
import Minghui from '../images/E-board/Emily.jpg';
import Jerry from '../images/E-board/Jerry.png';
import Tash from '../images/E-board/Tash.jpg';
import Ashley from '../images/E-board/Ashley.jpeg';

import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
    eboardSection:{
        background: '#113F77',
        padding: '32px 0',
    },
    title: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: 'white',
      fontSize: '3rem',
      paddingBottom:'0',
      fontWeight:'bold',
    },
    eboardBody: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'white',
        paddingTop:'4px',
        fontSize: '1.5rem',
        margin: '0 auto',
        width:'75%',
    },
    avatarSize:{
        width: '256px',
        height:'256px',
        border: '5px solid #113f77',
        boxShadow: '-15px 15px 5px rgba(0, 0, 0, 0.5)',
        margin: '24px auto'
    }
  }));

export const eboardmembers = [
    {
        id: 0,
        name: 'Aman Shreshta',
        img: Aman,
        description: 'Gibberish, also called jibber-jabber or gobbledygook, is speech that is nonsense. It may include speech sounds that are not actual words, or language games and specialized jargon that seems nonsensical to outsiders.',
        gitlink: '#',
        facebooklink: '#',
        email: '#'
    },
    {
        id: 1,
        name: 'Anh (Jessie) Nguyen',
        img: Anh,
        description: 'Gibberish, also called jibber-jabber or gobbledygook, is speech that is nonsense. It may include speech sounds that are not actual words, or language games and specialized jargon that seems nonsensical to outsiders.',
        gitlink: '#',
        facebooklink: '#',
        email: '#'
    },
    {
        id: 2,
        name: 'Jiahao (Jerry) Liu',
        img: Jerry,
        description: 'Gibberish, also called jibber-jabber or gobbledygook, is speech that is nonsense. It may include speech sounds that are not actual words, or language games and specialized jargon that seems nonsensical to outsiders.',
        gitlink: '#',
        facebooklink: '#',
        email: '#'

    },
    {
        id: 3,
        name: 'Minghui (Emily) Zheng',
        img: Minghui,
        description: 'Gibberish, also called jibber-jabber or gobbledygook, is speech that is nonsense. It may include speech sounds that are not actual words, or language games and specialized jargon that seems nonsensical to outsiders.',
        gitlink: '#',
        facebooklink: '#',
        email: '#'
    },
    {
        id: 4,
        name: 'Tasheem Brown',
        img: Tash,
        description: 'Gibberish, also called jibber-jabber or gobbledygook, is speech that is nonsense. It may include speech sounds that are not actual words, or language games and specialized jargon that seems nonsensical to outsiders.',
        gitlink: '#',
        facebooklink: '#',
        email: '#'
    },
    {
        id: 5,
        name: 'Sungwoon (Ashley) Yoon',
        img: Ashley,
        description: 'Gibberish, also called jibber-jabber or gobbledygook, is speech that is nonsense. It may include speech sounds that are not actual words, or language games and specialized jargon that seems nonsensical to outsiders.',
        gitlink: '#',
        facebooklink: '#',
        email: '#'
    }
]


export default function Eboard() {

    const classes = useStyles();

    const eboard = (eboard) => {
        return eboard.map(eboardmem => {
            return  <div className="col-lg-4 d-flex"><Avatar alt={eboardmem.name} src={eboardmem.img} className={classes.avatarSize}/></div>
        })
    }

    return (
        <div className={classes.eboardSection}>
            <div className={classes.title}>E-Board</div>

                <div className="container text-center">
                    <div className="row">

                        {eboard(eboardmembers)}
                        
                    </div>

                </div>



        </div>
    )
}
