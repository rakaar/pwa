import React from 'react'
import '../Styles/Card.scss';

export default function Card(props) {
    return(
        <div className='cad'>
            <h1>{props.num}</h1>
            <h3>{props.description}</h3>
        </div>
    )
}