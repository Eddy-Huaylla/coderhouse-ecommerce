import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getProducts } from '../../services/firebase';

import { ItemList } from '../ItemList/ItemList';

import './styles.scss';


const ItemListContainer = () => {
	const { category, subcategory } = useParams();
	const [ products, setProducts ] = useState( [] );

	useEffect( () => {
		getProducts()
		.then( response => {
			const listProduct = response.filter( prod => prod.stock > 0 )

			let filteredProducts = [ ...listProduct ];

			if (category) {
				filteredProducts = filteredProducts.filter( prod => prod.idCategoria === parseInt(category) );
			}

			if (subcategory) {
				filteredProducts = filteredProducts.filter( prod => prod?.idSubCategoria === parseInt(subcategory) );
			}

			setProducts(filteredProducts);
		})
		.catch( e => {
			console.error( e );
		})
	}, [ category, subcategory ] )

	return (
		<div className="row item-list-container">
			{<ItemList products={products} />}
		</div>
	);
}

export { ItemListContainer };
