import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import {Navbar,NavbarBrand} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";

import logo from '../../images/logo2023.png'
import menu from '../../images/Hamburger Menu.png'


const useStyles = makeStyles((theme) => ({    // this group of buttons will be aligned to the right side
    toolbarButtons: {
      marginLeft: 'auto',
      fontSize: '2vw',
      color: '#6DC3DD',
      marginRight: '1rem',
      background: '#212E60',
      '@media (max-width:980px)': {
        width: '150px',
        textAlign: 'center',
        marginRight: '-16px',
      }
    },

    Links: {
        padding: '1rem',
        color: '#6DC3DD',
        textDecoration: 'none',
        '&:hover': {
            color: '#F2DC10',
            textDecoration: 'none',
        },
        '@media (max-width:980px)': {
            padding:'.5rem',
        },
    },
    navbarLight:{
        background: '#212E60',
        height: '75px',
        position: 'sticky',
        top: '0',
        paddingTop: '0',
    },
    mobile:{
        color: '#6DC3DD',
        textDecoration: 'none',
    },
    logo: {
        width: '64px',
    }
}));

const NavigationBar = () => {
    const classes = useStyles();
    return (
        <div style={{position: 'sticky', top: '0'}}> 
               <Navbar inverse collapseOnSelect className={classes.navbarLight} expand="lg">
                    <NavbarBrand href="/" style={{width:'4.5vw'}}>
                        <img src={logo} alt="logo" className={classes.logo} />
                    </NavbarBrand>
                    <Navbar.Toggle><img src={menu} alt="hamburger menu"/></Navbar.Toggle>
                    <Navbar.Collapse>
                       <Nav className={classes.toolbarButtons}>
                            <NavLink className={classes.Links} to="/">Home</NavLink>
                            <NavLink className={classes.Links} to="/about">About</NavLink>
                            <NavLink className={classes.Links} to="/resources">Resources</NavLink>
                            <NavLink className={classes.Links} to="/contact">Contact</NavLink>
                       </Nav>
                   </Navbar.Collapse>
               </Navbar>
        </div> 
    )
}

export default NavigationBar;