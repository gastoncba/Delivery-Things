import React , {useEffect, useState} from 'react'
import Shop from '../Shop/Shop'
import './Shops.css'
import {Loader} from 'semantic-ui-react'

function Shops() {

    const [shops, setShops] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://mocki.io/v1/d2099ae8-4f52-47d3-8b21-10f9ca3107a0')
        .then(res => res.json())
        .then(data => {
            setShops(data)
            setLoading(false)
        })
        .catch(e => console.log(e))
    }, [])

    return (
        <div>
        <h1 className='shops-title'>Comercios</h1>
        <div className='container-shops'>
            {loading ? 
            <Loader active={true}>Cargando...</Loader>: 
            shops.map(shop => {
                return(
                    <Shop shop={shop}></Shop>
                )
            })}
        </div>
        </div>
    )
}

export default Shops
