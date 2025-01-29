import React from 'react';
import Anchor from '../../components/Anchor';
import { HeaderProps } from './type';
import style from './style.module.scss';
import Menu from '@/components/Menu/Menu';
import menuItems from '@/assets/menuItems';

const Header: React.FC<HeaderProps> = ({ children }) => {
	return (
		<header className={style.header}>
			<div className={style.logo}>Logo</div>
			<Menu items={menuItems} />
			{children && <div className={style.additionalContent}>{children}</div>}
		</header>
	);
};

export default Header;
