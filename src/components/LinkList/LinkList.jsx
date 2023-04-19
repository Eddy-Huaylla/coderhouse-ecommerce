import React from 'react';
import { Link } from '../Link/Link';

import './styles.scss';

const LinkList = ( { links = [] } ) => {
	return (
		<>
			<div className="collapse navbar-collapse justify-content-center" id="navbarColor03">
				<ul className="navbar-nav me-auto link-list">
					{
						links.map( ( link, index ) => {
							return <Link slug={ link.slug } label={ link.label } child={ link.child } key={index} />
						})
					}
				</ul>
			</div>
		</>

	);
}

export { LinkList };
