import React from 'react';

import './styles.scss';

const Spinner = () => {
	return (
		<div className='spinner'>
			<div className='spinner__icon'>
			</div>
			<span>Cargando....</span>
		</div>
	);
}

export { Spinner };
