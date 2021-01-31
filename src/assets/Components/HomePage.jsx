import React, {Component} from 'react'
import IntroSection from './IntroSection'

import { Grid,Paper } from '@material-ui/core';


import '../css/style.css'
import Eboard from './Eboard';
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
