import React, {useState} from 'react'
import IconButton from '@material-ui/core/IconButton';
import { Typography } from '@material-ui/core';
import './ProductCount.css'
import { Button } from 'semantic-ui-react'


function ProductCount({stock, initialValue, onAdd}) {

    const [cant, setCant] = useState(initialValue)

    const add = () => {
        if(cant !== stock) {
            setCant(cant + 1)
        } 
    }

    const remove = () => {
        if(cant !== initialValue) {
            setCant(cant - 1)
        } 
    }

    return (
        <div>
            <div className='container-cant-product'>
            <Typography>Cantidad: {cant}</Typography>
            <Button.Group>
                <Button
                    disabled={cant == stock}
                    icon='plus'
                    onClick={() => add()}
                />
                <Button
                    disabled={cant === initialValue}
                    icon='minus'
                    onClick={() => remove()}
                />
                </Button.Group>
                <Button style={{marginLeft:'2%', backgroundColor: '#f44336', color: 'white'}} onClick={() => onAdd(cant)}>Agregar al Carrito</Button>
            </div>
        </div>
    )
}

export default ProductCount
