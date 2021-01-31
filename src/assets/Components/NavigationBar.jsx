
import React from 'react'
import Resources from './Resources';

import { makeStyles } from '@material-ui/core/styles';

import {Navbar,NavbarBrand} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import logo from '../images/pngFormat.png'
import HomePage from "./HomePage";
import {NavLink} from "react-bootstrap";
import AboutUs from "./AboutUs";

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
        <Router>
        <div>
           <AppBar position="static" className={classes.navbarLight}>

               <Navbar className="" expand="lg">

                   <NavbarBrand> <Link className="nav-link text-dark" to="/"><img src={logo} alt="logo" className={classes.logo} to="/"/></Link></NavbarBrand>

                   <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
                   <Navbar.Collapse id="navbar-toggle">
                       <Nav className={classes.toolbarButtons}>
                           <Link className="nav-link text-white" to="/about">About</Link>
                           <Link color="inherit" className="nav-link text-white" to="/resources">Resources</Link>
                           <Link color="inherit" className="nav-link text-white" to="/contact">Contact</Link>
                       </Nav>
                   </Navbar.Collapse>
               </Navbar>


            </AppBar>

            <Route exact path="/" render={()=> <HomePage />}/>
            <Route path="/resources" render={()=> <Resources />}/>
            <Route path="/about" render={()=> <AboutUs />}/>

        </div>
        </Router>
    )
}
