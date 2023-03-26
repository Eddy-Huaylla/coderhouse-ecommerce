import React from 'react';

import logo from '../../assets/img/logo.png';

import './styles.scss';

const Logo = () => {
	return (
		<div className='logo'>
			<a href="/">
				<img src={ logo } alt="Logo" />
			</a>
		</div>
	);
}

export { Logo };
