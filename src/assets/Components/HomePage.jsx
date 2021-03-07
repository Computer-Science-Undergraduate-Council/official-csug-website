import React, {Component} from 'react'
import IntroSection from './IntroSection'

import { Grid,Paper } from '@material-ui/core';


import '../css/style.css'
import {EboardHomePage} from './EBoardComponent';
import {ResourcesHomePage} from "./ResourceComponent";
import {AboutUsHomeComponent} from './AboutUsComponent'


export default class HomePage extends Component{



    render() {
        return (
            <div>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <IntroSection />
                    </Grid>
                    <Grid item xs={12}>
                        <AboutUsHomeComponent/>
                    </Grid>
                    <Grid item xs={12}>
                        <ResourcesHomePage/>
                    </Grid>
                    <Grid item xs={12}>
                        <EboardHomePage />
                    </Grid>
                </Grid>
            </div>
        )
    }


}
