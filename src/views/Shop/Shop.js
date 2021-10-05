import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image, Button} from 'semantic-ui-react'
import './Shop.css'

function Shop({shop}) {
    return (
        <Card className='container-shop'>
            <Image className='img-card' src={shop.img} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{shop.nombre}</Card.Header>
            <Card.Meta>
                <span className='date'>{shop.rubro}</span>
            </Card.Meta>
            <Card.Description>
                {shop.descripcion}
            </Card.Description>
            </Card.Content>
            <div className='button-show-product'>
            <Link to={`/productos/${shop.nombre}`} style={{ textDecoration: 'none' }}>
                <Button style={{backgroundColor: '#f44336', color: 'white'}}>Ver Productos</Button>
            </Link>
            </div>
        </Card>
    )
}

export default Shop
