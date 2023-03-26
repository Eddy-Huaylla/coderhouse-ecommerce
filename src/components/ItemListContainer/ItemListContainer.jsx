import React from 'react';

import './styles.scss';

const ItemListContainer = ( { greeting } ) => {
	return (
		<div className='item-list-container'>
			{ greeting }
		</div>
	);
}

export { ItemListContainer };
