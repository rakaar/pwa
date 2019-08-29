import React from 'react';
import '../Styles/LandingPage/LandingPage.scss'

export default function Workflow() {
  return (
    <div>
      <div className='section section-header wwds' style={{ marginLeft: '0' }}>
        <h1 className="wwdt">What We Do</h1>
        <div className='separator separator-danger'>✻</div>
        <div className="imgd">
        <img
          src='https://cdn.iit-techambit.in/websiteAssets/workflow.jpg'
          width='100%' />
          <div className="imgoverlay"></div>
        </div>
        
      </div>
    </div>
  );
}
