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
                  We'd like to announce that IIT Kharagpur has made an
                  investment in Tech Ambit, which will help us further our
                  efforts in our mission of making research and tech innovations
                  accessible to India as a whole. Funding amount to be set at
                  1.2 million rupees.
                </p>
            </div>
        </div>
    )
}