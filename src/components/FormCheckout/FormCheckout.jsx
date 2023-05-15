import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useCarritoContext } from '../../context/CartContext';
import { createOrdenCompra, getProduct, updateProduct } from '../../services/firebase';
import { useNavigate } from 'react-router-dom';

import './styles.scss';

const FormCheckout = () => {
	const datForm = useRef();
	const [ loading, setLoading ] = useState( false );
	const navigate = useNavigate();
	const { carrito, totalPrice, emptyCart } = useCarritoContext();
	const { updateQuantityItem } = useCarritoContext();

	const navigateToHome = ( carrito ) => {
		if( carrito.length <= 0 ) {
			navigate( "/" );
		}
	};

	const mostrarAlerta = ( texto ) => {
		toast( texto , {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
		} );
	}

	const updateProductDB = () => {
		const aux = [ ...carrito ]

        aux.forEach( prodCarrito => {
            getProduct( prodCarrito.id ).then( prodBBD => {
                if ( prodBBD.stock >= prodCarrito.quantity ) {
                    prodBBD.stock -= prodCarrito.quantity;
                    updateProduct( prodBBD.id, prodBBD );
                } else {
                    mostrarAlerta("El stock no es mayor o igual a la cantidad que se quiere comprar");
					updateQuantityItem( prodCarrito.id, prodBBD.stock );
                }
            })
        });
	}

	const createOrder = (cliente, e ) => {
		const aux = [ ...carrito ]
		const aux2 = aux.map(prod => ({ id: prod.id, quantity: prod.quantity, precio: prod.precio }));

        createOrdenCompra(
			cliente,
			totalPrice(),
			aux2,
			new Date().toLocaleString('es-PE', {
				timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
			})
		)
		.then(ordenCompra => {
			mostrarAlerta( `🛒 Muchas gracias por comprar con nosotros, su ID de compra es ${ordenCompra.id} por un total de ${totalPrice()}, en breve nos contactaremos para el envio` );
			emptyCart();
			e.target.reset();
			navigateToHome();
		})
		.catch(error => {
			mostrarAlerta( "Pasó algun error, intente nuevamente." );
			console.error(error)
		})
		.finally( () => {
			setLoading( false );
		});
	}

    const consultarForm = ( e ) => {
        e.preventDefault();
		setLoading( true );

        const datosFormulario = new FormData( datForm.current );
        const cliente = Object.fromEntries( datosFormulario );
		const valoresCliente = Object.values( cliente );

		if ( valoresCliente.every( valor => valor !== '') ) {

			if( cliente.email !== cliente.emailRepetido ) {
				mostrarAlerta( '📧 El email tiene que ser igual.' );
				setLoading( false );
				return;
			}

			updateProductDB();
			createOrder( cliente, e );
			e.target.reset();
		} else {
			mostrarAlerta( '⚠️ Completar todos los datos' );
			setLoading( false );
			return;
		}
    }

	useEffect( () => {
		navigateToHome( carrito );
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ carrito ] );

	return (
		<div className="container divForm" >
            <form onSubmit={ consultarForm } ref={ datForm } disabled={ loading ? true : false }>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Repetir Email</label>
                    <input type="email" className="form-control" name="emailRepetido" />
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" />
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Numero telefonico</label>
                    <input type="number" className="form-control" name="celular" />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Direccion</label>
                    <input type="text" className="form-control" name="direccion" />
                </div>
                <button type="submit" className="btn btn-primary">Finalizar Compra</button>
            </form>
        </div>
	);
}

export { FormCheckout };
