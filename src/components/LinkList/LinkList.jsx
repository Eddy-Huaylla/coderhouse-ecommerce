import React from 'react';
import { Link } from '../Link/Link';

import './styles.scss';

const LinkList = ( { links = [] } ) => {
	return (
		<ul className='link-list'>
			{
				links.map( ( link, index ) => {
					return <Link slug={ link.slug } label={ link.label } child={ link.child } key={index} />
				})
			}
		</ul>
	);
}

export { LinkList };
