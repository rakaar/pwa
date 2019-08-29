import React from 'react'
import '../Styles/LandingPage/LandingPage.scss'

export default function Team(){
    return(
        <div className="tscs" style={{marginLeft: '0'}}>
            <div className="section section-header tsrw">
                <img src='https://cdn.iit-techambit.in/websiteAssets/team.jpg' width="100%"/>
            </div>
            <div className="tsi">
                <h2> Who Are We ?</h2>
                <div className='separator separator-danger'>✻</div>
                <p className='description'>
                We are a bunch (a little larger one, maybe) of KGPians from different backgrounds and with diverse passion 
                who have come together to solve modern problems requiring fast-moving people and "KISS" solutions; our aim is to
                make the pool of innovations and research at IITs accessible and understandable to everyone; from students to scientists... <br/><br/>and EVERYONE between.
                </p>
            </div>
        </div>
    )
}