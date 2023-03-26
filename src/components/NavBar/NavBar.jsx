import React from 'react';

import { MENU } from '../../utils/constants';
import { CartWidget } from '../CartWidget/CartWidget';
import { LinkList } from '../LinkList/LinkList';
import { Logo } from '../Logo/Logo';

import './styles.scss';

const NavBar = () => {
	const menu_links = MENU;

	return (
		<div className="navbar" >
			<Logo />
			<LinkList links={ menu_links } />
			<CartWidget quantity={ 0 }/>
		</div>
	);
}

export { NavBar };
