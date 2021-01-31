import React, {Component} from 'react'
import { makeStyles } from '@material-ui/core/styles';


import IntroSection from './IntroSection'
import NavigationBar from './NavigationBar'

import { Grid,Paper } from '@material-ui/core';


import '../css/style.css'
import AboutUs from '../Components/AboutUs';
import Resources from './Resources';
import Eboard from './Eboard';
import Footer from './Footer';
import TimeLine from "./TimeLine";
import HomeResources from "./HomeResources";

import {resources} from "./Resources";
import HomeAbout from "./HomeAbout";


export default class HomePage extends Component{



    render() {
        return (
            <div>

                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <IntroSection />
                    </Grid>
                    <Grid item xs={12}>
                        <HomeAbout/>
                    </Grid>

                    <Grid item xs={12}>
                        <HomeResources resources={resources}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Eboard />
                    </Grid>

                </Grid>


            </div>
        )
    }


}
