import React,{useContext} from 'react'
import {Item, Button, Icon} from 'semantic-ui-react'
import { CartContext } from '../../Context/Context'

function ItemCart({item}) {

    const {removeItem} = useContext(CartContext)
    return (
        <Item>
          <Item.Image size='small' src={item.img}/>
          <Item.Content>
            <Item.Header as='a'>{item.nombre}</Item.Header>
            <Item.Meta>{`Subtotal: $${item.quantity * item.precio}`}</Item.Meta>
            <Item.Description>
            <p>{`Precio: $${item.precio}`}</p>
            <p>{`Cantidad: ${item.quantity}`}</p>
            </Item.Description>
            <Item.Extra>
            <Button secondary onClick={() => removeItem(item)}>
                <Icon name='trash'></Icon>
                Eliminar
            </Button>
            </Item.Extra>
          </Item.Content>
          </Item>
    )
}

export default ItemCart
