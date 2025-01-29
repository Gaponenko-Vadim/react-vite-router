import React from 'react';
import style from './style.module.scss';
import Anchor from '../Anchor';
import { MenuProps } from './types';

const Menu: React.FC<MenuProps> = ({ items }) => {
	return (
		<nav className={style.menu}>
			{items.map((item) => (
				<Anchor key={item.href} href={item.href}>
					{item.label}
				</Anchor>
			))}
		</nav>
	);
};

export default Menu;
