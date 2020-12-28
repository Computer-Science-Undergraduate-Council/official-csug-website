import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


import IntroSection from './assets/Components/IntroSection'
import NavigationBar from './assets/Components/NavigationBar'

import { Grid,Paper } from '@material-ui/core';


import './assets/css/style.css'
import AboutUs from './assets/Components/AboutUs';




export default function App() {

  return (
    <div>
      <NavigationBar/>



      <Grid container spacing={0}>
          <Grid item xs={12}>
            <IntroSection />
          </Grid>
          <Grid item xs={12}>
            <AboutUs />
          </Grid>
      </Grid>
      
    </div>
  )
}
