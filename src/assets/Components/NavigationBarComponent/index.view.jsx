import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import {Navbar,NavbarBrand} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import AppBar from '@material-ui/core/AppBar';
import {NavLink} from "react-router-dom";

import logo from '../../images/logo.png'

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

const NavigationBar = () => {
    const classes = useStyles();
    return (
        <div>
           <AppBar position="static" className={classes.navbarLight}>
               <Navbar className="" expand="lg">
                   <NavbarBrand> <NavLink className="nav-link text-dark" to="/"><img src={logo} alt="logo" className={classes.logo} to="/"/></NavLink></NavbarBrand>
                   <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
                   <Navbar.Collapse id="navbar-toggle">
                       <Nav className={classes.toolbarButtons}>
                           <NavLink className="nav-link text-white" to="/about">About</NavLink>
                           <NavLink color="inherit" className="nav-link text-white" to="/resources">Resources</NavLink>
                           <NavLink color="inherit" className="nav-link text-white" to="/contact">Contact</NavLink>
                       </Nav>
                   </Navbar.Collapse>
               </Navbar>
            </AppBar>
        </div>
    )
}

export default NavigationBar;