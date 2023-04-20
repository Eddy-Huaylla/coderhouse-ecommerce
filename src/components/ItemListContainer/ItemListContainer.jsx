import React, { useEffect, useState } from 'react';

import { all } from '../../services/products';

import { ItemList } from '../ItemList/ItemList';

import './styles.scss';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
	const { category, subcategory } = useParams();
	const [ products, setProducts ] = useState( [] );

	useEffect( () => {
		all( true )
		.then( response => {
			var listProduct = response.filter( prod => prod.stock > 0 )

			if( category ) {
				listProduct = listProduct.filter( prod => prod.idCategoria === parseInt( category ) );
			}

			if( subcategory ) {
				listProduct = listProduct.filter( prod => prod?.idSubCategoria === parseInt( subcategory ) );
			}

			setProducts( listProduct );
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
