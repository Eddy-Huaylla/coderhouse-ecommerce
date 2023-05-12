import { useState, createContext, useContext } from "react";

const CarritoContext = createContext();

export const useCarritoContext = () => useContext( CarritoContext );

export const CarritoProvider = ( props ) => {

    const [ carrito, setCarrito ] = useState( [] )

    const isInCart = ( idProduct ) => {
        return carrito.some( prod => prod.id === idProduct );
    }

	const updateQuantityItem = ( idProduct, quantity ) => {
		const indice = carrito.findIndex( prod => prod.id === idProduct );
		const aux = [ ...carrito ];
		aux[indice].quantity = quantity;

		setCarrito( aux );
	}

    const addItem = ( product, quantity ) => {
        if ( isInCart( product.id ) ) {
            updateQuantityItem( product.id, quantity )
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
        <CarritoContext.Provider value={ { carrito, updateQuantityItem, addItem, removeItem, emptyCart, totalPrice, getItemQuantity } }>
            { props.children }
        </CarritoContext.Provider>
    )

}
