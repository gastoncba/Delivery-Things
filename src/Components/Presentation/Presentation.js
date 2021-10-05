import React from 'react'
import './Presentation.css'
import Slider from '../Carousel/Slider'
import SubBar from '../SubBar/SubBar'
import Footer from '../Footer/Footer'


function Presentation({loc}) {
    
    return (
        <div>
            {loc()}
            <h1 className='title-main'>
                Bienvenidos a <b>Delivery Things!</b> 
            </h1>
            <Slider></Slider>
            <div className='container-promo'>
                <p className='first-text'>Todo lo que necesitas, <b className='second-text'>a los mejores precios!</b></p>
            </div>
            <SubBar></SubBar>
            <Footer></Footer>
        </div>
    )
}

export default Presentation
