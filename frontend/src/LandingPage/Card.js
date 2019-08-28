import React from 'react'
import '../Styles/Card.scss';

export default function(props) {
    return(
        <div className='card'>
            <h1>{props.num}</h1>
            <h3>{props.description}</h3>
        </div>
    )
}