import { useState, createContext, useContext } from "react";

const CarritoContext = createContext();

export const useCarritoContext = () => useContext( CarritoContext );

export const CarritoProvider = ( props ) => {

    const [ carrito, setCarrito ] = useState( [] )

    const isInCart = ( idProduct ) => {
        return carrito.some( prod => prod.id === idProduct );
    }

    const addItem = ( product, quantity ) => {
        if ( isInCart( product.id ) ) {
            const indice = carrito.findIndex( prod => prod.id === product.id );
            const aux = [ ...carrito ];
            aux[indice].quantity = quantity;

            setCarrito( aux );
        } else {
            const newItem = {
                ...product,
                quantity: quantity
            };

            setCarrito( [ ...carrito, newItem ] );
        }
    }

    const removeItem = ( idProduct ) => {
        setCarrito( carrito.filter( prod => prod.id !== idProduct ) );
    }

    const emptyCart = () => {
        setCarrito( [] );
    }

    const getItemQuantity = () => {
        return carrito.reduce( ( acum, prod ) => acum += prod.quantity, 0 );
    }

    const totalPrice = () => {
        return carrito.reduce( (acum, prod ) => acum += ( prod.quantity * prod.precio ), 0);
    }

    return (
        <CarritoContext.Provider value={ { carrito, addItem, removeItem, emptyCart, totalPrice, getItemQuantity } }>
            { props.children }
        </CarritoContext.Provider>
    )

}
