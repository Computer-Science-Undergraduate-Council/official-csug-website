import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


import IntroSection from './assets/Components/IntroSection'
import NavigationBar from './assets/Components/NavigationBar'

import { Grid,Paper } from '@material-ui/core';


import './assets/css/style.css'
import AboutUs from './assets/Components/AboutUs';
import Resources from './assets/Components/Resources';
import Eboard from './assets/Components/Eboard';
import Footer from './assets/Components/Footer';




export default function App() {

  return (
    <div>
      <NavigationBar/>
      <Footer />
    </div>
  )
}
