import React from 'react';

import { isMobile } from 'react-device-detect';

import { MENU } from '../../utils/constants';
import { CartWidget } from '../CartWidget/CartWidget';
import { LinkList } from '../LinkList/LinkList';
import { Logo } from '../Logo/Logo';

import './styles.scss';

const NavBar = () => {

	const menu_links = MENU;

	return (
		<nav className="navbar navbar-expand-lg navbar-dark">
			<div className="container-fluid">
				<Logo />

				{
					isMobile
					? (
						<>
							<div className='navbar__actions-mobile'>
								<CartWidget quantity={ 0 }/>
								<button
									className="navbar-toggler"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#navbarColor03"
									aria-controls="navbarColor03"
									aria-expanded="false"
									aria-label="Toggle navigation"
								>
									<span className="navbar-toggler-icon" />
								</button>
							</div>
							<LinkList links={ menu_links } />
						</>
					)
					: (
						<>
							<LinkList links={ menu_links } />
							<CartWidget quantity={ 0 }/>
						</>
					)
				}

			</div>
		</nav>
	);
}

export { NavBar };
