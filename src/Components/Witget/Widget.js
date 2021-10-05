import React from 'react'
import './Widget.css'
import img from './truck.png'

function Widget() {
    return (
        <img src={img} height='40px' width='40px' className='widget'/>
    )
}

export default Widget
