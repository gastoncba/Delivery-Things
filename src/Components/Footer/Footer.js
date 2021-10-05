import React from 'react'
import {Icon, Container} from 'semantic-ui-react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <Container>
                <h5 className='footer-title'>Síguenos en nuestras redes</h5>
                <Icon name='facebook official' className='icon-footer'></Icon>
                <Icon name='instagram' className='icon-footer'></Icon>
                <Icon name='twitter' className='icon-footer'></Icon>
            </Container>
        </div>
    )
}

export default Footer
