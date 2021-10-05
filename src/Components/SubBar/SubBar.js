import React from 'react'
import burguer from './hamburger.png'
import medicine from './medicines.png'
import dessert from './dessert.png'
import champagne from './champagne.png'


function SubBar() {
    return (
        <div className='sub-bar'>
            <img src={burguer} height='80px' width='80px' className='widget'/>
            <img src={medicine} height='80px' width='80px' className='widget'/>
            <img src={dessert} height='80px' width='80px' className='widget'/>
            <img src={champagne} height='80px' width='80px' className='widget'/>
        </div>
    )
}

export default SubBar
