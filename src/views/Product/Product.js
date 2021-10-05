import React, {useContext, useState} from 'react'
import { Card, Image } from 'semantic-ui-react'
import { CartContext } from '../../Context/Context'
import ProductCount from '../../Components/ProductCount/ProductCount';
import ConfirmationAdd from '../../Components/ConfirmationAdd/ConfirmationAdd';
import './Product.css'

function Product({prod}) {

    const [vis, setVis] = useState(false);

    const {getStock, addItem} = useContext(CartContext);

    const stock = getStock(prod);

    const onAdd = (quantity) => {
        addItem(prod, quantity);
        setVis(true)
    }

    const cerrar = ()=> {
        setVis(false)
    }

    return (
        <div>
        <Card className='container-product'>
            <Image src={prod.img} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{prod.nombre}</Card.Header>
            <Card.Description>
                <b className='date'>${prod.precio}</b>
            </Card.Description>
            <Card.Description>
                {prod.descripcion}
            </Card.Description>
            <ProductCount stock={stock} initialValue={1} onAdd={onAdd}></ProductCount>
            </Card.Content>
        </Card>
        <ConfirmationAdd visibleState={vis} cerrar={cerrar}></ConfirmationAdd>
        </div>
    )
}

export default Product
