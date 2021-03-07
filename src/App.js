import React from 'react'


import { BrowserRouter as Router, withRouter, Route, HashRouter } from 'react-router-dom';



import IntroSection from './assets/Components/IntroSection'
import NavigationBar from './assets/Components/NavigationBar'

import { Grid,Paper } from '@material-ui/core';


import './assets/css/style.css'
import AboutUs from './assets/Components/AboutUsComponent';
import {ResourcesMain} from './assets/Components/ResourceComponent';
import Footer from './assets/Components/Footer';

import HomePage from "./assets/Components/HomePage";



export default function App() {

  return (
    <HashRouter basename='/'>
      <NavigationBar/>

      <Route exact path="/" render={()=> <HomePage />}/>
      <Route path="/about" render={()=> <AboutUs />}/>
      <Route path="/resources" render={()=> <ResourcesMain />}/>
      
      <Footer />
    </HashRouter>
  )
}
