import React from 'react';
import Card from './Card';
export default function LandingPage() {
    return(
        <div>
         


    <div class="section section-header">
        <div class="parallax filter filter-color-white">
            <div class="image"
                style={{backgroundImage: `url('https://cdn.iit-techambit.in/websiteAssets/front.jpg')`}}>
            </div>
            <div class="container">
                <div class="content">
                    <div class="title-area">
                        <p>Beta</p>
                        <h1 class="title-modern">IIT Tech Ambit</h1>
                        <h2>Subscribe for free to read about research and technology breakthroughs happenings in the IIT ecosystem</h2>
                        <div class="separator line-separator">♦</div>
                    </div>

                    <div class="button-get-started">
                        <a href="http://www.creative-tim.com/product/gaia-bootstrap-template" target="_blank" class="btn btn-white btn-fill btn-lg ">
                            About us
                        </a>
                        <a href="/issues" class="btn btn-white btn-fill btn-lg ">
                            Start Reading
                        </a>
                        <a href="http://www.creative-tim.com/product/gaia-bootstrap-template" target="_blank" class="btn btn-white btn-fill btn-lg ">
                            Support Us
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>


    <div className="section section-header">
        <div class="parallax filter filter-color-white">
            <div class="image"
                style={{backgroundImage: `url('https://cdn.iit-techambit.in/websiteAssets/iitkgp.jpg')`}}>
            </div>
            <div className="container">
                <div className="row">
                    <div className="title-area">
                        <h2>IIT Kharagpur invests in IIT Tech Ambit</h2>
                        <div className="separator separator-danger">✻</div>
                        <p className="description">We'd like to announce that IIT Kharagpur has made an investment in Tech Ambit, which will help us further our efforts in our mission of making research and tech innovations accessible to India as a whole. Funding amount to be set at 1.2 million rupees.</p>
                    </div>
                </div>
                <div className='cards'>
                    <Card />
                    <Card />
                    <Card />
                </div>
        </div>
        
    </div>


</div>
   
        </div>
    )
}