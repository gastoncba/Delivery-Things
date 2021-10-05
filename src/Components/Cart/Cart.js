import React, {useContext} from 'react'
import { CartContext } from '../../Context/Context';
import { Button, Icon, Modal, Item, Divider, Segment} from 'semantic-ui-react'
import ItemCart from '../ItemCart/ItemCart';
import {Link} from 'react-router-dom'

function Cart({state, open, close}) {

    const {carrito, isEmpty, total} = useContext(CartContext)

    return (
        <Modal
          open={state}
          onClose={() => open()}
          onOpen={() => close()}
        >
        <Modal.Header>Su Carrito
          <Icon name='cart'></Icon>
        </Modal.Header>
        <Modal.Content image scrolling>
          <Modal.Description>
            {!isEmpty() ? 
            <Item.Group divided>
            {carrito.map(item => {
                return(
                  <ItemCart item={item}></ItemCart>
                )
            })}
          <Divider horizontal>TOTAL:</Divider>
          <Segment basic textAlign='center'>
            <p>{`$${total}`}</p>
            <Link to={`/order`} onClick={() => close()}>
            <Button
              color='red'
              content='Realizar Pedido'
              icon='truck'
            />
            </Link>
          </Segment>
          </Item.Group>:
          <h2>Su carrito se encuentra vacio!</h2>}
          </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
          <Button 
                content="Ok, Entendido!"
                labelPosition='right'
                icon='checkmark'
                positive 
                onClick={() =>close()}/>
          </Modal.Actions>
        </Modal>
        )
      }

export default Cart
