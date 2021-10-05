import React, {useEffect, useState} from 'react'
import Product from '../Product/Product';
import './Products.css'
import {Loader} from 'semantic-ui-react'
import './Products.css'

function Products({match}) {
    const comercio = match.params.comercio;
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://mocki.io/v1/caa65452-e9e0-4168-ad87-1c07d7e87193')
        .then(res => res.json())
        .then(data => {
            const dataFilter = data.filter(i => i.comercio == comercio)
            setProducts(dataFilter);
            setLoading(false);
        })
        .catch(e => console.log(e))
    }, [])

    return (
        <div>
        <h1 className='title-products'>Productos de {comercio}</h1>
        <div className='container-products'>
            {loading ? 
            <Loader active={true}>Cargando...</Loader>: 
            products.map(prod => {
                return(
                    <Product prod={prod}></Product>
                )
            })}
        </div>
        </div>
    )
}

export default Products
