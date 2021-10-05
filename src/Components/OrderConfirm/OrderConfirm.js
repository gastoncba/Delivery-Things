import React, {useContext, useState} from 'react'
import { CartContext } from '../../Context/Context';
import { Container, List, Icon, Button, Confirm} from 'semantic-ui-react'
import './OrderConfirm.css'

function OrderConfirm({nextFinal, prev}) {

    const [acept, setAcept] = useState(false)
    const {carrito, total, order, clear} = useContext(CartContext)

    const show = () => {
        setAcept(true)
    }

    const handleConfirm = () => {
        setAcept(false)
        clear()
        nextFinal()
    }

    const handleCancel = () => {
        setAcept(false)
    }

    const prevStep = () => {
        prev()
    }

    return (
        <div>
        <Container>
            <h1>Confirmación de Pedido</h1>
            <p><b>Cuidad:</b> {order.cuidad}<br/>
            <b>Nombre de calle:</b> {order.calle}<br/>
            <b>Forma de pago:</b> {order.formaPago}<br/>
            <b>Productos:</b>
            <List bulleted>
                {carrito.map(prod => {
                    return(
                        <List.Item>{prod.nombre} X {prod.quantity}</List.Item>
                    )
                })}
            </List>
            <br/>
            <b>Total $:</b> {total}
            </p>
        </Container>

        <div className='next-previous'>
            <Button icon secondary labelPosition='left' onClick={() => prevStep()}>
            <Icon name='left arrow' />
            Atras
            </Button>
            <Button icon color='red' labelPosition='right' onClick={()=> show()}>
            Aceptar
            <Icon name='right arrow'/>
            </Button>
            <Confirm className='container-confirm'
            header='Confirmación de Compra'
            content='Desea confirmar la compra?'
            confirmButton='confirmar'
            cancelButton='cancelar'
            open={acept}
            onCancel={handleCancel}
            onConfirm={handleConfirm}
            />
        </div>
        </div>
    )
}

export default OrderConfirm
