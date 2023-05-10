import React from 'react';
import { Link } from 'react-router-dom';

import { useCarritoContext } from '../../context/CartContext';

import { ItemList } from '../ItemList/ItemList';

const ItemListCartContainer = () => {
	const { carrito, totalPrice, emptyCart } = useCarritoContext();

	return (
		<div className="container row col-12">
			<div className='col-8'>
				{ <ItemList products={ carrito } template={ "ItemCart" } />}
			</div>
			<div className='col-4'>
				<p>Resumen de la compra: S/.{ totalPrice() }</p>
				<button className="btn btn-danger my-2" onClick={ () => emptyCart() }>Vaciar Carrito</button>
				<Link className="nav-link btn btn-dark my-2" to={ "/" } >
					Continuar Comprando
				</Link>
				<Link className="nav-link btn btn-dark my-2" to={"/checkout"}>
					Finalizar Compra
				</Link>
			</div>
		</div>
	);
}

export { ItemListCartContainer };
