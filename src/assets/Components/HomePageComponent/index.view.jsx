import React from 'react'

import { Grid } from '@material-ui/core';


import '../../css/style.css'
import IntroSection from '../IntroSection'
import {EboardHomePage} from '../EBoardComponent';
import {ResourcesHomePage} from "../ResourceComponent";
import {AboutUsHomeComponent} from '../AboutUsComponent'


const HomePage = () => {
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

export default HomePage;



