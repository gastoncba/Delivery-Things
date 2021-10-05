import React, { createContext, useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

//1 - Aca creamos el contexto: 
export const CartContext = createContext();

//2 - Creamos el provider 
export const CartProvider = ({children}) => {
    
    //estados del carrito de compras
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cant, setCant] = useState(0)
    const [order, setOrder] = useState({})
    const [stateCompra, setStateCompra] = useState(false)
    
    //agregamos la hook useLocation para saber la ruta actual 
    //representa donde esta ubicado la app en un determinado momento
    const location = useLocation()

    //funciones del carrito 

    //Verificar si el producto esta en el carrito 
    function isInCart(id) {
        return carrito.some(item => item.id === id);
     }   
     //Agregar el producto al carrito
     function addItem(item, quantity) {
         
         if(isInCart(item.id)) {
             const nuevoCarrito = carrito.map(itemCarrito => {
                 if(itemCarrito.id === item.id) {
                     return {...itemCarrito, quantity: itemCarrito.quantity + quantity}
                 }
                 else {
                     return itemCarrito;
                 }
             })
             setCarrito(nuevoCarrito);       
         }
         else {
             setCarrito([...carrito, {...item, quantity}]);
         }
     }
 
     function getCant() {
         const cant = carrito.reduce((cant, item) => {
             return item.quantity + cant;
         }, 0);
 
         return cant;
     }
 
     function getTotal() {
 
         const total = carrito.reduce((sumaTotal, item) => {
             return (item.precio * item.quantity) + sumaTotal;
         }, 0);
         
         return total;
     }
 
     function getStock(producto) {
         const productoEnCarrito =  carrito.find(item => item.id === producto.id);
         return productoEnCarrito ? (producto.stock - productoEnCarrito.quantity) : producto.stock; 
     }
     
     function removeItem(producto) {
         setCarrito(carrito.filter(item => item.id !== producto.id));
     }
 
     function clear() {
         setCarrito([]);
     }

     function isEmpty() {
         return carrito.length == 0;
     }
 
     useEffect(()=> {
         const localCart = localStorage.getItem('cart');
         if(localCart) {
             setCarrito(JSON.parse(localCart))
         } else {
             localStorage.setItem('cart', JSON.stringify([]))
         }
     }, [])
     
    useEffect(() => {
         localStorage.setItem('cart', JSON.stringify(carrito))
         setCant(getCant())
         setTotal(getTotal())
    }, [carrito])

    //lo que hace este useEffect es practicamente chequear si esta la view /order , para que el 
    //icono del carrito de compras quede inactivo durante esta etapa de completado de datos.
    //eso se hace para que el usuario en la etapa de completado de datos no pueda acceder al carrito y haci evitar 
    //inconcistencias 
    useEffect(() => {
        const route = location.pathname
        if(route == '/order') {
            setStateCompra(true)
        } else {
            setStateCompra(false)
        }
    }, [location])

     return (
         <CartContext.Provider value={{carrito, setCarrito, addItem, cant, getStock, total, removeItem, clear, isEmpty, order, setOrder, stateCompra}}>
             {children}
         </CartContext.Provider>
     );

}