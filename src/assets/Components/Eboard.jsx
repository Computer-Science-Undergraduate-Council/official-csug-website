import React from 'react'

import { makeStyles } from '@material-ui/core/styles';


import eboardmembers from './EBoardComponent/index.data'




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
        margin: '24px auto',
        overflow:'hidden'
    },
    /* Centered text */
    centered: {
        position: 'absolute',
        color:'white',
        top: '75%',
        left: '50%',
        fontWeight:'bold',
        fontSize:'16px',
        transform: 'translate(-50%, -50%)',
        textShadow: '0px 4px 3px rgb(0 0 0 / 40%), 0px 8px 13px rgb(0 0 0 / 10%), 0px 18px 23px rgb(0 0 0 / 10%)',
    }
  }));


export default function Eboard() {

    const classes = useStyles();

    const eboard = (eboard) => {
        return eboard.map(eboardmem => {
            return (  
            <div className="col-lg-4 d-flex container">
                <Avatar alt={eboardmem.name} src={eboardmem.img} className={classes.avatarSize}>
                </Avatar>
                <div className={classes.centered}>{eboardmem.name} <br />{eboardmem.title}</div>

            </div>)
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
