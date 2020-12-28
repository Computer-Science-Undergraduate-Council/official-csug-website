
import React from 'react'

import { makeStyles } from '@material-ui/core/styles';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import logo from '../images/pngFormat.png'

const useStyles = makeStyles((theme) => ({    // this group of buttons will be aligned to the right side
    toolbarButtons: {
      marginLeft: 'auto',
    },
    navbarLight:{
        background: '#113f77',
    },
    
    logo: {
        marginTop: '0.2rem',
        width: '2.5rem',
        marginLeft: '1.5rem',
    }
}));

export default function NavigationBar() {
    const classes = useStyles();
    
    return (
        <div>
           <AppBar position="static" className={classes.navbarLight}>
            <Toolbar>
                <IconButton edge="start"  color="inherit" aria-label="menu">
                    <img src={logo} alt="logo" className={classes.logo} />
                </IconButton>
                <div className={classes.toolbarButtons}>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Resources</Button>
                    <Button color="inherit">Contact</Button>
                </div>
                
            </Toolbar>
            </AppBar>
        </div>
    )
}
