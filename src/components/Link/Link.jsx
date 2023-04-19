import React, { useState } from 'react';

import { isMobile } from 'react-device-detect';

import { LinkList } from '../LinkList/LinkList';

import './styles.scss'

const Link = ( { slug, label, child = [] } ) => {
	const [active, setActive] = useState(false);

	const activeSubMenu = () => {
		setActive( !active );
	}

	return (
		<li className="nav-item link">
			<a className="nav-link active link__a" href={ slug }>
				{ label }
			</a>

			{ child?.length > 0 && (
				<>
					{
						isMobile && (
							<div className='link__action-child' onClick={ () => activeSubMenu() }>
								<i class={`fas ${ active ? "fa-angle-up" : "fa-angle-down" }`}></i>
							</div>

						)
					}
				<div className={ `link__child ${ active ? "active" : "inactive" }` }>
					<LinkList links={child} />
				</div>
				</>
			) }
		</li>
	);
}

export { Link };
