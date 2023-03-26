import React from 'react';
import { LinkList } from '../LinkList/LinkList';

import './styles.scss'

const Link = ( { slug, label, child = [] } ) => {
	return (
		<li className='link'>
			<a href={ slug } className='link__a'>{ label }</a>

			{ child?.length > 0 && (
				<div className='link__child'>
					<LinkList links={child} />
				</div>
			) }
		</li>
	);
}

export { Link };
