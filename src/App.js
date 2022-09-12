import React from 'react'
import { Route, HashRouter } from 'react-router-dom'
import NavigationBar from './assets/Components/NavigationBarComponent'

import './assets/css/style.css'
import AboutUs from './assets/Components/AboutUsComponent'
import { ResourcesMain } from './assets/Components/ResourceComponent'
import Footer from './assets/Components/FooterComponent'
import HomePage from './assets/Components/HomePageComponent'
import {
  TutorDayView,
  TutorWeekView,
} from './assets/Components/TutoringComponent'

export default function App() {
  return (
    <HashRouter basename='/'>
      <NavigationBar />

      <Route exact path='/' render={() => <HomePage />} />
      <Route path='/about' render={() => <AboutUs />} />
      <Route path='/resources' render={() => <ResourcesMain />} />
      <Route path='/tutoring' render={() => <TutorDayView />} />

      <Footer />
    </HashRouter>
  )
}
