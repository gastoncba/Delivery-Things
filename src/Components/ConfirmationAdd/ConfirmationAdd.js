import React from 'react'
import {Transition, Modal, Button, Icon} from 'semantic-ui-react'

function ConfirmationAdd({visibleState, cerrar, nombreProd}) {
    return (
        <Transition visible={visibleState} animation="jiggle" duration={600}>
        <Modal size="small" open={visibleState} onClose={() => cerrar()}>
        <Modal.Header>Agregado a tu carrito!<Icon name='shopping cart'></Icon></Modal.Header>
        <Modal.Content>
            <p><b>{nombreProd} agregado!</b></p>
        </Modal.Content>
        <Modal.Actions>
            <Button 
            content="Ok, Entendido!"
            labelPosition='right'
            icon='checkmark'
            positive 
            onClick={() => cerrar()}/>
        </Modal.Actions>
        </Modal>
        </Transition>
    )
}

export default ConfirmationAdd
