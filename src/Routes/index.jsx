import React, { Suspense } from 'react';
import { Routes as RoutesDom, Route } from 'react-router-dom'

import { Spinner } from '../components/Spinner';
import { NotFound } from '../pages/NotFound';
import { Home } from '../pages/Home';
import { ListProducts } from '../pages/ListProducts';
import { DetailProduct } from '../pages/DetailProduct';
import { Checkout } from '../pages/Checkout';
import { Cart } from '../pages/Cart';

const Routes = () => {
	return (
		<Suspense fallback = { <Spinner /> }>
			<RoutesDom>
				<Route index path = '/' element = { <Home /> } />
				<Route path = '/category/:category/:subcategory' element = { <ListProducts /> } />
				<Route path = '/category/:category' element = { <ListProducts /> } />
				<Route path = '/product/:id' element={ <DetailProduct /> } />
				<Route path = '/cart' element={ <Cart /> } />
				<Route path = '/checkout' element={ <Checkout /> } />

				<Route path = '/*' element={ <NotFound /> } />
			</RoutesDom>

		</Suspense>
	);
}

export { Routes };
