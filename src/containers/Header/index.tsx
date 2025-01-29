import React from 'react';
import Anchor from '../../components/Anchor';
import { HeaderProps } from './type';
import style from './style.module.scss';

type MenuItem = {
	href: string;
	label: string;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
	const menuItems: MenuItem[] = [
		{ href: '/', label: 'Home' },
		{ href: '/login', label: 'Login' },
		{ href: '/register', label: 'Register' },
	];

	return (
		<header className={style.header}>
			<div className={style.logo}>Logo</div>
			<nav className={style.menu}>
				{menuItems.map((item) => (
					<Anchor key={item.href} href={item.href}>
						{item.label}
					</Anchor>
				))}
			</nav>
			{children && <div className={style.additionalContent}>{children}</div>}
		</header>
	);
};

export default Header;
