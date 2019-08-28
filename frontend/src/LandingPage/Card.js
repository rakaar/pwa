import React from 'react'


export default function(props) {
    return(
        <div className='statcard'>
            <h1>{props.num}</h1>
            <h3>{props.description}</h3>
        </div>
    )
}